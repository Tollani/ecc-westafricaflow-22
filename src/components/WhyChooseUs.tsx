import { CheckCircle, Users, Clock, Trophy } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: "International Standards",
      description: "All our services meet and exceed global quality benchmarks"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly skilled professionals with extensive regional experience"
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "Timely delivery and responsive support for all your needs"
    },
    {
      icon: Trophy,
      title: "Proven Excellence",
      description: "Track record of successful projects across critical facilities"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground nigerian-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-shadow-md">
            Why Choose <span className="text-accent">ECC WORKS LIMITED</span>
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto text-shadow-sm">
            We combine Nigerian innovation with international expertise to deliver unmatched electrical and mechanical services
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className="text-center group animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/30 transition-all duration-300 group-hover:scale-110">
                  <reason.icon className="w-10 h-10 text-accent" />
                </div>
                {/* Animated Ring */}
                <div className="absolute inset-0 w-20 h-20 border-2 border-accent/30 rounded-full mx-auto animate-pulse"></div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold mb-4 text-shadow-sm group-hover:text-accent transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16 animate-slide-in-left">
          <div className="inline-block bg-accent/10 px-8 py-4 rounded-lg border border-accent/20">
            <p className="text-lg font-semibold text-accent">
              🇳🇬 Proudly Nigerian • Globally Competitive
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;