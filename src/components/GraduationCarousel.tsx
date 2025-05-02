
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ImageIcon, ChevronRight } from "lucide-react";

const GraduationCarousel = () => {
  // Array of all graduation photos
  const photos = [
    "/lovable-uploads/29783412-b3e3-4d47-9f05-d1994051b909.png",
    "/lovable-uploads/1383b318-dc4d-4df9-b8bf-1903fdbaf5f3.png",
    "/lovable-uploads/e1f63f78-af52-4ecf-8d1b-cafff1411200.png",
    "/lovable-uploads/b19e1a53-0c58-4b52-8d27-db1fd88a5452.png",
    "/lovable-uploads/1bd6df23-8565-4909-bb55-816e23723026.png",
    "/lovable-uploads/98e725eb-6ad5-497d-9bfe-8f4ed130ff74.png"
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold font-playfair">Graduation Moments</h2>
          <Button asChild className="bg-navy hover:bg-navy/90 text-white flex items-center gap-2">
            <Link to="/gallery">
              <ImageIcon size={18} />
              View Gallery
              <ChevronRight size={16} />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.slice(0, 6).map((photo, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg aspect-[3/4] border border-gray-200 shadow-md group">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraduationCarousel;
