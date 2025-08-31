import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-primary px-4 py-2 text-primary-foreground font-bold text-xl">
              fybros
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Media
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Career
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Contact Us
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search"
                className="w-64 pr-10 bg-background border-border"
              />
              <Button
                size="sm"
                variant="ghost"
                className="absolute right-0 top-0 h-full px-3"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-foreground hover:text-primary px-4 py-2">
                Home
              </a>
              <a href="#" className="text-foreground hover:text-primary px-4 py-2">
                Products
              </a>
              <a href="#" className="text-foreground hover:text-primary px-4 py-2">
                About Us
              </a>
              <a href="#" className="text-foreground hover:text-primary px-4 py-2">
                Media
              </a>
              <a href="#" className="text-foreground hover:text-primary px-4 py-2">
                Career
              </a>
              <a href="#" className="text-foreground hover:text-primary px-4 py-2">
                Contact Us
              </a>
            </nav>
            <div className="mt-4 px-4">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search"
                  className="w-full pr-10"
                />
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute right-0 top-0 h-full px-3"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};