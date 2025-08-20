import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/39fc2e0f-26a7-4d39-94ef-bf4f934358e1.png" 
                alt="ECC WORKS LIMITED Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-primary-foreground/80">
              Delivering world-class electrical and mechanical services across West Africa with international standards and Nigerian excellence.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="w-4 h-4 text-accent" />
              <span>1A, Street P, Abraham Adesanya Estate, Ajah, Lagos, Nigeria</span>
            </div>
            <p className="text-accent font-semibold text-sm">Serving West Africa</p>
            <p className="text-xs text-primary-foreground/60">Proudly Nigerian 🇳🇬</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link 
                to="/about" 
                className="block text-sm hover:text-accent transition-colors duration-300"
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className="block text-sm hover:text-accent transition-colors duration-300"
              >
                Our Services
              </Link>
              <Link 
                to="/capabilities" 
                className="block text-sm hover:text-accent transition-colors duration-300"
              >
                Capabilities
              </Link>
              <Link 
                to="/contact" 
                className="block text-sm hover:text-accent transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <div className="space-y-3 text-sm">
              <p className="hover:text-accent cursor-pointer transition-colors duration-300">Installation</p>
              <p className="hover:text-accent cursor-pointer transition-colors duration-300">Maintenance</p>
              <p className="hover:text-accent cursor-pointer transition-colors duration-300">HVAC Systems</p>
              <p className="hover:text-accent cursor-pointer transition-colors duration-300">Data Center Cooling</p>
              <p className="hover:text-accent cursor-pointer transition-colors duration-300">Procurement</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <span>+2348036508892</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                <span>info@eccworksltd.com</span>
              </div>
              
              {/* Quick Contact Form */}
              <div className="space-y-3 mt-6">
                <Input 
                  placeholder="Your Email" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Textarea 
                  placeholder="Your Message" 
                  rows={3}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button 
                  variant="secondary" 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Send Message
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent/30 cursor-pointer transition-colors duration-300">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent/30 cursor-pointer transition-colors duration-300">
                  <Twitter className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/80">
              © 2025 ECC WORKS LIMITED. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/80">
              Contact our Managing Director: <span className="text-accent">info@eccworksltd.com</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
