import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Users } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    projectDetails: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.service || !formData.projectDetails) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields marked with *",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-quote-request', {
        body: formData
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Quote Request Submitted Successfully! ✅",
        description: "Your request has been received and we'll contact you soon. Thank you for choosing ECC Works Ltd.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        projectDetails: "",
      });

    } catch (error: any) {
      console.error("Error submitting quote request:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error sending your quote request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Your first name" 
                      className="transition-all duration-300 focus:ring-2 focus:ring-accent" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Your last name" 
                      className="transition-all duration-300 focus:ring-2 focus:ring-accent" 
                      required 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@company.com" 
                      className="transition-all duration-300 focus:ring-2 focus:ring-accent" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+234 (0) 123 456 7890" 
                      className="transition-all duration-300 focus:ring-2 focus:ring-accent" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company/Organization
                  </label>
                  <Input 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name" 
                    className="transition-all duration-300 focus:ring-2 focus:ring-accent" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Required *
                  </label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground transition-all duration-300 focus:ring-2 focus:ring-accent"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Installation">Installation</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="HVAC Systems">HVAC Systems</option>
                    <option value="Data Center Cooling">Data Center Cooling</option>
                    <option value="Commissioning">Commissioning</option>
                    <option value="Procurement">Procurement</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <Textarea 
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    placeholder="Please describe your project requirements, timeline, and any specific needs..." 
                    rows={6} 
                    className="transition-all duration-300 focus:ring-2 focus:ring-accent" 
                    required 
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full btn-hero" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                </Button>
              </form>
            </div>

            {/* Managing Director & Map */}
            <div className="animate-slide-in-right">
              <Card className="mb-8 border-2 border-accent/20">
                <CardContent className="p-8 text-center">
                  <Users className="w-16 h-16 text-accent mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Meet Our Managing Director -Aaron Ewoh
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    For executive-level discussions and strategic partnerships, connect directly with our leadership team.
                  </p>
                  <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-4 rounded-lg">
                    <p className="text-foreground font-semibold">
                      Director Email: <span className="text-accent">info@eccworksltd.com</span>
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
