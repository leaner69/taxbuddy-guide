
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/#how-it-works", label: "How It Works" },
    { path: "/#pricing", label: "Pricing" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" }
  ];

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsOpen(false);

    // If it's a hash link
    if (path.includes("#")) {
      const [pagePath, hash] = path.split("#");
      
      // If we're already on the home page and the link is to a section on the home page
      if (isHomePage && pagePath === "/") {
        const targetElement = document.getElementById(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // We're on another page, navigate to home page first, then scroll to the section
        navigate("/", { state: { scrollToId: hash } });
      }
    } else {
      // Regular navigation
      navigate(path);
    }
  };

  return (
    <header className="bg-white fixed top-8 w-full z-40 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <RouterLink to="/" className="text-2xl font-bold bg-gradient-to-r from-[#2A3B56] to-[#4F46E5] text-transparent bg-clip-text">
          TaxBuddy
        </RouterLink>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <nav>
            <ul className="flex items-center space-x-6">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    className={cn(
                      "text-base font-medium text-gray-700 hover:text-[#4F46E5] transition-colors",
                      "py-2 px-2 rounded-md hover:bg-gray-100"
                    )}
                    onClick={(e) => handleNavigation(e, item.path)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
              <nav className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <div key={item.path}>
                    <a
                      href={item.path}
                      className="text-lg font-medium hover:text-[#4F46E5] hover:bg-gray-100 p-2 rounded-md transition-colors block"
                      onClick={(e) => handleNavigation(e, item.path)}
                    >
                      {item.label}
                    </a>
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
