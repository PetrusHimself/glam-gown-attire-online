
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MoreHorizontal, X, Phone, Mail, Instagram } from 'lucide-react';

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
              <a href="mailto:glamgownattire@gmail.com" className="hover:text-gold">glamgownattire@gmail.com</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/glam_gown_attire" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
              <Instagram size={16} />
            </a>
            <a href="https://www.tiktok.com/@gradgowns" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
            <a href="https://wa.me/+27733139585" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                <path d="M9.5 15.5a5 5 0 0 0 5 0" />
              </svg>
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
              <img 
                src="/lovable-uploads/8c1efe15-c4cb-4278-b09a-9fab4f83563c.png" 
                alt="Glam Attire Logo" 
                className="w-18 h-16 rounded-full"
              />
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
                <a href="mailto:glamgownattire@gmail.com" className="hover:text-gold">glamgownattire@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
