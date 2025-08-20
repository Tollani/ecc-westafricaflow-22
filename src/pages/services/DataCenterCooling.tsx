import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Snowflake, Server, Monitor, Zap, Shield } from "lucide-react";

const DataCenterCooling = () => {
  const features = [
    {
      icon: Snowflake,
      title: "Precision Cooling",
      description: "Exact temperature and humidity control for optimal IT equipment performance"
    },
    {
      icon: Shield,
      title: "Redundant Systems",
      description: "Multiple backup systems ensure continuous cooling even during maintenance"
    },
    {
      icon: Zap,
      title: "Energy Efficiency",
      description: "Advanced cooling technologies that minimize power consumption and costs"
    },
    {
      icon: Monitor,
      title: "Remote Monitoring",
      description: "24/7 monitoring and alerting for proactive system management"
    }
  ];

  const solutions = [
    "Computer Room Air Conditioning (CRAC) units",
    "In-row cooling systems",
    "Raised floor cooling distribution",
    "Hot/cold aisle containment",
    "Liquid cooling systems",
    "Free cooling economizers",
    "Chilled water systems",
    "Precision environmental monitoring"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Snowflake className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Data Center Cooling Solutions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Specialized cooling solutions for data centers and IT infrastructure, ensuring optimal temperature and humidity control for mission-critical operations.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Critical Cooling Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Advanced cooling technologies designed specifically for data center environments
            </p>
          </div>
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

      {/* Solutions Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Server className="w-8 h-8 text-accent mr-3" />
                <span className="text-accent font-semibold text-lg">MISSION-CRITICAL COOLING</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Protect Your IT Infrastructure
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our data center cooling solutions are engineered to maintain precise environmental conditions, protecting your valuable IT equipment and ensuring maximum uptime.
              </p>
              <div className="space-y-3">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-8">
              <img 
                src="/hero-datacenter.jpg" 
                alt="Data center cooling system" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Efficiency Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-accent/20">
              <CardContent>
                <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-lg font-semibold text-foreground mb-2">Uptime Reliability</div>
                <p className="text-muted-foreground">Redundant cooling systems ensure continuous operation</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border-accent/20">
              <CardContent>
                <div className="text-4xl font-bold text-accent mb-2">35%</div>
                <div className="text-lg font-semibold text-foreground mb-2">Energy Savings</div>
                <p className="text-muted-foreground">Advanced efficiency technologies reduce operating costs</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border-accent/20">
              <CardContent>
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-lg font-semibold text-foreground mb-2">Monitoring</div>
                <p className="text-muted-foreground">Continuous monitoring and proactive maintenance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Secure Your Data Center's Future
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Protect your critical IT infrastructure with our specialized data center cooling solutions. Contact us for a comprehensive cooling assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero" asChild>
              <Link to="/contact#quote">Request Cooling Assessment</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
              <Link to="/contact">Speak to Our Experts</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataCenterCooling;