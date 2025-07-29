import { Link, useLocation } from "react-router-dom";
import { Shield } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-card border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <Shield className="h-8 w-8 text-primary group-hover:text-primary-glow transition-colors" />
            <span className="text-xl font-bold text-foreground">QuickDrop</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/send" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/send" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Send Message
            </Link>
            <Link 
              to="/register" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/register" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Get UID
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;