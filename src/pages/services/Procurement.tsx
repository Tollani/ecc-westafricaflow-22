import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ShoppingCart, Search, Shield, DollarSign, Globe } from "lucide-react";

const Procurement = () => {
  const services = [
    {
      icon: Search,
      title: "Equipment Sourcing",
      description: "Comprehensive sourcing of electrical and mechanical equipment from trusted global suppliers"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control and testing to ensure all procured equipment meets specifications"
    },
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description: "Strategic procurement strategies to maximize value and minimize total cost of ownership"
    },
    {
      icon: Globe,
      title: "Global Supply Chain",
      description: "Extensive network of international suppliers and logistics partners across multiple regions"
    }
  ];

  const capabilities = [
    "Electrical equipment procurement",
    "Mechanical systems sourcing",
    "IT infrastructure components",
    "Spare parts inventory management",
    "Vendor qualification and management",
    "Contract negotiation and management",
    "Logistics coordination and delivery",
    "Technical specification validation"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Strategic Procurement Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Leverage our extensive supply chain network to source quality equipment and materials with optimal cost efficiency and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Procurement Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              End-to-end procurement services that optimize value and ensure quality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center border-accent/20 hover:border-accent/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Global Sourcing Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our procurement team combines local market knowledge with global supply chain expertise to deliver the best solutions for your projects.
              </p>
              <div className="space-y-3">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-8">
              <img 
                src="/src/assets/service-electrical-real.jpg" 
                alt="Equipment procurement and sourcing" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-accent/20">
              <CardContent>
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-lg font-semibold text-foreground mb-2">Verified Suppliers</div>
                <p className="text-muted-foreground">Extensive network of qualified global suppliers</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border-accent/20">
              <CardContent>
                <div className="text-4xl font-bold text-accent mb-2">25%</div>
                <div className="text-lg font-semibold text-foreground mb-2">Cost Savings</div>
                <p className="text-muted-foreground">Average cost reduction through strategic sourcing</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border-accent/20">
              <CardContent>
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <div className="text-lg font-semibold text-foreground mb-2">On-Time Delivery</div>
                <p className="text-muted-foreground">Reliable delivery performance across all projects</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Optimize Your Supply Chain
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Partner with us for strategic procurement that delivers quality, value, and reliability. Let our experts handle your sourcing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero" asChild>
              <Link to="/contact#quote">Request Procurement Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
              <Link to="/contact">Discuss Your Needs</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Procurement;