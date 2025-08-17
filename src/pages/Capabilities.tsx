import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Zap, Cog, Shield, Globe, Award, Users,
  Wrench, Settings, BarChart, CheckCircle
} from "lucide-react";

const Capabilities = () => {
  const electricalCapabilities = [
    {
      icon: Zap,
      title: "Power Systems",
      description: "Design, installation, and maintenance of electrical power distribution systems for critical facilities"
    },
    {
      icon: Shield,
      title: "Safety Systems",
      description: "Implementation of comprehensive electrical safety systems and emergency power solutions"
    },
    {
      icon: Settings,
      title: "Control Systems",
      description: "Advanced electrical control systems for industrial and commercial applications"
    },
    {
      icon: BarChart,
      title: "Power Quality",
      description: "Power quality analysis, monitoring, and optimization solutions"
    }
  ];

  const mechanicalCapabilities = [
    {
      icon: Cog,
      title: "HVAC Systems",
      description: "Complete heating, ventilation, and air conditioning system design and installation"
    },
    {
      icon: Wrench,
      title: "Mechanical Installation",
      description: "Precision mechanical equipment installation and commissioning services"
    },
    {
      icon: Settings,
      title: "Process Systems",
      description: "Industrial process mechanical systems and equipment integration"
    },
    {
      icon: CheckCircle,
      title: "Maintenance Programs",
      description: "Comprehensive preventive and predictive maintenance programs"
    }
  ];

  const expertiseAreas = [
    "Data Centers & Server Rooms",
    "Healthcare Facilities",
    "Industrial Manufacturing",
    "Commercial Buildings",
    "Educational Institutions",
    "Government Facilities",
    "Telecommunications",
    "Banking & Financial"
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "ISO 14001:2015 Environmental Management",
    "OHSAS 18001 Occupational Health & Safety",
    "West African Electrical Standards",
    "International Building Codes",
    "Energy Management Systems"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Our Capabilities
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto animate-slide-in-left">
            Comprehensive electrical and mechanical expertise with global standards and regional knowledge
          </p>
        </div>
      </section>

      {/* Electrical Capabilities */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              <span className="text-accent">Electrical</span> Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced electrical solutions designed to meet the most demanding requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {electricalCapabilities.map((capability, index) => (
              <Card 
                key={capability.title}
                className="text-center border-2 border-transparent hover:border-accent/30 transition-all duration-500 scale-hover"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <capability.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{capability.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mechanical Capabilities */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              <span className="text-accent">Mechanical</span> Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Precision mechanical engineering and installation services for critical applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mechanicalCapabilities.map((capability, index) => (
              <Card 
                key={capability.title}
                className="text-center border-2 border-transparent hover:border-accent/30 transition-all duration-500 scale-hover"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <capability.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{capability.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Industry Expertise */}
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Industry <span className="text-accent">Expertise</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We serve diverse industries across West Africa, bringing specialized knowledge and tailored solutions to each sector.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {expertiseAreas.map((area, index) => (
                  <div 
                    key={area}
                    className="flex items-center space-x-3 p-4 bg-card rounded-lg border hover:border-accent/30 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="text-foreground font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Standards & Certifications */}
            <div className="animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Standards & <span className="text-accent">Certifications</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our commitment to quality is demonstrated through our adherence to international standards and certifications.
              </p>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert}
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg border border-accent/20"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-foreground font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Standards */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground nigerian-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-scale-in">
              <Globe className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Global Standards</h3>
              <p className="text-primary-foreground/90">
                International quality standards applied to every project across West Africa
              </p>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "200ms" }}>
              <Users className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Expert Team</h3>
              <p className="text-primary-foreground/90">
                Certified professionals with extensive regional and international experience
              </p>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "400ms" }}>
              <Award className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Proven Excellence</h3>
              <p className="text-primary-foreground/90">
                Track record of successful projects for critical facilities across the region
              </p>
            </div>
          </div>

          <div className="text-center mt-16 animate-slide-in-left">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link to="/contact">
                Discuss Your Project
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Capabilities;