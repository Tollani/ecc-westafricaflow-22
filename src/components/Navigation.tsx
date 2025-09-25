import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { name: "Installation", path: "/services/installation" },
    { name: "Commissioning", path: "/services/commissioning" },
    { name: "Maintenance", path: "/services/maintenance" },
    { name: "HVAC Systems", path: "/services/hvac-systems" },
    { name: "Data Center Cooling", path: "/services/data-center-cooling" },
    { name: "Procurement", path: "/services/procurement" },
    { name: "Tendering", path: "/services/tendering" },
    { name: "Logistics", path: "/services/logistics" },
    { name: "Real Estate", path: "/services/real-estate" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/ecc-works-logo-transparent.jpg" 
                alt="ECC WORKS LIMITED - Electrical • Mechanical • Data Center Cooling" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`hover:text-accent transition-colors duration-300 ${
                isActive("/") ? "text-accent font-semibold" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:text-accent transition-colors duration-300 ${
                isActive("/about") ? "text-accent font-semibold" : ""
              }`}
            >
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-accent transition-colors duration-300">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border shadow-xl">
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link
                      to={service.path}
                      className="text-foreground hover:text-accent transition-colors duration-300"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/capabilities"
              className={`hover:text-accent transition-colors duration-300 ${
                isActive("/capabilities") ? "text-accent font-semibold" : ""
              }`}
            >
              Capabilities
            </Link>
            <Link
              to="/contact"
              className={`hover:text-accent transition-colors duration-300 ${
                isActive("/contact") ? "text-accent font-semibold" : ""
              }`}
            >
              Contact
            </Link>
            
            {/* CTA Button */}
            <Button 
              variant="secondary" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to="/contact#quote">Request a Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-foreground hover:text-accent transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/20">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="hover:text-accent transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-accent transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="hover:text-accent transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/capabilities"
                className="hover:text-accent transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Capabilities
              </Link>
              <Link
                to="/contact"
                className="hover:text-accent transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button 
                variant="secondary" 
                className="bg-accent text-accent-foreground w-fit mt-2"
                asChild
              >
                <Link to="/contact#quote" onClick={() => setIsOpen(false)}>
                  Request a Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
