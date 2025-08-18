import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Settings, TestTube, FileCheck, GraduationCap, Target } from "lucide-react";

const Commissioning = () => {
  const phases = [
    {
      icon: TestTube,
      title: "Pre-Commissioning",
      description: "Initial system checks and preparation for commissioning activities"
    },
    {
      icon: Target,
      title: "Performance Testing",
      description: "Comprehensive testing to verify system performance meets design specifications"
    },
    {
      icon: FileCheck,
      title: "Documentation",
      description: "Complete documentation of all test results and system configurations"
    },
    {
      icon: GraduationCap,
      title: "Training & Handover",
      description: "Operator training and formal system handover to client"
    }
  ];

  const services = [
    "System functionality verification",
    "Performance testing and optimization",
    "Safety system validation",
    "Integration testing",
    "Load testing and capacity verification",
    "Environmental testing",
    "Documentation and reporting",
    "Operator training and certification"
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
              System Commissioning Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Comprehensive commissioning services to ensure all systems operate according to design specifications and performance requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Phases Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Commissioning Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our structured commissioning approach ensures systematic verification of all systems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <Card key={index} className="text-center border-accent/20 hover:border-accent/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <phase.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.description}</p>
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
                Comprehensive Testing & Verification
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our commissioning process ensures that every system component operates correctly and efficiently, meeting all design requirements and safety standards.
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
                src="/src/assets/service-technician-real.jpg" 
                alt="System commissioning work" 
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
            Ensure Your Systems Perform Optimally
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Partner with us for thorough commissioning services that guarantee your systems meet all performance and safety requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero" asChild>
              <Link to="/contact#quote">Request Commissioning Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Commissioning;