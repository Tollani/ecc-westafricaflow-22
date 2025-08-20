import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import hvacImage from "@/assets/photo_5850491347398675341_x.jpg";
import coolingImage from "@/assets/service-datacenter-real.jpg";
import installationImage from "@/assets/service-installation-real.jpg";
import maintenanceImage from "@/assets/service-maintenance-real.jpg";
import hvacEquipmentImage from "@/assets/service-hvac-equipment-real.jpg";
import electricalWorkImage from "@/assets/service-electrical-real.jpg";
import technicianWorkImage from "@/assets/service-technician-real.jpg";
import mechanicalSystemsImage from "@/assets/service-mechanical-real.jpg";

const ServiceSlideshow = () => {
  const serviceImages = [
    { 
      src: installationImage, 
      alt: "Professional installation services",
      title: "Installation Services"
    },
    { 
      src: hvacImage, 
      alt: "HVAC systems and solutions",
      title: "HVAC Systems"
    },
    { 
      src: coolingImage, 
      alt: "Data center cooling solutions",
      title: "Data Center Cooling"
    },
    { 
      src: maintenanceImage, 
      alt: "Maintenance and support services",
      title: "Maintenance Services"
    },
    { 
      src: hvacEquipmentImage, 
      alt: "HVAC equipment and systems",
      title: "HVAC Equipment"
    },
    { 
      src: electricalWorkImage, 
      alt: "Electrical work and installations",
      title: "Electrical Services"
    },
    { 
      src: technicianWorkImage, 
      alt: "Professional technician services",
      title: "Technical Support"
    },
    { 
      src: mechanicalSystemsImage, 
      alt: "Mechanical systems and solutions",
      title: "Mechanical Systems"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Service Portfolio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of electrical and mechanical services across West Africa
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {serviceImages.map((image, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg text-shadow-md">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-background/90 border-border hover:bg-background" />
          <CarouselNext className="hidden md:flex -right-12 bg-background/90 border-border hover:bg-background" />
        </Carousel>
      </div>
    </section>
  );
};

export default ServiceSlideshow;
