import { Shield, Globe, Award, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import westAfricaMap from "@/assets/west-africa-map.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Global Standards",
      description: "We adhere to international quality standards in all our projects"
    },
    {
      icon: Globe,
      title: "West Africa Expertise",
      description: "Deep understanding of regional infrastructure and technical requirements"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering top-notch services that exceed expectations"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Environmentally conscious solutions for a sustainable future"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              About <span className="text-accent">ECC WORKS LIMITED</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">ECC WORKS LIMITED</strong>, based in Lagos, Nigeria, delivers top-notch services to meet international standards. We leverage our industry-wide partnerships, supply chain, skills, knowledge, and expertise to achieve global excellence.
              </p>
              
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-lg border-l-4 border-accent">
                <h3 className="font-bold text-foreground text-xl mb-3">Our Mission</h3>
                <p>
                  To deliver top-notch skills in electrical and mechanical services across critical facilities in West Africa.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="font-bold text-foreground text-xl mb-3">Our Vision</h3>
                <p>
                  To be best in class for quality and sustainability in electrical and mechanical services across the region.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {values.map((value, index) => (
                <Card 
                  key={value.title} 
                  className="border-2 border-transparent hover:border-accent/30 transition-all duration-300 scale-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <value.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h4 className="font-bold text-foreground mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <img
                src={westAfricaMap}
                alt="West Africa Operations"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2 text-shadow-md">Serving West Africa</h3>
                <p className="text-sm text-shadow-sm">From our base in Lagos, Nigeria, we extend our expertise across the region</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;