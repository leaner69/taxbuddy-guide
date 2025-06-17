
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white border-b sticky top-12 z-40">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("features")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => navigate("/about")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              About
            </button>
            {user ? (
              <div className="flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </Button>
                <Button variant="outline" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button onClick={() => navigate("/auth")}>
                Sign In
              </Button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection("features")}
                className="text-left text-gray-600 hover:text-primary transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection("how-it-works")}
                className="text-left text-gray-600 hover:text-primary transition-colors"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection("pricing")}
                className="text-left text-gray-600 hover:text-primary transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => navigate("/about")}
                className="text-left text-gray-600 hover:text-primary transition-colors"
              >
                About
              </button>
              {user ? (
                <div className="flex flex-col gap-2">
                  <Button 
                    variant="ghost" 
                    onClick={() => navigate("/dashboard")}
                    className="justify-start"
                  >
                    Dashboard
                  </Button>
                  <Button variant="outline" onClick={handleSignOut} className="justify-start">
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button onClick={() => navigate("/auth")} className="justify-start">
                  Sign In
                </Button>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
