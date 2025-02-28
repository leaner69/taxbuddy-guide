
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { 
      path: "/", 
      label: "Home",
      subItems: [
        { path: "/#how-it-works", label: "How It Works" },
        { path: "/#pricing", label: "Pricing" },
        { path: "/#faq", label: "FAQ" },
      ]
    },
    { 
      path: "/about", 
      label: "About Us",
      subItems: [
        { path: "/about#team", label: "Our Team" },
        { path: "/about#mission", label: "Our Mission" },
      ]
    },
    { 
      path: "/contact", 
      label: "Contact",
      subItems: [
        { path: "/contact#support", label: "Support" },
        { path: "/contact#office", label: "Office" },
      ]
    }
  ];

  return (
    <header className="bg-white fixed top-8 w-full z-40 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-[#2A3B56] to-[#4F46E5] text-transparent bg-clip-text">
          TaxBuddy
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.path}>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4 bg-white">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.path}>
                          <Link
                            to={subItem.path}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 bg-white focus:bg-gray-100 focus:text-accent-foreground"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
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
                  <div key={item.path} className="space-y-2">
                    <Link
                      to={item.path}
                      className="text-lg font-medium hover:text-[#4F46E5] hover:bg-gray-100 p-2 rounded-md transition-colors block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                    <ul className="ml-4 space-y-2 bg-white">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.path}>
                          <Link
                            to={subItem.path}
                            className="text-gray-600 hover:text-[#4F46E5] hover:bg-gray-100 p-2 rounded-md transition-colors block"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
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
