import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center" style={{ background: `hsl(var(--background))` }}>
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <Music className="w-10 h-10 text-primary-foreground" />
        </div>
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist. 
          Let's get you back to our musical community.
        </p>
        <Button 
          onClick={() => window.location.href = "/"}
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
