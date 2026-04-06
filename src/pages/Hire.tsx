
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const Hire = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-black text-white py-16 relative">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/grad-night.jpg')] opacity-40 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center font-playfair mb-6">
            Graduation Attire Rentals
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-8">
            Rent high-quality graduation gowns, caps, and accessories for your special day. We cater to all South African universities with the correct colors and specifications.
          </p>
          <div className="text-center">
            <Button asChild className="bg-gold hover:bg-amber-600 text-black">
              <a href="#hire-process">View Rental Process</a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Rental Information */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center font-playfair mb-10">Rental Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold font-playfair mb-4">Pricing</h3>
                <p className="text-2xl font-bold text-gold mb-4">Full Set Hire: R300</p>
                <p className="text-gray-600">
                  Our rental package includes the complete graduation attire set: gown, cap, tassel, hood/belt, and scroll holder.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold font-playfair mb-4">Size Availability</h3>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <span className="text-gold mr-2">✓</span> Small
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold mr-2">✓</span> Medium
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold mr-2">✓</span> Large
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold mr-2">✓</span> X-Large
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold mr-2">✓</span> XX-Large
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold font-playfair mb-4">Coverage</h3>
                <p className="text-gray-600 mb-4">
                  We provide graduation attire for all major South African universities, ensuring the correct colors and specifications.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/universities">View University List</Link>
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <img 
                src="/lovable-uploads/grad-celebrate.jpg" 
                alt="Graduate celebrating with diploma" 
                className="rounded-lg shadow-md w-full h-64 object-cover mb-6"
              />
              
              <div className="bg-navy text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold font-playfair mb-4">Ready to Rent?</h3>
                <p className="mb-6">
                  Contact us today to arrange your graduation attire rental. We'll ensure you have the perfect fit and correct university specifications.
                </p>
                <div className="flex flex-col space-y-3">
                  <Button asChild className="bg-gold hover:bg-amber-600 text-black w-full">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-navy w-full">
                    <a href="tel:+27733139585">Call Us: 073-313-9585</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Rental Process */}
      <section id="hire-process" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center font-playfair mb-12">Rental Process</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
              {/* Step 1 */}
              <div className="relative pl-16 pb-10">
                <div className="absolute left-0 top-1 bg-gold text-black rounded-full w-10 h-10 flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-bold font-playfair mb-2">Contact Us</h3>
                <p className="text-gray-600">
                  Reach out to us via phone, WhatsApp, or our contact form to inquire about your graduation attire needs. Let us know your university, graduation date, and size requirements.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="relative pl-16 pb-10">
                <div className="absolute left-0 top-1 bg-gold text-black rounded-full w-10 h-10 flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-bold font-playfair mb-2">Confirm and Reserve</h3>
                <p className="text-gray-600">
                  Once we've confirmed availability for your size and university specifications, place your reservation with a 50% deposit to secure your attire.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="relative pl-16 pb-10">
                <div className="absolute left-0 top-1 bg-gold text-black rounded-full w-10 h-10 flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-bold font-playfair mb-2">Collection/Delivery</h3>
                <p className="text-gray-600">
                  Collect your graduation attire from our Melville location, or arrange for delivery (additional costs may apply) 1-3 days before your graduation ceremony.
                </p>
              </div>
              
              {/* Step 4 */}
              <div className="relative pl-16 pb-10">
                <div className="absolute left-0 top-1 bg-gold text-black rounded-full w-10 h-10 flex items-center justify-center font-bold">4</div>
                <h3 className="text-xl font-bold font-playfair mb-2">Enjoy Your Graduation</h3>
                <p className="text-gray-600">
                  Look professional and polished for your graduation ceremony in your high-quality attire from Glam Attire.
                </p>
              </div>
              
              {/* Step 5 */}
              <div className="relative pl-16">
                <div className="absolute left-0 top-1 bg-gold text-black rounded-full w-10 h-10 flex items-center justify-center font-bold">5</div>
                <h3 className="text-xl font-bold font-playfair mb-2">Return</h3>
                <p className="text-gray-600">
                  Return your attire within 3 days after your graduation to our Melville location. We'll inspect the items and refund your deposit if everything is in good condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Terms and Conditions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center font-playfair mb-10">Terms & Conditions</h2>
          
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="terms">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="terms" className="flex-1">Terms</TabsTrigger>
                <TabsTrigger value="damage" className="flex-1">Damage Policy</TabsTrigger>
                <TabsTrigger value="payment" className="flex-1">Payment</TabsTrigger>
              </TabsList>
              <TabsContent value="terms">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Rental Duration</AccordionTrigger>
                      <AccordionContent>
                        Standard rental period is 3-5 days, allowing for your graduation ceremony and photographs. Late returns will incur additional daily charges of R50 per day.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Deposit Requirements</AccordionTrigger>
                      <AccordionContent>
                        A refundable deposit of R300 is required for all rentals, in addition to the rental fee. The deposit will be refunded upon return of all items in good condition.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Cancellation Policy</AccordionTrigger>
                      <AccordionContent>
                        Cancellations made more than 7 days before collection will receive a full refund. Cancellations within 7 days will be subject to a 30% cancellation fee.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Cleaning Requirements</AccordionTrigger>
                      <AccordionContent>
                        Items must be returned in clean condition. Professional cleaning is not required, but items should be free from stains, marks, and excessive wrinkling.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>
              <TabsContent value="damage">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-6">
                    Our damage policy ensures that our graduation attire remains in excellent condition for all customers. Please note the following damage costs that may be deducted from your deposit:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      <div>
                        <span className="font-medium">Minor stains or marks:</span> R50-R100 depending on severity and cleaning required
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      <div>
                        <span className="font-medium">Tears or significant damage to gown:</span> R300-R600 depending on extent of damage
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      <div>
                        <span className="font-medium">Damaged cap:</span> R200
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      <div>
                        <span className="font-medium">Lost or damaged tassel:</span> R100
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      <div>
                        <span className="font-medium">Lost or damaged belt/hood:</span> R250
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      <div>
                        <span className="font-medium">Unreturned items:</span> Full replacement cost
                      </div>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="payment">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold font-playfair mb-4">Payment Methods</h3>
                  <p className="text-gray-600 mb-6">
                    We accept the following payment methods:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="text-gold mr-2">✓</span> Cash
                    </li>
                    <li className="flex items-center">
                      <span className="text-gold mr-2">✓</span> Bank Transfer/EFT
                    </li>
                    <li className="flex items-center">
                      <span className="text-gold mr-2">✓</span> Credit/Debit Card
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-bold font-playfair mb-4">Payment Schedule</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-gold mr-2 mt-1">1.</span>
                      <div>
                        <span className="font-medium">Reservation deposit:</span> 50% of rental fee to secure your booking
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2 mt-1">2.</span>
                      <div>
                        <span className="font-medium">Balance + security deposit:</span> Due upon collection/delivery of attire
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2 mt-1">3.</span>
                      <div>
                        <span className="font-medium">Deposit refund:</span> Processed within 1-3 business days after return and inspection
                      </div>
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center font-playfair mb-10">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How far in advance should I book my graduation attire?</AccordionTrigger>
                <AccordionContent>
                  We recommend booking at least 2-4 weeks in advance, especially during peak graduation season (March-April and September-October) to ensure availability in your size and university specifications.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I try on the attire before renting?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can visit our Melville location during business hours to try on different sizes and ensure the perfect fit for your graduation day.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What happens if the attire doesn't fit when I collect it?</AccordionTrigger>
                <AccordionContent>
                  We'll do our best to provide a replacement in the correct size, subject to availability. This is why we recommend trying on the attire in advance or providing accurate measurements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Do you offer delivery services?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer delivery within Johannesburg for an additional fee. Please contact us for delivery rates to your specific location and to arrange delivery timing.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What if I accidentally damage the graduation attire?</AccordionTrigger>
                <AccordionContent>
                  Minor wear and tear is expected, but significant damage will result in partial or complete loss of your deposit depending on the extent of damage. See our damage policy for specific costs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Can I keep the graduation tassel as a souvenir?</AccordionTrigger>
                <AccordionContent>
                  The tassel is part of the rental package and must be returned. However, we do sell tassels separately if you wish to keep one as a memento of your graduation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hire;
