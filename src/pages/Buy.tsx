
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Buy = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  
  const products = [
    {
      name: "Full Set",
      description: "Complete graduation attire set including gown, cap, tassel, hood/belt, and scroll holder",
      price: "R2000",
      image: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Gown",
      description: "High-quality graduation gown in your university's colors",
      price: "R800",
      image: "https://images.unsplash.com/photo-1627556704253-f95136e839b3?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Belt",
      description: "University-specific graduation belt/sash",
      price: "R350",
      image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Hood",
      description: "Academic hood in your university's colors",
      price: "R550",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Cap",
      description: "Graduation mortarboard cap with tassel",
      price: "R350",
      image: "https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Scroll",
      description: "Elegant scroll holder for your degree certificate",
      price: "R300",
      image: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=800&auto=format&fit=crop"
    }
  ];
  
  const sizes = ["Small", "Medium", "Large", "X-Large", "XX-Large"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=2000&auto=format&fit=crop')] opacity-30 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center font-playfair mb-6">
            Purchase Graduation Attire
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-8">
            Own your graduation attire as a keepsake of your academic achievement. High-quality items available individually or as complete sets.
          </p>
          <div className="text-center">
            <Button asChild className="bg-gold hover:bg-amber-600 text-black">
              <a href="#product-catalog">View Products</a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Size Selection */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center font-playfair mb-8">Find Your Perfect Fit</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            All our graduation attire items are available in multiple sizes. Select your size to view available products.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {sizes.map((size) => (
              <Button 
                key={size}
                variant={selectedSize === size ? "default" : "outline"}
                onClick={() => setSelectedSize(size)}
                className={selectedSize === size ? "bg-gold hover:bg-amber-600 text-black border-gold" : ""}
              >
                {size}
              </Button>
            ))}
            <Button 
              variant={selectedSize === null ? "default" : "outline"}
              onClick={() => setSelectedSize(null)}
              className="ml-2"
            >
              Show All
            </Button>
          </div>
        </div>
      </section>
      
      {/* Product Catalog */}
      <section id="product-catalog" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center font-playfair mb-10">Product Catalog</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-gold">{product.price}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {selectedSize ? `Size: ${selectedSize}` : 'All sizes available'}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link to="/contact">Inquire Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center font-playfair mb-10">Product Details</h2>
          
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="materials">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="materials" className="flex-1">Materials</TabsTrigger>
                <TabsTrigger value="sizes" className="flex-1">Sizing Guide</TabsTrigger>
                <TabsTrigger value="care" className="flex-1">Care Instructions</TabsTrigger>
              </TabsList>
              <TabsContent value="materials">
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="text-gray-700 mb-6">
                    Our graduation attire is made from high-quality materials designed to look elegant and professional while ensuring comfort during your graduation ceremony.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-gold mr-2 mt-1">•</span>
                      <div>
                        <span className="font-medium">Gowns:</span> Premium polyester with satin finish, providing elegant drape and wrinkle resistance
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2 mt-1">•</span>
                      <div>
                        <span className="font-medium">Caps:</span> Matching fabric with sturdy internal structure to maintain shape
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2 mt-1">•</span>
                      <div>
                        <span className="font-medium">Tassels:</span> High-quality silk-like threads with secure attachment
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2 mt-1">•</span>
                      <div>
                        <span className="font-medium">Hoods/Belts:</span> University-specific colored fabrics that meet official specifications
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2 mt-1">•</span>
                      <div>
                        <span className="font-medium">Scroll Holders:</span> Durable cardboard tube with premium covering and decorative elements
                      </div>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="sizes">
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="text-gray-700 mb-6">
                    Finding the right size is essential for a professional appearance on your graduation day. Use this guide to determine your ideal size:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-2 px-4 border text-left">Size</th>
                          <th className="py-2 px-4 border text-left">Height</th>
                          <th className="py-2 px-4 border text-left">Chest</th>
                          <th className="py-2 px-4 border text-left">Best For</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4 border">Small</td>
                          <td className="py-2 px-4 border">150-165cm</td>
                          <td className="py-2 px-4 border">88-96cm</td>
                          <td className="py-2 px-4 border">Petite builds</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-2 px-4 border">Medium</td>
                          <td className="py-2 px-4 border">165-175cm</td>
                          <td className="py-2 px-4 border">96-104cm</td>
                          <td className="py-2 px-4 border">Average builds</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border">Large</td>
                          <td className="py-2 px-4 border">175-185cm</td>
                          <td className="py-2 px-4 border">104-112cm</td>
                          <td className="py-2 px-4 border">Larger builds</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-2 px-4 border">X-Large</td>
                          <td className="py-2 px-4 border">185-195cm</td>
                          <td className="py-2 px-4 border">112-120cm</td>
                          <td className="py-2 px-4 border">Tall/larger builds</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border">XX-Large</td>
                          <td className="py-2 px-4 border">195cm+</td>
                          <td className="py-2 px-4 border">120cm+</td>
                          <td className="py-2 px-4 border">Very tall/larger builds</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Not sure about your size? Visit our Melville location to try on different sizes or contact us for guidance.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="care">
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="text-gray-700 mb-6">
                    Proper care will ensure your graduation attire remains in excellent condition for years to come:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-gold mr-2 mt-1">1.</span>
                      <div>
                        <span className="font-medium">Storage:</span> Store your gown on a padded hanger to maintain shape. Keep in a breathable garment bag in a cool, dry place.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2 mt-1">2.</span>
                      <div>
                        <span className="font-medium">Cleaning:</span> Spot clean when possible. If full cleaning is necessary, use professional dry cleaning only.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2 mt-1">3.</span>
                      <div>
                        <span className="font-medium">Wrinkles:</span> To remove wrinkles, hang the gown in a bathroom with hot shower running to create steam, or use a steamer on low setting.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2 mt-1">4.</span>
                      <div>
                        <span className="font-medium">Cap care:</span> Handle the cap carefully to maintain its shape. Store flat or on a rounded surface.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2 mt-1">5.</span>
                      <div>
                        <span className="font-medium">Tassel preservation:</span> Keep tassels straight and untangled. Avoid crushing or compressing them.
                      </div>
                    </li>
                  </ul>
                  <div className="bg-gray-50 p-4 rounded mt-6">
                    <p className="text-sm text-gray-600">
                      <strong>Important:</strong> Never iron directly on the fabric, especially on any embroidery or special decorations, as high heat can damage the material.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center font-playfair mb-10">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I ensure I get the correct colors for my university?</AccordionTrigger>
                <AccordionContent>
                  We maintain accurate records of all South African university colors and specifications. When ordering, simply tell us your university name and degree, and we'll ensure your attire matches the official requirements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Do you offer customization options?</AccordionTrigger>
                <AccordionContent>
                  Yes, we can add certain customizations such as embroidered initials or class year for an additional fee. Contact us to discuss your specific customization needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How long does it take to fulfill an order?</AccordionTrigger>
                <AccordionContent>
                  Standard orders are typically fulfilled within 7-10 business days. During peak graduation season, please allow 2-3 weeks. Rush orders may be accommodated for an additional fee, subject to availability.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I return or exchange purchased items?</AccordionTrigger>
                <AccordionContent>
                  Unused items in original packaging may be returned within 14 days for an exchange or refund. Custom orders and items that have been worn cannot be returned unless defective.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Do you offer discounts for bulk orders?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer discounts for group orders of 5 or more sets. Contact us for a custom quote based on your specific requirements and quantity.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept cash, EFT/bank transfers, and credit/debit cards. For purchases, a 50% deposit is required to begin processing your order, with the balance due before collection or delivery.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Ready to purchase your graduation attire?</p>
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Buy;
