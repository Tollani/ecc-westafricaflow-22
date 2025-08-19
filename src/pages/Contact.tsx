import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Users } from "lucide-react";
const Contact = () => {
  return <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center border-2 border-transparent hover:border-accent/30 transition-all duration-300 scale-hover">
              <CardContent className="p-8">
                <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground">
                  1A, Street P, Abraham Adesanya Estate<br />
                  Ajah, Lagos, Nigeria<br />
                  <span className="text-accent font-medium">Serving West Africa</span>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-transparent hover:border-accent/30 transition-all duration-300 scale-hover">
              <CardContent className="p-8">
                <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground">
                  +2348036508892<br />
                  <span className="text-sm">24/7 Emergency Support</span>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-transparent hover:border-accent/30 transition-all duration-300 scale-hover">
              <CardContent className="p-8">
                <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">
                  info@eccworksltd.com<br />
                  <span className="text-sm">Quick Response Guaranteed</span>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-transparent hover:border-accent/30 transition-all duration-300 scale-hover">
              <CardContent className="p-8">
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Business Hours</h3>
                <p className="text-muted-foreground">
                  Mon - Fri: 8:00 AM - 6:00 PM<br />
                  <span className="text-sm">WAT (West Africa Time)</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div id="quote" className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Request a <span className="text-accent">Quote</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Tell us about your project requirements and we'll provide a detailed quote tailored to your needs.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input placeholder="Your first name" className="transition-all duration-300 focus:ring-2 focus:ring-accent" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Your last name" className="transition-all duration-300 focus:ring-2 focus:ring-accent" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input type="email" placeholder="your.email@company.com" className="transition-all duration-300 focus:ring-2 focus:ring-accent" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input placeholder="+234 (0) 123 456 7890" className="transition-all duration-300 focus:ring-2 focus:ring-accent" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company/Organization
                  </label>
                  <Input placeholder="Your company name" className="transition-all duration-300 focus:ring-2 focus:ring-accent" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Required *
                  </label>
                  <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground transition-all duration-300 focus:ring-2 focus:ring-accent">
                    <option value="">Select a service</option>
                    <option value="installation">Installation</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="hvac">HVAC Systems</option>
                    <option value="cooling">Data Center Cooling</option>
                    <option value="commissioning">Commissioning</option>
                    <option value="procurement">Procurement</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <Textarea placeholder="Please describe your project requirements, timeline, and any specific needs..." rows={6} className="transition-all duration-300 focus:ring-2 focus:ring-accent" required />
                </div>

                <Button type="submit" size="lg" className="w-full btn-hero">
                  Submit Quote Request
                </Button>
              </form>
            </div>

            {/* Managing Director & Map */}
            <div className="animate-slide-in-right">
              <Card className="mb-8 border-2 border-accent/20">
                <CardContent className="p-8 text-center">
                  <Users className="w-16 h-16 text-accent mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Meet Our Managing Director
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    For executive-level discussions and strategic partnerships, connect directly with our leadership team.
                  </p>
                  <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-4 rounded-lg">
                    <p className="text-foreground font-semibold">
                      Director Email: <span className="text-accent">director@eccworksltd.com</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="h-80 bg-gradient-to-br from-primary/20 to-accent/20">
                <CardContent className="p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">Lagos, Nigeria</h3>
                    <p className="text-muted-foreground mb-4">
                      Headquarters serving West Africa
                    </p>
                    <div className="inline-block bg-accent/20 px-4 py-2 rounded-lg">
                      <span className="text-accent font-semibold">🇳🇬 Proudly Nigerian</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 animate-slide-in-left">
            Our team is ready to help with your electrical and mechanical service needs
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4">
              Call Now: +2348036508892
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4">
              Email: info@eccworksltd.com
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contact;