
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const GallerySection = () => {
  const isMobile = useIsMobile();
  const [api, setApi] = useState<any>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) return;
    
    const handleSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };
    
    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const galleryImages = [
    {
      src: "/lovable-uploads/8f78e40b-6fe8-4f24-88f5-dc7ebf6d6439.png",
      alt: "Graduate holding graduation cap with orange tassel"
    },
    {
      src: "/lovable-uploads/fba418c6-6157-4456-a7b6-08eaf75fb83d.png",
      alt: "Graduate with flowers walking away"
    },
    {
      src: "/lovable-uploads/f00f1a84-5874-44a9-bfff-25ec7c77471f.png",
      alt: "Graduate in red dress with graduation certificate"
    },
    {
      src: "/lovable-uploads/3fc2615e-75d4-4516-840a-c7cf05452d6d.png",
      alt: "Graduate raising certificate in celebration"
    },
    {
      src: "/lovable-uploads/d740acce-e09e-4a9f-a025-0952ae54908a.png",
      alt: "Graduate with orange tassel in evening light"
    },
    {
      src: "/lovable-uploads/459f26ab-4e20-41e7-98b8-22290a44cbfc.png",
      alt: "Graduate posing with graduation cap"
    },
    {
      src: "/lovable-uploads/fd64e551-3e6a-4d51-9e90-031d09969afa.png",
      alt: "Graduate in white dress and graduation gown"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center font-playfair mb-8">Our Happy Graduates</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          See how our quality graduation attire has helped these graduates look their best on their special day. We take pride in dressing South Africa's brightest minds.
        </p>

        <Carousel 
          setApi={setApi}
          className="w-full"
          opts={{ 
            loop: true,
            align: "start",
            slidesToScroll: isMobile ? 1 : 3
          }}
        >
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden border-none rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="relative p-0 aspect-[3/4]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center mt-8">
            <CarouselPrevious className="relative static transform-none mr-2" />
            <div className="flex items-center space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index ? "w-6 bg-gold" : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <CarouselNext className="relative static transform-none ml-2" />
          </div>
        </Carousel>
        
        <div className="flex justify-center mt-10">
          <a 
            href="/hire" 
            className="bg-gold hover:bg-amber-600 text-black px-6 py-3 rounded font-medium flex items-center space-x-2 transition-all"
          >
            <span>Hire Your Graduation Attire</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
