import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Building, Users, Award, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const About = () => {
  const stats = [{
    icon: Building,
    number: "50+",
    label: "Projects Completed"
  }, {
    icon: Users,
    number: "25+",
    label: "Expert Team Members"
  }, {
    icon: Award,
    number: "5+",
    label: "Years of Excellence"
  }, {
    icon: Globe,
    number: "8",
    label: "West African Countries"
  }];
  return <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => <Card key={stat.label} className="text-center border-2 border-transparent hover:border-accent/30 transition-all duration-300 scale-hover" style={{
            animationDelay: `${index * 150}ms`
          }}>
                <CardContent className="p-6">
                  <stat.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <AboutSection />

      {/* Company History */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 animate-fade-in-up">
              Our Journey
            </h2>
            
            <div className="space-y-8 animate-slide-in-left">
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-8 rounded-lg border-l-4 border-accent">
                <h3 className="text-2xl font-bold text-foreground mb-4">Foundation & Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Founded with a vision to bridge the gap between local expertise and international standards, 
                  ECC WORKS LIMITED has established itself as a trusted partner for critical electrical and 
                  mechanical services across West Africa. Our commitment to excellence drives everything we do.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg border-l-4 border-primary">
                <h3 className="text-2xl font-bold text-foreground mb-4">Growth & Expansion</h3>
                <p className="text-muted-foreground leading-relaxed">
                  From our headquarters in Lagos, Nigeria, we have expanded our reach across West Africa, 
                  building strong partnerships and developing deep expertise in regional infrastructure needs. 
                  Our team combines local knowledge with global best practices.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-8 rounded-lg border-l-4 border-accent">
                <h3 className="text-2xl font-bold text-foreground mb-4">Future Outlook</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As we look to the future, our focus remains on sustainability, innovation, and maintaining 
                  the highest standards of service delivery. We are committed to being the premier choice for 
                  electrical and mechanical services in the region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      <Footer />
    </div>;
};
export default About;