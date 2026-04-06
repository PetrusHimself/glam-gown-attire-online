import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const Universities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const universities = [
    {
      name: "University of Cape Town",
      abbreviation: "UCT",
      colors: "Blue and white",
      attireDetails: "Navy blue gown with blue and white hood",
      image: "/lovable-uploads/grad-gown.jpg"
    },
    {
      name: "University of Witwatersrand",
      abbreviation: "Wits",
      colors: "Blue and gold",
      attireDetails: "Black gown with blue and gold hood",
      image: "/lovable-uploads/grad-belt.jpg"
    },
    {
      name: "University of Johannesburg",
      abbreviation: "UJ",
      colors: "Orange and white",
      attireDetails: "Black gown with orange and white hood",
      image: "/lovable-uploads/grad-fullset.jpg"
    },
    {
      name: "Stellenbosch University",
      abbreviation: "SU",
      colors: "Maroon and gold",
      attireDetails: "Black gown with maroon and gold hood",
      image: "/lovable-uploads/grad-night.jpg"
    },
    {
      name: "University of Pretoria",
      abbreviation: "UP",
      colors: "Red and blue",
      attireDetails: "Black gown with red and blue hood",
      image: "/lovable-uploads/grad-cap.jpg"
    },
    {
      name: "Rhodes University",
      abbreviation: "RU",
      colors: "Purple and black",
      attireDetails: "Black gown with purple trim",
      image: "/lovable-uploads/grad-male.jpg"
    },
    {
      name: "University of KwaZulu-Natal",
      abbreviation: "UKZN",
      colors: "Blue and gold",
      attireDetails: "Black gown with blue and gold hood",
      image: "/lovable-uploads/grad-celebrate.jpg"
    },
    {
      name: "Nelson Mandela University",
      abbreviation: "NMU",
      colors: "Blue and yellow",
      attireDetails: "Black gown with blue and yellow hood",
      image: "/lovable-uploads/grad-gown.jpg"
    },
    {
      name: "North-West University",
      abbreviation: "NWU",
      colors: "Purple and white",
      attireDetails: "Black gown with purple and white hood",
      image: "/lovable-uploads/grad-night.jpg"
    }
  ];
  
  const filteredUniversities = universities.filter(uni => 
    uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    uni.abbreviation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="motion-gradient text-white py-16 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center font-playfair mb-6">
            South African Universities
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-8">
            We provide graduation attire for all major South African universities, ensuring the correct colors and specifications for your academic achievement.
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Input
              type="text"
              placeholder="Search for your university..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-300" />
          </div>
        </div>
      </section>
      
      {/* University List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center font-playfair mb-12">University Graduation Attire</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUniversities.length > 0 ? (
              filteredUniversities.map((uni, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-44 overflow-hidden">
                    <img 
                      src={uni.image} 
                      alt={uni.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{uni.name}</CardTitle>
                    <CardDescription>{uni.abbreviation}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p><span className="font-medium">University Colors:</span> {uni.colors}</p>
                      <p><span className="font-medium">Attire Details:</span> {uni.attireDetails}</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link to="/contact">Inquire About Attire</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-10">
                <h3 className="text-xl font-medium mb-2">No universities match your search</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search term or browse all universities</p>
                <Button onClick={() => setSearchTerm("")} variant="outline">Show All Universities</Button>
              </div>
            )}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Don't see your university? We cater to all South African institutions.</p>
            <Button asChild>
              <Link to="/contact">Contact Us for Details</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* University Coverage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center font-playfair mb-8">Complete University Coverage</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            In addition to the universities shown above, we provide graduation attire for all South African institutions, including:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <p className="font-medium">University of the Free State</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <p className="font-medium">University of the Western Cape</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <p className="font-medium">Cape Peninsula University of Technology</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <p className="font-medium">Tshwane University of Technology</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <p className="font-medium">Durban University of Technology</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <p className="font-medium">Vaal University of Technology</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <p className="font-medium">University of Limpopo</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <p className="font-medium">University of Venda</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <p className="font-medium">Walter Sisulu University</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <p className="font-medium">University of Zululand</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <p className="font-medium">University of Fort Hare</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <p className="font-medium">Central University of Technology</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <p className="font-medium">Mangosuthu University of Technology</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <p className="font-medium">Sefako Makgatho Health Sciences University</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <p className="font-medium">Sol Plaatje University</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <p className="font-medium">University of Mpumalanga</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gold text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-playfair mb-6">Ready to Order Your University's Graduation Attire?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to arrange your graduation attire rental or purchase for any South African university.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-gold">
              <Link to="/hire">View Rental Options</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Universities;
