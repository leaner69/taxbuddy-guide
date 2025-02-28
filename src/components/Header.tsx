
import { Link as RouterLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/#how-it-works", label: "How It Works" },
    { path: "/#pricing", label: "Pricing" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" }
  ];

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
                    onClick={(e) => {
                      // For hash links on the same page, prevent default behavior and scroll smoothly
                      if (item.path.startsWith("/#") && window.location.pathname === "/") {
                        e.preventDefault();
                        const targetId = item.path.split("#")[1];
                        const targetElement = document.getElementById(targetId);
                        if (targetElement) {
                          targetElement.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
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
                      onClick={(e) => {
                        setIsOpen(false);
                        // For hash links on the same page, prevent default behavior and scroll smoothly
                        if (item.path.startsWith("/#") && window.location.pathname === "/") {
                          e.preventDefault();
                          const targetId = item.path.split("#")[1];
                          const targetElement = document.getElementById(targetId);
                          if (targetElement) {
                            targetElement.scrollIntoView({ behavior: "smooth" });
                          }
                        }
                      }}
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
