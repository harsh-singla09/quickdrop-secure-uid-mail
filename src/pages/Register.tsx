import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Hash, Copy, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [customUID, setCustomUID] = useState("");
  const [generatedUID, setGeneratedUID] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const generateUID = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "UID copied to clipboard",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast({
        variant: "destructive",
        title: "Missing fields",
        description: "Please enter both name and email",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const finalUID = customUID || generateUID();
      setGeneratedUID(finalUID);
      setIsLoading(false);
      setIsRegistered(true);
    }, 2000);
  };

  if (isRegistered) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <Navigation />
        
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/10 text-success border border-success/20 mb-4">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Registration Successful</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Your UID is Ready!</h1>
            <p className="text-muted-foreground">Save your UID and share it with people you want to receive messages from</p>
          </div>

          <Card className="bg-gradient-card border border-border shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Welcome, {name}!</CardTitle>
              <CardDescription>Your secure UID has been generated</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="text-center">
                <Label className="text-sm text-muted-foreground">Your Unique ID</Label>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Badge variant="outline" className="text-2xl font-mono px-6 py-3 bg-primary/5 border-primary/20">
                    {generatedUID}
                  </Badge>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(generatedUID)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="font-medium text-foreground mb-2">Next Steps:</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Share your UID with trusted contacts</li>
                  <li>• Check your email for encrypted messages</li>
                  <li>• Your UID never expires and stays private</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={() => navigate("/")}
                  variant="outline" 
                  className="flex-1"
                >
                  Go Home
                </Button>
                <Button 
                  onClick={() => navigate("/send")}
                  variant="default" 
                  className="flex-1"
                >
                  Send Your First Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
            <Hash className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">UID Registration</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Get Your Secure UID</h1>
          <p className="text-muted-foreground">Register to receive encrypted messages through your unique identifier</p>
        </div>

        <Card className="bg-gradient-card border border-border shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Account Information
            </CardTitle>
            <CardDescription>
              Create your secure identity for receiving messages
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background"
                />
                <p className="text-xs text-muted-foreground">
                  Encrypted messages will be delivered here
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="uid">Custom UID (Optional)</Label>
                <Input
                  id="uid"
                  type="text"
                  placeholder="Leave blank for auto-generation"
                  value={customUID}
                  onChange={(e) => setCustomUID(e.target.value.toUpperCase())}
                  className="bg-background font-mono"
                  maxLength={12}
                />
                <p className="text-xs text-muted-foreground">
                  Choose your own UID or let us generate one for you
                </p>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full" 
                  variant="hero"
                  disabled={isLoading}
                >
                  {isLoading ? "Generating UID..." : "Generate UID"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;