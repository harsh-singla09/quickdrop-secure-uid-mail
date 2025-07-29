import { useLocation, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Send, Home, Clock } from "lucide-react";

const Success = () => {
  const location = useLocation();
  const { message, uid } = location.state || { 
    message: "Action completed successfully!", 
    uid: "" 
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/10 text-success border border-success/20 mb-4">
            <CheckCircle className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Success</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">{message}</h1>
          {uid && (
            <p className="text-muted-foreground">Message delivered to UID: <span className="font-mono font-medium">{uid}</span></p>
          )}
        </div>

        <Card className="bg-gradient-card border border-border shadow-elegant">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            <CardTitle>Message Delivered Successfully</CardTitle>
            <CardDescription>
              Your encrypted message has been sent securely
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="bg-muted/30 p-4 rounded-lg">
              <h3 className="font-medium text-foreground mb-2 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                What happens next?
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• The recipient will receive your encrypted message via email</li>
                <li>• They can decrypt it using their private key</li>
                <li>• Message will auto-delete based on your expiry settings</li>
                <li>• No personal information was shared during delivery</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="outline" className="flex-1">
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Go Home
                </Link>
              </Button>
              <Button asChild variant="default" className="flex-1">
                <Link to="/send">
                  <Send className="h-4 w-4 mr-2" />
                  Send Another Message
                </Link>
              </Button>
            </div>

            <div className="text-center pt-4">
              <p className="text-xs text-muted-foreground">
                Thank you for using QuickDrop for secure messaging
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Success;