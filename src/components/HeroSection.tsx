import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-datacenter.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Company Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-wider leading-tight">
            <span className="text-white drop-shadow-2xl font-extrabold italic">
              ECC WORKS
            </span>
            <br />
            <span className="text-accent drop-shadow-xl font-light tracking-widest">
              LIMITED
            </span>
          </h1>
          
          {/* Motto */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white font-semibold mb-4 text-shadow-md">
            "To Offer Top-Notch Services"
          </p>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed text-shadow-md">
            Delivering World-Class Electrical and Mechanical Services Across West Africa
          </p>
          
          {/* CTA Button */}
          <div className="animate-slide-in-left">
            <Button 
              size="lg"
              className="bg-ecc-red hover:bg-ecc-red/90 text-white font-semibold px-8 py-4 text-lg rounded-md transition-all duration-300 hover:shadow-lg hover:scale-105"
              asChild
            >
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-ecc-red rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Nigerian Pattern Accent */}
      <div className="absolute top-10 right-10 w-20 h-20 nigerian-pattern opacity-30 hidden lg:block"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 nigerian-pattern opacity-20 hidden lg:block"></div>
    </section>
  );
};

export default HeroSection;