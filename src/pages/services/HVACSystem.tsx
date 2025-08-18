import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Wind, Thermometer, Gauge, Smartphone, Leaf } from "lucide-react";

const HVACSystem = () => {
  const capabilities = [
    {
      icon: Thermometer,
      title: "Climate Control",
      description: "Precise temperature and humidity control for optimal comfort and equipment protection"
    },
    {
      icon: Wind,
      title: "Air Quality Management",
      description: "Advanced filtration and ventilation systems for clean, healthy indoor environments"
    },
    {
      icon: Leaf,
      title: "Energy Efficiency",
      description: "High-efficiency systems designed to minimize energy consumption and operating costs"
    },
    {
      icon: Smartphone,
      title: "Smart Controls",
      description: "Intelligent automation and remote monitoring for optimal system performance"
    }
  ];

  const services = [
    "HVAC system design and engineering",
    "Commercial air conditioning installation",
    "Industrial ventilation systems",
    "Clean room HVAC solutions",
    "Variable air volume (VAV) systems",
    "Energy recovery ventilation",
    "Building management system integration",
    "HVAC maintenance and optimization"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wind className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              HVAC Systems Solutions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Complete heating, ventilation, and air conditioning solutions for commercial and industrial facilities across West Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Advanced HVAC Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge technology and expert engineering for optimal indoor climate control
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="text-center border-accent/20 hover:border-accent/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <capability.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{capability.title}</h3>
                  <p className="text-muted-foreground">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Comprehensive HVAC Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From design to maintenance, we provide complete HVAC solutions tailored to the unique climate challenges of West Africa, ensuring optimal performance and energy efficiency.
              </p>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-8">
              <img 
                src="/src/assets/service-hvac-real.jpg" 
                alt="HVAC system installation" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Climate Solutions Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:pr-8">
              <img 
                src="/src/assets/service-hvac-equipment-real.jpg" 
                alt="HVAC equipment" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Gauge className="w-8 h-8 text-accent mr-3" />
                <span className="text-accent font-semibold text-lg">ENERGY EFFICIENT SOLUTIONS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Optimized for West African Climate
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our HVAC systems are specifically designed to handle the challenging climate conditions of West Africa, providing reliable cooling and ventilation while minimizing energy consumption.
              </p>
              <p className="text-lg text-muted-foreground">
                We use advanced technologies and proven design principles to ensure your facility maintains optimal conditions year-round, protecting both people and equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Transform Your Indoor Environment
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get expert HVAC solutions designed for optimal performance in West African conditions. Contact us for a customized system assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero" asChild>
              <Link to="/contact#quote">Request HVAC Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
              <Link to="/contact">Schedule Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HVACSystem;