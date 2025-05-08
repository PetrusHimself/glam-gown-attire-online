
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import GallerySection from "../components/GallerySection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="motion-gradient text-white py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center font-josefin animate-fade-in">
            Let's Dress You For Your
            <span className="text-gold block mt-1">Graduation Day</span>
          </h1>
          <p className="mt-6 text-lg text-center max-w-xl text-gray-100 animate-fade-in animate-delay-200">
            Professional graduation attire rental and sales for universities across South Africa. Quality gowns, caps, and accessories for your special day.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in animate-delay-300">
            <Button asChild size="lg" className="bg-gold hover:bg-amber-600 text-black">
              <Link to="/hire">Hire Attire</Link>
            </Button>
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white">
              <Link to="/buy">Buy</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection />

      {/* Services Overview */}
      <section className="py-16 bg-ivory">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center font-playfair mb-12">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hire Service */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 bg-gray-200">
                <div className="flex items-center justify-center h-full text-gray-500">Graduation Attire Image</div>
                <div className="absolute top-4 left-4 bg-gold text-black py-1 px-3 rounded font-medium">
                  From R300
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold mb-3">Hire Graduation Attire</h3>
                <p className="text-gray-600 mb-5">
                  Rent high-quality graduation gowns, caps, and accessories for your graduation ceremony. Available for all South African universities.
                </p>
                <ul className="text-gray-700 mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="text-gold mr-2">✓</span> Full Set Hire R300
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold mr-2">✓</span> Various sizes available
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold mr-2">✓</span> University-specific colors
                  </li>
                </ul>
                <Button asChild variant="secondary" className="w-full flex items-center justify-center">
                  <Link to="/hire">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Buy Service */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 bg-gray-200">
                <div className="flex items-center justify-center h-full text-gray-500">Purchase Options Image</div>
                <div className="absolute top-4 left-4 bg-gold text-black py-1 px-3 rounded font-medium">
                  From R300
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold mb-3">Buy Graduation Attire</h3>
                <p className="text-gray-600 mb-5">
                  Purchase high-quality graduation attire to keep as a memento of your achievement. Complete sets and individual items available.
                </p>
                <ul className="text-gray-700 mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="text-gold mr-2">✓</span> Full Set R2000
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold mr-2">✓</span> Individual items available
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold mr-2">✓</span> All universities supported
                  </li>
                </ul>
                <Button asChild variant="secondary" className="w-full flex items-center justify-center">
                  <Link to="/buy">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center font-playfair mb-12">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow relative">
              <div className="absolute -top-4 left-6 text-gold">
                <Star fill="#D4AF37" size={24} />
                <Star fill="#D4AF37" size={24} className="-ml-4" />
                <Star fill="#D4AF37" size={24} className="-ml-4" />
                <Star fill="#D4AF37" size={24} className="-ml-4" />
                <Star fill="#D4AF37" size={24} className="-ml-4" />
              </div>
              <p className="italic text-gray-600 mt-4">
                "The gown I rented was in perfect condition and fit perfectly. The team was very helpful with sizing and the return process was easy."
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="font-medium">Nomfundo M.</p>
                <p className="text-sm text-gray-500">University of Johannesburg</p>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow relative">
              <div className="absolute -top-4 left-6 text-gold">
                <Star fill="#D4AF37" size={24} />
                <Star fill="#D4AF37" size={24} className="-ml-4" />
                <Star fill="#D4AF37" size={24} className="-ml-4" />
                <Star fill="#D4AF37" size={24} className="-ml-4" />
                <Star fill="#D4AF37" size={24} className="-ml-4" />
              </div>
              <p className="italic text-gray-600 mt-4">
                "I bought my graduation set from Glam Attire and couldn't be happier with the quality. It's a great memento of my achievement."
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="font-medium">Thabo K.</p>
                <p className="text-sm text-gray-500">University of Cape Town</p>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow relative">
              <div className="absolute -top-4 left-6 text-gold">
                <Star fill="#D4AF37" size={24} />
                <Star fill="#D4AF37" size={24} className="-ml-4" />
                <Star fill="#D4AF37" size={24} className="-ml-4" />
                <Star fill="#D4AF37" size={24} className="-ml-4" />
                <Star fill="#D4AF37" size={24} className="-ml-4" />
              </div>
              <p className="italic text-gray-600 mt-4">
                "The service was excellent, and they made sure my attire was exactly right for my university's colors and specifications."
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="font-medium">Lerato N.</p>
                <p className="text-sm text-gray-500">University of Pretoria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-playfair mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to arrange your graduation attire rental or purchase. We serve all South African universities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="bg-gold hover:bg-amber-600 text-black">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white">
              <Link to="/universities">View Universities</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
