
import { Button } from "@/components/ui/button";

const Gallery = () => {
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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">Graduation Gallery</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcasing our graduates in their finest attire. Get inspiration for your own graduation and see how our products look in action.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                <img 
                  src={photo} 
                  alt={`Graduation photo ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-medium">Graduation Excellence</p>
                    <p className="text-sm text-gray-200">Professional attire for your special day</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold font-playfair mb-4">Ready to look this good for your graduation?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-gold hover:bg-amber-600 text-black px-8 py-6 h-auto text-lg">
              <a href="/hire">Hire Attire</a>
            </Button>
            <Button asChild className="bg-navy hover:bg-navy/80 text-white px-8 py-6 h-auto text-lg">
              <a href="/buy">Buy Attire</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
