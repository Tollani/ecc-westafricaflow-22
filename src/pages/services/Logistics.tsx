import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Truck, MapPin, Calendar, Package, Clock } from "lucide-react";

const Logistics = () => {
  const services = [
    {
      icon: Truck,
      title: "Equipment Delivery",
      description: "Secure transportation and delivery of electrical and mechanical equipment"
    },
    {
      icon: MapPin,
      title: "Site Coordination",
      description: "On-site logistics coordination ensuring smooth material flow and access"
    },
    {
      icon: Calendar,
      title: "Project Scheduling",
      description: "Comprehensive scheduling and timeline management for complex projects"
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Strategic inventory planning and management for optimal project efficiency"
    }
  ];

  const capabilities = [
    "Cross-border transportation coordination",
    "Customs clearance and documentation",
    "Specialized equipment handling",
    "Warehousing and storage solutions",
    "Just-in-time delivery scheduling",
    "Supply chain optimization",
    "Risk management and insurance",
    "Real-time tracking and monitoring"
  ];

  const regions = [
    {
      country: "Nigeria",
      description: "Comprehensive logistics coverage across all major cities and industrial zones"
    },
    {
      country: "Ghana",
      description: "Established network for efficient project delivery and coordination"
    },
    {
      country: "Senegal",
      description: "Strategic partnerships for seamless cross-border logistics"
    },
    {
      country: "Ivory Coast",
      description: "Local expertise for complex infrastructure project logistics"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Truck className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Comprehensive Logistics Solutions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Expert logistics support for equipment delivery, installation coordination, and project management across West Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              End-to-End Logistics Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Complete logistics management from procurement to final installation
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
              <div className="flex items-center mb-6">
                <Clock className="w-8 h-8 text-accent mr-3" />
                <span className="text-accent font-semibold text-lg">EFFICIENT & RELIABLE</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Streamlined Supply Chain Management
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our logistics expertise ensures your projects stay on schedule with optimized delivery routes, proper handling of sensitive equipment, and seamless coordination between all stakeholders.
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
                src="/src/assets/west-africa-map.jpg" 
                alt="Logistics network across West Africa" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Regional Coverage Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Regional Coverage Across West Africa
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Established logistics networks and partnerships throughout the region
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <Card key={index} className="p-6 border-accent/20 hover:border-accent/40 transition-all duration-300">
                <CardContent>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{region.country}</h3>
                  <p className="text-muted-foreground">{region.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-accent/20">
              <CardContent>
                <div className="text-4xl font-bold text-accent mb-2">99%</div>
                <div className="text-lg font-semibold text-foreground mb-2">On-Time Delivery</div>
                <p className="text-muted-foreground">Reliable delivery performance across all destinations</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border-accent/20">
              <CardContent>
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-lg font-semibold text-foreground mb-2">Tracking & Support</div>
                <p className="text-muted-foreground">Real-time monitoring and customer support</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border-accent/20">
              <CardContent>
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <div className="text-lg font-semibold text-foreground mb-2">Countries Served</div>
                <p className="text-muted-foreground">Extensive coverage across West and Central Africa</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Streamline Your Project Logistics
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Partner with us for efficient, reliable logistics that keep your projects on track. Contact us to discuss your logistics requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero" asChild>
              <Link to="/contact#quote">Request Logistics Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
              <Link to="/contact">Plan Your Logistics</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Logistics;