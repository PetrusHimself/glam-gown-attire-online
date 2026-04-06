
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
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-medium text-gray-700">Hiring Fee</span>
                    <span className="text-2xl font-bold text-gold">R300</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Refundable Deposit</span>
                    <span className="text-2xl font-bold text-gold">R300</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-4">
                  The deposit is fully refunded once the graduation regalia is returned in good condition.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold font-playfair mb-4">Size Availability</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {["Small", "Medium", "Large", "X-Large", "XX-Large"].map(size => (
                    <li key={size} className="flex items-center">
                      <span className="text-gold mr-2">✓</span> {size}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold font-playfair mb-4">University Coverage</h3>
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
                  Contact us today to arrange your graduation attire rental. Pay your deposit to secure your regalia — no reservation is made without deposit payment.
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
          <h2 className="text-3xl font-bold text-center font-playfair mb-12">Hiring Process</h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-300"></div>

              {/* Step 1 */}
              <div className="relative pl-16 pb-10">
                <div className="absolute left-0 top-1 bg-gold text-black rounded-full w-10 h-10 flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-bold font-playfair mb-2">Contact Us</h3>
                <p className="text-gray-600">
                  Reach out to us via phone, WhatsApp, or our contact form. Let us know your university, graduation date, and size requirements so we can confirm availability.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative pl-16 pb-10">
                <div className="absolute left-0 top-1 bg-gold text-black rounded-full w-10 h-10 flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-bold font-playfair mb-2">Pay the Deposit to Reserve</h3>
                <p className="text-gray-600">
                  Pay the <strong>R300 refundable deposit</strong> to secure your regalia. Graduation attire is <strong>only reserved once the deposit has been paid</strong> — no regalia will be held without it. Use your name and graduation date as the payment reference.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative pl-16 pb-10">
                <div className="absolute left-0 top-1 bg-gold text-black rounded-full w-10 h-10 flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-bold font-playfair mb-2">Collection — 1 Day Before Graduation</h3>
                <p className="text-gray-600">
                  Collect your graduation regalia <strong>one (1) day before your graduation ceremony</strong>. Please also pay the <strong>R300 hiring fee</strong> at this point if not yet settled.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative pl-16 pb-10">
                <div className="absolute left-0 top-1 bg-gold text-black rounded-full w-10 h-10 flex items-center justify-center font-bold">4</div>
                <h3 className="text-xl font-bold font-playfair mb-2">Enjoy Your Graduation</h3>
                <p className="text-gray-600">
                  Look your very best on your special day in high-quality, properly fitted graduation attire from Glam Gown Attire.
                </p>
              </div>

              {/* Step 5 */}
              <div className="relative pl-16">
                <div className="absolute left-0 top-1 bg-gold text-black rounded-full w-10 h-10 flex items-center justify-center font-bold">5</div>
                <h3 className="text-xl font-bold font-playfair mb-2">Return by 12:00 PM the Next Day</h3>
                <p className="text-gray-600">
                  Return all regalia <strong>no later than 12:00 PM (midday) on the day following your graduation</strong>. Once items are inspected and confirmed in good condition, your <strong>R300 deposit is refunded in full</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center font-playfair mb-10">Policies & Payment</h2>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="terms">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="terms" className="flex-1">Policies</TabsTrigger>
                <TabsTrigger value="cancellation" className="flex-1">Cancellation</TabsTrigger>
                <TabsTrigger value="payment" className="flex-1">Banking Details</TabsTrigger>
              </TabsList>

              <TabsContent value="terms">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Reservation Policy</AccordionTrigger>
                      <AccordionContent>
                        Graduation regalia is <strong>only reserved once the R300 deposit has been paid</strong>. No regalia will be held or reserved without payment of the deposit.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Collection Policy</AccordionTrigger>
                      <AccordionContent>
                        Customers may collect their graduation regalia <strong>one (1) day before the graduation ceremony</strong>. Please ensure you collect on time to avoid any inconvenience on your graduation day.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Return Policy</AccordionTrigger>
                      <AccordionContent>
                        All regalia must be returned <strong>no later than 12:00 PM (midday) on the day following the graduation</strong>. Late returns may affect your deposit refund.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Deposit Refund</AccordionTrigger>
                      <AccordionContent>
                        The R300 deposit is fully refunded once the graduation regalia is returned in good condition by the required deadline. Items must be returned clean and undamaged.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>

              <TabsContent value="cancellation">
                <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1 text-lg">•</span>
                    <p className="text-gray-700">
                      If a customer cancels <strong>two (2) days before the graduation</strong>, the deposit will <strong>not be refunded</strong>, as the regalia would have already been reserved and set aside.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-gold mt-1 text-lg">•</span>
                    <p className="text-gray-700">
                      The deposit <strong>may only be transferred</strong> if the customer refers another customer to take over the reservation.
                    </p>
                  </div>
                  <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-amber-800 text-sm font-medium">
                      To avoid losing your deposit, please notify us as early as possible if your plans change.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="payment">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold font-playfair mb-6">Banking Details</h3>
                  <div className="space-y-3 mb-6">
                    {[
                      { label: "Bank Name", value: "Capitec Business" },
                      { label: "Account Holder", value: "Glam Gown Attire" },
                      { label: "Account Number", value: "1053317808" },
                      { label: "Account Type", value: "Current" },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between items-center border-b border-gray-200 pb-3">
                        <span className="text-gray-500 font-medium">{label}</span>
                        <span className="font-bold text-navy">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gold/10 border border-gold rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-800">
                      <span className="text-gold font-bold">Payment Reference:</span> Please use your <strong>full name and graduation date</strong> as the payment reference (e.g. Jane Doe 15 April 2026).
                    </p>
                  </div>
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
                  We recommend booking as early as possible, especially during peak graduation season (March–April and September–October), to ensure availability in your size and university specifications. Remember, your reservation is only confirmed once the deposit is paid.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>When do I collect my regalia?</AccordionTrigger>
                <AccordionContent>
                  You may collect your graduation regalia one (1) day before your graduation ceremony. Please ensure you collect on time to avoid any last-minute issues.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>When must I return the regalia?</AccordionTrigger>
                <AccordionContent>
                  All regalia must be returned no later than 12:00 PM (midday) on the day following your graduation. Returns after this time may affect your deposit refund.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What happens to my deposit if I cancel?</AccordionTrigger>
                <AccordionContent>
                  If you cancel two (2) days or less before your graduation, the deposit is non-refundable as your regalia will already have been reserved. However, the deposit can be transferred if you refer another customer to take over your reservation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What payment reference should I use?</AccordionTrigger>
                <AccordionContent>
                  Please use your full name and graduation date as your payment reference (e.g. Jane Doe 15 April 2026). This helps us match your payment to your reservation quickly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>What if I accidentally damage the graduation attire?</AccordionTrigger>
                <AccordionContent>
                  Minor wear and tear is understood, but significant damage or failure to return items in good condition may result in partial or complete loss of your R300 deposit.
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
