import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: "Главная", path: "/" },
    { name: "О нас", path: "/about" },
    { name: "Программы", path: "/programs" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-vra-purple/20 bg-white/80 backdrop-blur-md dark:bg-vra-deepBlue/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-base font-medium transition-colors hover:text-vra-blue ${
                isActive(item.path) 
                  ? "vr-gradient-text font-semibold" 
                  : "text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden md:flex md:items-center md:gap-4">
          <Link to="/login">
            <Button variant="outline" className="border-vra-purple text-foreground hover:border-vra-blue hover:bg-vra-blue/10 hover:text-vra-blue">
              Вход
            </Button>
          </Link>
          <Link to="/register">
            <Button className="vr-gradient hover:shadow-lg hover:shadow-vra-purple/20">
              Регистрация
            </Button>
          </Link>
        </div>
        
        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 px-4 py-6 bg-background">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base font-medium transition-colors hover:text-vra-blue ${
                  isActive(item.path) 
                    ? "vr-gradient-text font-semibold" 
                    : "text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full border-vra-purple text-foreground hover:border-vra-blue hover:bg-vra-blue/10 hover:text-vra-blue">
                  Вход
                </Button>
              </Link>
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full vr-gradient hover:shadow-lg hover:shadow-vra-purple/20">
                  Регистрация
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;