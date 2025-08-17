import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Dr. Adebayo Okonkwo",
      position: "Facilities Manager",
      company: "Lagos Tech Hub",
      content: "ECC WORKS LIMITED transformed our data center infrastructure. Their attention to detail and international standards exceeded our expectations. Outstanding electrical and cooling solutions.",
      rating: 5
    },
    {
      name: "Mrs. Fatima Ibrahim",
      position: "Operations Director",
      company: "West Africa Medical Center",
      content: "Reliable, professional, and efficient. Their HVAC maintenance services have kept our critical medical facility running smoothly for over two years. Highly recommended.",
      rating: 5
    },
    {
      name: "Eng. Chidi Okafor",
      position: "Chief Engineer",
      company: "Industrial Complex Ltd",
      content: "From installation to ongoing maintenance, ECC WORKS LIMITED delivers top-notch services. Their team's expertise in electrical systems is unmatched in the region.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading organizations across West Africa for exceptional electrical and mechanical services
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="relative overflow-hidden border-2 border-transparent hover:border-accent/30 transition-all duration-500 scale-hover bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-accent mb-4 opacity-50" />
                
                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="border-t border-border pt-4">
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-accent font-medium">{testimonial.position}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
              
              {/* Accent Border */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary"></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-in-left">
          <div className="inline-block bg-gradient-to-r from-accent/10 to-primary/10 px-8 py-6 rounded-lg border border-accent/20">
            <p className="text-lg font-semibold text-foreground mb-2">
              Ready to experience top-notch services?
            </p>
            <p className="text-muted-foreground">
              Join our satisfied clients across West Africa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;