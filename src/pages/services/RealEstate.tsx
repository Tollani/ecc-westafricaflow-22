import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Building, MapPin, Search, BarChart3, Home } from "lucide-react";

const RealEstate = () => {
  const services = [
    {
      icon: Search,
      title: "Site Selection",
      description: "Strategic site evaluation and selection for optimal infrastructure development"
    },
    {
      icon: Building,
      title: "Facility Planning",
      description: "Comprehensive facility planning and design optimization for operational efficiency"
    },
    {
      icon: BarChart3,
      title: "Infrastructure Assessment",
      description: "Detailed technical assessment of existing infrastructure and upgrade requirements"
    },
    {
      icon: Home,
      title: "Property Management",
      description: "Professional property management services for industrial and commercial facilities"
    }
  ];

  const expertise = [
    "Data center site selection and development",
    "Industrial facility planning and design",
    "Commercial property assessment",
    "Infrastructure feasibility studies",
    "Utility availability analysis",
    "Regulatory compliance consulting",
    "Property acquisition support",
    "Facility maintenance planning"
  ];

  const sectors = [
    {
      title: "Data Centers",
      description: "Specialized site selection for mission-critical data center facilities with focus on power, connectivity, and climate considerations."
    },
    {
      title: "Industrial Facilities",
      description: "Strategic planning for manufacturing and industrial complexes with emphasis on utilities, transportation, and workforce access."
    },
    {
      title: "Commercial Buildings",
      description: "Comprehensive property solutions for office buildings, retail spaces, and mixed-use developments."
    },
    {
      title: "Critical Infrastructure",
      description: "Expert assessment and planning for telecommunications, power generation, and other critical infrastructure projects."
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
              <Building className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Real Estate Solutions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Professional real estate services supporting infrastructure development and facility management requirements across West Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Real Estate Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Strategic real estate solutions tailored for infrastructure and facility requirements
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

      {/* Sectors Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Specialized Sector Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Deep understanding of unique real estate requirements across different sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectors.map((sector, index) => (
              <Card key={index} className="p-6 border-accent/20 hover:border-accent/40 transition-all duration-300">
                <CardContent>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{sector.title}</h3>
                  <p className="text-muted-foreground">{sector.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-accent mr-3" />
                <span className="text-accent font-semibold text-lg">STRATEGIC LOCATIONS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Strategic Site Selection & Development
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our real estate expertise combines technical knowledge with market insight to identify and develop optimal locations for your infrastructure projects.
              </p>
              <div className="space-y-3">
                {expertise.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-8">
              <img 
                src="/src/assets/real-estate-building.jpg" 
                alt="Real estate development and planning" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Factors Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Critical Selection Factors
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Key considerations for successful infrastructure site selection
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-accent/20">
              <CardContent>
                <div className="text-4xl font-bold text-accent mb-2">Power</div>
                <div className="text-lg font-semibold text-foreground mb-2">Grid Connectivity</div>
                <p className="text-muted-foreground">Reliable power infrastructure and utility availability</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border-accent/20">
              <CardContent>
                <div className="text-4xl font-bold text-accent mb-2">Access</div>
                <div className="text-lg font-semibold text-foreground mb-2">Transportation</div>
                <p className="text-muted-foreground">Strategic location with excellent transportation links</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border-accent/20">
              <CardContent>
                <div className="text-4xl font-bold text-accent mb-2">Risk</div>
                <div className="text-lg font-semibold text-foreground mb-2">Assessment</div>
                <p className="text-muted-foreground">Comprehensive risk evaluation and mitigation strategies</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Find Your Ideal Location
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Partner with our real estate experts to identify and secure the perfect location for your infrastructure project. Let us help you make informed decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero" asChild>
              <Link to="/contact#quote">Request Site Assessment</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
              <Link to="/contact">Discuss Your Requirements</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RealEstate;