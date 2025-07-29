import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-subtle min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-8">
            <Shield className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">End-to-end encrypted messaging</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Quick<span className="text-primary">Drop</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Send secure messages with just a UID
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center px-4 py-2 bg-card rounded-full border border-border shadow-soft">
              <Lock className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm text-muted-foreground">Encrypted</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-card rounded-full border border-border shadow-soft">
              <Zap className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm text-muted-foreground">No signup required</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-card rounded-full border border-border shadow-soft">
              <Shield className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm text-muted-foreground">Self-destructing</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero">
              <Link to="/send">Send a Message</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-4 text-lg">
              <Link to="/register">Register for UID</Link>
            </Button>
          </div>

          {/* Trust Indicator */}
          <p className="text-sm text-muted-foreground mt-8">
            Messages are encrypted client-side and auto-delete after viewing
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;