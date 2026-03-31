
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, Clock, MapPin, MessageCircleMore, Instagram } from "lucide-react";
import UniversitySelector from "@/components/ui/UniversitySelector";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    itemType: "",
    size: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      console.log("Form submitted with data:", formData);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        university: "",
        itemType: "",
        size: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  const itemTypes = [
    "Full Set Rental",
    "Full Set Purchase",
    "Gown Only",
    "Cap Only",
    "Belt/Hood Only",
    "Scroll Holder Only",
    "Other/Inquiry"
  ];
  
  const sizes = ["Small", "Medium", "Large", "X-Large", "XX-Large"];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center font-playfair mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Have questions about our graduation attire? Reach out to us and we'll be happy to help.
          </p>
        </div>
      </section>
      
      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <Card className="p-8 shadow-lg">
              <h2 className="text-2xl font-bold font-playfair mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-medium">Full Name *</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-medium">Email Address *</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="font-medium">Phone Number *</label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="university" className="font-medium">University</label>
                  <UniversitySelector 
                    value={formData.university}
                    onChange={(value) => setFormData(prev => ({ ...prev, university: value }))}
                    className="w-full"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="itemType" className="font-medium">Item Type</label>
                    <select
                      id="itemType"
                      name="itemType"
                      value={formData.itemType}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2"
                    >
                      <option value="">Select item type</option>
                      {itemTypes.map((type, i) => (
                        <option key={i} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="size" className="font-medium">Size</label>
                    <select
                      id="size"
                      name="size"
                      value={formData.size}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2"
                    >
                      <option value="">Select size</option>
                      {sizes.map((size, i) => (
                        <option key={i} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="font-medium">Message *</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your inquiry or message"
                    rows={5}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gold hover:bg-amber-600 text-black font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                
                <p className="text-sm text-gray-500 text-center">
                  * Required fields
                </p>
              </form>
            </Card>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold font-playfair mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gold rounded-full p-2.5 mt-1">
                      <Phone size={20} className="text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-gray-600 mb-1">
                        <a href="tel:+27733139585" className="hover:text-gold transition-colors">073-313-9585</a>
                      </p>
                      <p className="text-gray-600">
                        <a href="tel:+27730912251" className="hover:text-gold transition-colors">073-091-2251</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-gold rounded-full p-2.5 mt-1">
                      <Mail size={20} className="text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:glamgownattire@gmail.com" className="hover:text-gold transition-colors">glamgownattire@gmail.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-gold rounded-full p-2.5 mt-1">
                      <MapPin size={20} className="text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Location</h3>
                      <p className="text-gray-600">
                        27 boxes Melville, offyish offices
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-gold rounded-full p-2.5 mt-1">
                      <Clock size={20} className="text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                      <p className="text-gray-600 mb-1">Monday to Friday: 10am - 5pm</p>
                      <p className="text-gray-600">Saturday: 10am - 1pm</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-playfair mb-6">Connect With Us</h2>
                
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/+27733139585" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-md hover:bg-green-600 transition-colors"
                  >
                    <MessageCircleMore size={20} />
                    <span>Chat on WhatsApp</span>
                  </a>
                  
                  <a 
                    href="https://www.instagram.com/glamgownsattire" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-md hover:opacity-90 transition-opacity"
                  >
                    <Instagram size={20} />
                    <span>Follow on Instagram</span>
                  </a>
                  
                  <a 
                    href="https://www.tiktok.com/@glamgowns" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-3 bg-black text-white px-4 py-3 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                    <span>Follow on TikTok</span>
                  </a>
                </div>
              </div>
              
              <div className="p-6 bg-navy text-white rounded-lg">
                <h3 className="text-xl font-bold font-playfair mb-4">Need Immediate Assistance?</h3>
                <p className="mb-6">
                  For urgent inquiries or to reserve your graduation attire quickly, give us a call directly.
                </p>
                <Button asChild variant="outline" className="w-full border-white text-white hover:bg-white hover:text-navy">
                  <a href="tel:+27733139585">
                    <Phone size={16} className="mr-2" />
                    Call Now: 073-313-9585
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center font-playfair mb-10">Find Us</h2>
          
          <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg h-[400px] max-w-5xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.227237746307!2d28.00332111577685!3d-26.182553769793624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950e76e974735d%3A0x3699b44b269c35d9!2s27%20Boxes!5e0!3m2!1sen!2sza!4v1641543922521!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Glam Attire Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
