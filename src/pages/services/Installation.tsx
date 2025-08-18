import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Wrench, CheckCircle, Clock, Shield, Users } from "lucide-react";

const Installation = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control throughout the installation process"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Projects completed on schedule with minimal disruption to operations"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Strict adherence to safety protocols and international standards"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified technicians with extensive experience in critical installations"
    }
  ];

  const services = [
    "Electrical panel installation and configuration",
    "Mechanical system setup and commissioning", 
    "Cable management and routing systems",
    "System integration and testing",
    "Power distribution systems",
    "Backup power solutions",
    "Monitoring and control systems",
    "Documentation and training"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wrench className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Professional Installation Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Expert electrical and mechanical installation services for critical facilities, ensuring compliance with international standards and optimal system performance.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-accent/20 hover:border-accent/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
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
                Comprehensive Installation Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our installation services cover all aspects of electrical and mechanical systems for critical infrastructure. We ensure each installation meets the highest standards of quality and reliability.
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
                src="/src/assets/service-installation-real.jpg" 
                alt="Professional installation work" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Installation Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact our experts today to discuss your installation requirements and get a customized solution for your facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero" asChild>
              <Link to="/contact#quote">Request a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
              <Link to="/contact">Contact Our Experts</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Installation;