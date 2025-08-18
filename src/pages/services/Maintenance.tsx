import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Settings, Calendar, Zap, Headphones, Clock } from "lucide-react";

const Maintenance = () => {
  const maintenanceTypes = [
    {
      icon: Calendar,
      title: "Preventive Maintenance",
      description: "Scheduled maintenance to prevent equipment failures and extend system life"
    },
    {
      icon: Zap,
      title: "Emergency Repairs",
      description: "24/7 emergency response for critical system failures and urgent repairs"
    },
    {
      icon: Settings,
      title: "Predictive Maintenance",
      description: "Advanced monitoring and analytics to predict and prevent equipment issues"
    },
    {
      icon: Headphones,
      title: "Remote Support",
      description: "Remote monitoring and support services for continuous system optimization"
    }
  ];

  const services = [
    "Scheduled preventive maintenance programs",
    "Emergency repair services (24/7)",
    "Equipment lifecycle management",
    "Performance optimization",
    "Spare parts management",
    "System upgrades and modernization",
    "Condition monitoring and diagnostics",
    "Maintenance documentation and reporting"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Settings className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Maintenance & Support Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Preventive and corrective maintenance services to maximize equipment lifespan and ensure reliable operation of critical systems.
            </p>
          </div>
        </div>
      </section>

      {/* Maintenance Types Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Maintenance Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From preventive care to emergency response, we provide complete maintenance coverage
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {maintenanceTypes.map((type, index) => (
              <Card key={index} className="text-center border-accent/20 hover:border-accent/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{type.title}</h3>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 24/7 Support Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Clock className="w-8 h-8 text-accent mr-3" />
                <span className="text-accent font-semibold text-lg">24/7 SUPPORT AVAILABLE</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Reliable Maintenance Services
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our maintenance programs are designed to keep your critical systems running at peak performance while minimizing downtime and operational costs.
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
                src="/src/assets/service-maintenance-real.jpg" 
                alt="Maintenance technician at work" 
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
            Keep Your Systems Running Smoothly
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Protect your investment with our comprehensive maintenance programs. Contact us to create a customized maintenance plan for your facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero" asChild>
              <Link to="/contact#quote">Get Maintenance Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
              <Link to="/contact">Emergency Support</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Maintenance;