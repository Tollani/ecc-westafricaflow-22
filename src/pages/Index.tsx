import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServiceSlideshow from "@/components/ServiceSlideshow";
import FeaturedServices from "@/components/FeaturedServices";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServiceSlideshow />
        <FeaturedServices />
        <AboutSection />
        <WhyChooseUs />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
