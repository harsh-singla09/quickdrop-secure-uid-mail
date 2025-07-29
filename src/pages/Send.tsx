import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Lock, Clock, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Send = () => {
  const [uid, setUid] = useState("");
  const [message, setMessage] = useState("");
  const [passphrase, setPassphrase] = useState("");
  const [expiry, setExpiry] = useState("1-day");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!uid || !message) {
      toast({
        variant: "destructive",
        title: "Missing fields",
        description: "Please enter both UID and message",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/success", { 
        state: { 
          message: "Message sent securely!",
          uid: uid 
        } 
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
            <Shield className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Secure Message Delivery</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Send Encrypted Message</h1>
          <p className="text-muted-foreground">Send a secure message using the recipient's UID</p>
        </div>

        <Card className="bg-gradient-card border border-border shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" />
              Message Details
            </CardTitle>
            <CardDescription>
              Your message will be encrypted and delivered securely
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="uid">Recipient UID *</Label>
                <Input
                  id="uid"
                  type="text"
                  placeholder="Enter recipient's unique ID"
                  value={uid}
                  onChange={(e) => setUid(e.target.value)}
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Type your secure message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  className="bg-background resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="passphrase">Optional Passphrase</Label>
                <Input
                  id="passphrase"
                  type="password"
                  placeholder="Add extra security (optional)"
                  value={passphrase}
                  onChange={(e) => setPassphrase(e.target.value)}
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="expiry">Message Expiry</Label>
                <Select value={expiry} onValueChange={setExpiry}>
                  <SelectTrigger className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-hour">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        1 Hour
                      </div>
                    </SelectItem>
                    <SelectItem value="1-day">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        1 Day
                      </div>
                    </SelectItem>
                    <SelectItem value="1-week">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        1 Week
                      </div>
                    </SelectItem>
                    <SelectItem value="1-view">
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        One-time view
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full" 
                  variant="hero"
                  disabled={isLoading}
                >
                  {isLoading ? "Encrypting & Sending..." : "Send Securely"}
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Your message will be encrypted and emailed securely
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Send;