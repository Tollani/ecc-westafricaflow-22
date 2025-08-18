import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText, Calculator, ClipboardCheck, HandshakeIcon, Target } from "lucide-react";

const Tendering = () => {
  const services = [
    {
      icon: FileText,
      title: "Bid Preparation",
      description: "Comprehensive bid documentation and proposal preparation for complex projects"
    },
    {
      icon: Calculator,
      title: "Cost Estimation",
      description: "Accurate cost analysis and pricing strategies for competitive bidding"
    },
    {
      icon: ClipboardCheck,
      title: "Project Planning",
      description: "Detailed project planning and resource allocation for successful execution"
    },
    {
      icon: HandshakeIcon,
      title: "Contract Management",
      description: "Professional contract negotiation and management throughout project lifecycle"
    }
  ];

  const expertise = [
    "Electrical installation tenders",
    "Mechanical systems projects",
    "HVAC system implementations",
    "Data center infrastructure",
    "Power distribution systems",
    "Building automation projects",
    "Maintenance contracts",
    "Multi-phase project management"
  ];

  const process = [
    {
      step: "01",
      title: "Project Analysis",
      description: "Thorough analysis of tender requirements and project specifications"
    },
    {
      step: "02", 
      title: "Cost Engineering",
      description: "Detailed cost breakdown and competitive pricing strategy development"
    },
    {
      step: "03",
      title: "Proposal Development",
      description: "Professional proposal preparation with technical and commercial details"
    },
    {
      step: "04",
      title: "Project Execution",
      description: "Seamless transition from award to project delivery and management"
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
              <FileText className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Professional Tendering Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Expert tendering and project management services for electrical and mechanical projects of all scales, ensuring competitive bids and successful project delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Tendering Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From bid preparation to contract management, we handle every aspect of the tendering process
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

      {/* Process Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Tendering Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A systematic approach that maximizes bid success and project delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
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
                <Target className="w-8 h-8 text-accent mr-3" />
                <span className="text-accent font-semibold text-lg">PROVEN SUCCESS RECORD</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Winning Tenders Across Sectors
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our experienced team has successfully secured and delivered projects across various sectors, from commercial buildings to industrial facilities throughout West Africa.
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
                src="/src/assets/service-technician-work.jpg" 
                alt="Project planning and tendering" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-accent/20">
              <CardContent>
                <div className="text-4xl font-bold text-accent mb-2">85%</div>
                <div className="text-lg font-semibold text-foreground mb-2">Win Rate</div>
                <p className="text-muted-foreground">Successful tender win rate across all project types</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border-accent/20">
              <CardContent>
                <div className="text-4xl font-bold text-accent mb-2">200+</div>
                <div className="text-lg font-semibold text-foreground mb-2">Projects Delivered</div>
                <p className="text-muted-foreground">Successfully completed projects across West Africa</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border-accent/20">
              <CardContent>
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <div className="text-lg font-semibold text-foreground mb-2">On-Time Delivery</div>
                <p className="text-muted-foreground">Projects completed within scheduled timeframes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Partner with Tendering Experts
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Increase your chances of winning with our professional tendering services. Let us help you secure your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero" asChild>
              <Link to="/contact#quote">Discuss Your Tender</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
              <Link to="/contact">Request Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tendering;