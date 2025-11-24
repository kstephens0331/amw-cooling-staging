import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYelp, FaBars, FaTimes } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import logo from '../assets/images/FullLogo_Transparent-56.webp';
import logo2x from '../assets/images/FullLogo_Transparent.webp';
import VoiceSearch from './VoiceSearch';

const Navbar = () => {
  // --- top-level hooks (OK) ---
  const [isOpen, setIsOpen] = useState(false);          // mobile menu
  const [servicesOpen, setServicesOpen] = useState(false); // desktop Services dropdown
  const closeTimer = useRef(null);
  const navigate = useNavigate();

  // mobile menu handlers
  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  // dropdown handlers (desktop)
  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    // small delay prevents flicker when moving into the panel
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };
  const forceCloseServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(false);
  };

  // voice search helpers (NO hooks here)
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const handleVoiceResult = (query) => {
    const q = String(query || '').toLowerCase();
    console.log('Voice search for:', q);

    if (q.includes('about')) {
      speak('Taking you to our About Us page.');
      navigate('/about');
    } else if (q.includes('contact') || q.includes('phone')) {
      speak('Opening the contact page.');
      navigate('/contact');
    } else if (q.includes('services') || q.includes('repair')) {
      speak('Showing our services.');
      navigate('/services');
    } else if (q.includes('blog') || q.includes('tips') || q.includes('articles')) {
      speak('Opening our HVAC blog.');
      navigate('/blog');
    } else if (q.includes('quote') || q.includes('estimate')) {
      speak("Let's get you a quote.");
      navigate('/contact');
    } else if (q.includes('home') || q.includes('main')) {
      speak('Going back to the homepage.');
      navigate('/');
    } else if (q.includes('finance') || q.includes('payment')) {
      speak('Here are your financing options.');
      navigate('/financing');
    } else {
      speak("Sorry, I didn't catch that.");
      alert(`No match for "${query}"`);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            srcSet={`${logo} 1x, ${logo2x} 2x`}
            alt="AMW Cooling & Heating - veteran-owned HVAC company in Conroe TX"
            className="h-14 w-auto object-contain"
            width="56"
            height="56"
          />
          <span className="text-lg md:text-2xl font-bold text-blue-600 whitespace-nowrap">
            AMW Cooling & Heating LLC
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700 items-center">
          <Link to="/" className="hover:text-orange-700">Home</Link>
          <Link to="/about" className="hover:text-orange-700">About Us</Link>

          {/* Controlled Services dropdown */}
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={scheduleCloseServices}
          >
            <button
              type="button"
              className="inline-flex items-center hover:text-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen(v => !v)}
            >
              Services <span className="ml-1">▾</span>
            </button>

            <div
              className={
                'absolute left-0 top-full z-50 w-64 bg-white border border-gray-200 rounded shadow-lg transition ' +
                (servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible')
              }
              onMouseEnter={openServices}
              onMouseLeave={scheduleCloseServices}
              style={{ marginTop: 2 }}
              role="menu"
            >
              <Link
                to="/services"
                className="block px-4 py-2 hover:bg-gray-50"
                role="menuitem"
                onClick={forceCloseServices}
              >
                Our Services
              </Link>
              <Link
                to="/services/ac-repair"
                className="block px-4 py-2 hover:bg-gray-50"
                role="menuitem"
                onClick={forceCloseServices}
              >
                AC Repair
              </Link>
              <Link
                to="/services/heating-repair"
                className="block px-4 py-2 hover:bg-gray-50"
                role="menuitem"
                onClick={forceCloseServices}
              >
                Heating Repair
              </Link>
              <Link
                to="/services/hvac-maintenance"
                className="block px-4 py-2 hover:bg-gray-50"
                role="menuitem"
                onClick={forceCloseServices}
              >
                HVAC Maintenance
              </Link>
              <Link
                to="/services/indoor-air-quality"
                className="block px-4 py-2 hover:bg-gray-50"
                role="menuitem"
                onClick={forceCloseServices}
              >
                Indoor Air Quality
              </Link>
              <Link
                to="/services/smart-thermostats"
                className="block px-4 py-2 hover:bg-gray-50"
                role="menuitem"
                onClick={forceCloseServices}
              >
                Smart Thermostats
              </Link>
              <Link
                to="/services/dryer-vent-cleaning"
                className="block px-4 py-2 hover:bg-gray-50"
                role="menuitem"
                onClick={forceCloseServices}
              >
                Dryer Vent Cleaning
              </Link>
              <Link
                to="/blog"
                className="block px-4 py-2 hover:bg-gray-50"
                role="menuitem"
                onClick={forceCloseServices}
              >
                HVAC Blog
              </Link>
            </div>
          </div>

          <Link to="/faqs" className="hover:text-orange-700">FAQs</Link>
          <Link to="/financing" className="hover:text-orange-700">Financing</Link>
          <Link to="/testimonials" className="hover:text-orange-700">Testimonials</Link>
          <Link to="/contact" className="hover:text-orange-700">Contact</Link>
        </nav>

        <VoiceSearch onResult={handleVoiceResult} />

        {/* Mobile Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 z-50 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
          aria-label="Menu"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 px-4 py-4 space-y-3 text-gray-700">
          <Link to="/" className="block" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="block" onClick={closeMenu}>About Us</Link>

          <div className="pt-2 border-t border-gray-100">
            <div className="text-xs font-semibold uppercase text-gray-500 mb-1">Services</div>
            <Link to="/services" className="block" onClick={closeMenu}>Our Services</Link>
            <Link to="/services/ac-repair" className="block" onClick={closeMenu}>AC Repair</Link>
            <Link to="/services/heating-repair" className="block" onClick={closeMenu}>Heating Repair</Link>
            <Link to="/services/hvac-maintenance" className="block" onClick={closeMenu}>HVAC Maintenance</Link>
            <Link to="/services/indoor-air-quality" className="block" onClick={closeMenu}>Indoor Air Quality</Link>
            <Link to="/services/smart-thermostats" className="block" onClick={closeMenu}>Smart Thermostats</Link>
            <Link to="/services/dryer-vent-cleaning" className="block" onClick={closeMenu}>Dryer Vent Cleaning</Link>
            <Link to="/blog" className="block" onClick={closeMenu}>HVAC Blog</Link>
          </div>

          <Link to="/faqs" className="block" onClick={closeMenu}>FAQs</Link>
          <Link to="/financing" className="block" onClick={closeMenu}>Financing</Link>
          <Link to="/testimonials" className="block" onClick={closeMenu}>Testimonials</Link>
          <Link to="/contact" className="block" onClick={closeMenu}>Contact</Link>

          <VoiceSearch onResult={handleVoiceResult} />

          {/* Social Icons */}
          <div className="flex justify-start space-x-4 pt-3">
            <a href="https://www.facebook.com/people/AMW-Cooling-Heating-LLC/61569862892114/" target="_blank" rel="noopener noreferrer" className="text-blue-600" aria-label="AMW Facebook page">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/amwairconditioning/" target="_blank" rel="noopener noreferrer" className="text-pink-700" aria-label="AMW Instagram profile">
              <FaInstagram />
            </a>
            <a href="https://www.google.com/search?q=AMW+Cooling+%26+Heating+Reviews" target="_blank" rel="noopener noreferrer" aria-label="AMW Google reviews">
              <FcGoogle />
            </a>
            <a href="https://www.yelp.com/biz/amw-cooling-and-heating-conroe" target="_blank" rel="noopener noreferrer" className="text-red-700" aria-label="AMW Yelp listing">
              <FaYelp />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
