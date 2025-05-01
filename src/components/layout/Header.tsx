
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MoreHorizontal, X, Phone, Mail, Instagram, MessageCircleMore } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Hire', path: '/hire' },
    { name: 'Buy', path: '/buy' },
    { name: 'About Us', path: '/about' },
    { name: 'Universities', path: '/universities' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path ? 'font-bold border-b-2 border-gold' : '';
  };

  return (
    <header className="w-full">
      {/* Top info bar */}
      <div className="bg-black text-white px-4 py-2 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone size={14} className="text-gold" />
              <a href="tel:+27733139585" className="hover:text-gold">073-313-9585</a>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <Mail size={14} className="text-gold" />
              <a href="mailto:info@glamattire.co.za" className="hover:text-gold">info@glamattire.co.za</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/glamgownsattire" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
              <Instagram size={16} />
            </a>
            <a href="https://www.tiktok.com/@glamgowns" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music">
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </a>
            <a href="https://wa.me/+27733139585" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
              <MessageCircleMore size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                </svg>
              </div>
              <div>
                <div className="font-playfair font-bold text-xl tracking-tight">Glam Attire</div>
                <div className="text-xs text-charcoal">Lets Dress You</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={`${isActive(link.path)} text-charcoal hover:text-black pb-1 transition-colors`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden flex items-center"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X size={24} className="text-charcoal" />
            ) : (
              <MoreHorizontal size={24} className="text-charcoal" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-[113px] left-0 right-0 z-50 animate-fade-in">
          <div className="container mx-auto py-4 px-6">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${isActive(link.path)} text-lg text-charcoal hover:text-black transition-colors pb-2 border-b border-gray-100`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <Phone size={16} className="text-gold" />
                <a href="tel:+27733139585" className="hover:text-gold">073-313-9585</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-gold" />
                <a href="mailto:info@glamattire.co.za" className="hover:text-gold">info@glamattire.co.za</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
