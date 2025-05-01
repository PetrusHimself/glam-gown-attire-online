
import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, Clock, MapPin, MessageCircleMore } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                </svg>
              </div>
              <div>
                <div className="font-playfair font-bold text-xl tracking-tight text-white">Glam Attire</div>
                <div className="text-xs text-gray-400">Lets Dress You</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Specializing in graduation attire rental and sales for universities across South Africa.
            </p>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <MapPin size={16} className="text-gold" />
              <span>27 boxes Melville, offyish offices</span>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold border-b border-gold pb-2 mb-4 inline-block">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone size={16} className="text-gold" />
                <div>
                  <a href="tel:+27733139585" className="hover:text-gold transition-colors">073-313-9585</a>
                  <span className="mx-2">/</span>
                  <a href="tel:+27730912251" className="hover:text-gold transition-colors">073-091-2251</a>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail size={16} className="text-gold" />
                <a href="mailto:info@glamattire.co.za" className="hover:text-gold transition-colors">info@glamattire.co.za</a>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MessageCircleMore size={16} className="text-gold" />
                <a href="https://wa.me/+27733139585" className="hover:text-gold transition-colors">WhatsApp Us</a>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a href="https://www.instagram.com/glamgownsattire" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-gold transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://www.tiktok.com/@glamgowns" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-gold transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music">
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Hours & Quick Links */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold border-b border-gold pb-2 mb-4 inline-block">Opening Hours</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-gold" />
                <div>
                  <p>Monday to Friday: 9:30-17:00</p>
                  <p>Saturday: 9:30-13:00</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-playfair text-xl font-semibold border-b border-gold pb-2 mb-4 inline-block">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Link to="/hire" className="text-gray-300 hover:text-gold transition-colors">Hire</Link>
                <Link to="/buy" className="text-gray-300 hover:text-gold transition-colors">Buy</Link>
                <Link to="/universities" className="text-gray-300 hover:text-gold transition-colors">Universities</Link>
                <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">Contact</Link>
                <Link to="/about" className="text-gray-300 hover:text-gold transition-colors">About Us</Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Glam Attire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
