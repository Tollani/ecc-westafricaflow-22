import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// Using uploaded images directly
const installationImage = "/lovable-uploads/c5d75a80-8b1b-4a5c-a915-3bca2718f59e.png";
const maintenanceImage = "/lovable-uploads/109e6545-0058-4195-b579-1c71718ad807.png";
const hvacImage = "/lovable-uploads/97e53359-10ca-4886-8676-f4db0492ec6e.png";
const coolingImage = "/lovable-uploads/c1344a4a-19e6-4422-bf8f-5f7564a5f56e.png";

const FeaturedServices = () => {
  const services = [
    {
      title: "Installation",
      description: "Professional electrical and mechanical installation services with international standards and precision engineering.",
      image: installationImage,
      link: "/services#installation"
    },
    {
      title: "Maintenance",
      description: "Comprehensive maintenance solutions to ensure optimal performance and longevity of your critical systems.",
      image: maintenanceImage,
      link: "/services#maintenance"
    },
    {
      title: "HVAC Systems",
      description: "Advanced heating, ventilation, and air conditioning solutions for commercial and industrial facilities.",
      image: hvacImage,
      link: "/services#hvac"
    },
    {
      title: "Data Center Cooling",
      description: "Specialized cooling systems for data centers and critical IT infrastructure across West Africa.",
      image: coolingImage,
      link: "/services#cooling"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver world-class electrical and mechanical services with the highest standards of quality and professionalism
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-xl transition-all duration-500 border-2 border-border hover:border-accent/30 bg-card/80 backdrop-blur-sm overflow-hidden scale-hover"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  asChild
                >
                  <Link to={service.link}>
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-slide-in-left">
          <Button 
            size="lg" 
            className="btn-secondary"
            asChild
          >
            <Link to="/services">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;