
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-16">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold font-playfair mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-6 font-playfair">Oops! Page not found</p>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg" className="bg-gold hover:bg-amber-600 text-black">
            <Link to="/">Return to Home</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
