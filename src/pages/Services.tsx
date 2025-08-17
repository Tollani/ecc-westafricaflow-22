import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FeaturedServices from "@/components/FeaturedServices";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Wrench, Settings, Wind, Snowflake, ShoppingCart, FileText, Truck, Building } from "lucide-react";
const Services = () => {
  const allServices = [{
    id: "installation",
    title: "Installation",
    icon: Wrench,
    description: "Professional electrical and mechanical installation services for critical facilities, ensuring compliance with international standards and optimal system performance.",
    features: ["Electrical panel installation", "Mechanical system setup", "Cable management", "System commissioning"]
  }, {
    id: "commissioning",
    title: "Commissioning",
    icon: Settings,
    description: "Comprehensive commissioning services to ensure all systems operate according to design specifications and performance requirements.",
    features: ["System testing", "Performance verification", "Documentation", "Training"]
  }, {
    id: "maintenance",
    title: "Maintenance",
    icon: Settings,
    description: "Preventive and corrective maintenance services to maximize equipment lifespan and ensure reliable operation of critical systems.",
    features: ["Preventive maintenance", "Emergency repairs", "System upgrades", "24/7 support"]
  }, {
    id: "hvac",
    title: "HVAC Systems",
    icon: Wind,
    description: "Complete heating, ventilation, and air conditioning solutions for commercial and industrial facilities across West Africa.",
    features: ["Climate control", "Air quality management", "Energy efficiency", "Smart controls"]
  }, {
    id: "cooling",
    title: "Data Center Cooling",
    icon: Snowflake,
    description: "Specialized cooling solutions for data centers and IT infrastructure, ensuring optimal temperature and humidity control.",
    features: ["Precision cooling", "Redundant systems", "Energy efficiency", "Remote monitoring"]
  }, {
    id: "procurement",
    title: "Procurement",
    icon: ShoppingCart,
    description: "Strategic procurement services leveraging our extensive supply chain network to source quality equipment and materials.",
    features: ["Equipment sourcing", "Vendor management", "Quality assurance", "Cost optimization"]
  }, {
    id: "tendering",
    title: "Tendering",
    icon: FileText,
    description: "Professional tendering and project management services for electrical and mechanical projects of all scales.",
    features: ["Bid preparation", "Project planning", "Cost estimation", "Contract management"]
  }, {
    id: "logistics",
    title: "Logistics",
    icon: Truck,
    description: "Comprehensive logistics support for equipment delivery, installation coordination, and project management.",
    features: ["Equipment delivery", "Site coordination", "Project scheduling", "Inventory management"]
  }, {
    id: "real-estate",
    title: "Real Estate",
    icon: Building,
    description: "Real estate services supporting infrastructure development and facility management requirements.",
    features: ["Site selection", "Facility planning", "Infrastructure assessment", "Property management"]
  }];
  return <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      

      {/* Featured Services */}
      <FeaturedServices />

      {/* All Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Complete Service Portfolio
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From installation to maintenance, we offer end-to-end solutions for all your electrical and mechanical needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => <Card key={service.id} id={service.id} className="group border-2 border-transparent hover:border-accent/30 transition-all duration-500 scale-hover bg-card/80 backdrop-blur-sm" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-accent/30 transition-colors duration-300">
                      <service.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </div>)}
                  </div>
                  
                  <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300" asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>)}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-slide-in-left">
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-8 rounded-lg border border-accent/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact us today to discuss your electrical and mechanical service requirements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-hero" asChild>
                  <Link to="/contact#quote">Request a Quote</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Services;