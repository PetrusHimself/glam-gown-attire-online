
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gallery, ChevronRight } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const GraduationCarousel = () => {
  // Array of all graduation photos
  const photos = [
    "/lovable-uploads/29783412-b3e3-4d47-9f05-d1994051b909.png",
    "/lovable-uploads/1383b318-dc4d-4df9-b8bf-1903fdbaf5f3.png",
    "/lovable-uploads/e1f63f78-af52-4ecf-8d1b-cafff1411200.png",
    "/lovable-uploads/b19e1a53-0c58-4b52-8d27-db1fd88a5452.png",
    "/lovable-uploads/1bd6df23-8565-4909-bb55-816e23723026.png",
    "/lovable-uploads/98e725eb-6ad5-497d-9bfe-8f4ed130ff74.png",
    "/lovable-uploads/3186e1ad-f390-47c3-baf3-be1fb9f00a8f.png",
    "/lovable-uploads/3da5cac3-9bc6-4313-a290-83340764b1f6.png",
    "/lovable-uploads/d32f38ac-ddca-46f9-bb99-47010222bfe2.png",
    "/lovable-uploads/45e71066-5e44-4c4a-9111-09313128ba4f.png",
    "/lovable-uploads/d86b8728-632a-4d9d-9153-f577557154fa.png",
    "/lovable-uploads/3bb6c0f9-70ab-4e6b-9c70-a2efa2d64b2f.png",
    "/lovable-uploads/5d0be104-7344-491b-b08a-d57ed4635b69.png",
    "/lovable-uploads/cc22ab8e-d6c5-416a-8463-eeaf3a3380c9.png",
    "/lovable-uploads/7b9b909a-a16d-4947-851c-3d49d3c49bb9.png",
    "/lovable-uploads/fa8fd08d-5fe5-4a2c-81c3-9525b1c8c518.png",
    "/lovable-uploads/4391ee73-2fa4-4202-bd2e-7eb5970fd9f8.png",
    "/lovable-uploads/7f72c349-755d-452e-9459-85a1f30e96b6.png",
    "/lovable-uploads/4bb02efd-6f4e-4422-8ad9-bb0c13fee5da.png",
    "/lovable-uploads/beee6851-e7d7-4d55-b797-c6eb1383cd7f.png"
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold font-playfair">Graduation Moments</h2>
          <Button asChild className="bg-navy hover:bg-navy/90 text-white flex items-center gap-2">
            <Link to="/gallery">
              <Gallery size={18} />
              View Gallery
              <ChevronRight size={16} />
            </Link>
          </Button>
        </div>
        
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {photos.map((photo, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="relative overflow-hidden rounded-lg aspect-[3/4] border border-gray-200 shadow-md group">
                    <img
                      src={photo}
                      alt={`Graduation photo ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <p className="font-medium">Graduation Excellence</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white/70 hover:bg-white text-navy border-none" />
            <CarouselNext className="right-2 bg-white/70 hover:bg-white text-navy border-none" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default GraduationCarousel;
