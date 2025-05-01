
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center font-playfair mb-6">
            About Glam Attire
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto">
            South Africa's premier provider of graduation attire for all universities across the country.
          </p>
        </div>
      </section>
      
      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold font-playfair mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Glam Attire "Lets Dress You" was founded with a simple mission: to provide high-quality graduation attire that makes graduating students look and feel their best on one of the most important days of their lives.
              </p>
              <p className="text-gray-700 mb-4">
                What began as a small operation serving local universities has grown into a trusted provider of graduation attire across South Africa, while maintaining our commitment to personalized service and attention to detail.
              </p>
              <p className="text-gray-700">
                We understand that graduation day is the culmination of years of hard work and dedication. That's why we're passionate about ensuring every student has access to proper attire that meets their university's specifications and makes them feel proud as they walk across the stage.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold"></div>
              <img
                src="https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&w=1200&auto=format&fit=crop"
                alt="Graduation attire"
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center font-playfair mb-12">Our Mission & Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target text-black">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center font-playfair mb-3">Our Mission</h3>
              <p className="text-gray-600 text-center">
                To provide every graduating student with high-quality, properly specified attire that honors their academic achievement and creates lasting memories of their special day.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye text-black">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center font-playfair mb-3">Our Vision</h3>
              <p className="text-gray-600 text-center">
                To be the most trusted provider of graduation attire in South Africa, known for our exceptional quality, attention to detail, and outstanding customer service.
              </p>
            </div>
            
            {/* Values */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart text-black">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center font-playfair mb-3">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="text-gold mr-2">•</span> Quality and Attention to Detail
                </li>
                <li className="flex items-center">
                  <span className="text-gold mr-2">•</span> Excellent Customer Service
                </li>
                <li className="flex items-center">
                  <span className="text-gold mr-2">•</span> Respect for Academic Traditions
                </li>
                <li className="flex items-center">
                  <span className="text-gold mr-2">•</span> Accessibility and Affordability
                </li>
                <li className="flex items-center">
                  <span className="text-gold mr-2">•</span> Reliability and Dependability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center font-playfair mb-12">Why Choose Glam Attire</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Expertise */}
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap text-white">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-2">University Expertise</h3>
              <p className="text-gray-600">
                We know the specific requirements for every South African university's graduation attire.
              </p>
            </div>
            
            {/* Quality */}
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-check text-white">
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Our attire is made from high-quality materials designed to look professional in photos and be comfortable.
              </p>
            </div>
            
            {/* Options */}
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers text-white">
                  <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                  <path d="m22 12-8.6 3.9a2 2 0 0 1-1.8 0L2 12" />
                  <path d="m22 17-8.6 3.9a2 2 0 0 1-1.8 0L2 17" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-2">Flexible Options</h3>
              <p className="text-gray-600">
                Choose between rental or purchase options to suit your preferences and budget.
              </p>
            </div>
            
            {/* Service */}
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-handshake text-white">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
                  <path d="m18 15-2-2" />
                  <path d="m15 18-2-2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-2">Personal Service</h3>
              <p className="text-gray-600">
                Enjoy our personalized attention to ensure your attire is perfect for your graduation day.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-playfair mb-6">Ready to Look Your Best on Graduation Day?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact Glam Attire "Lets Dress You" today to arrange your graduation attire rental or purchase.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="bg-gold hover:bg-amber-600 text-black">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Link to="/hire">View Rental Options</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
