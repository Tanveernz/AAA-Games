import React, { useState, useEffect } from 'react';
import 'boxicons/css/boxicons.min.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 flex justify-between items-center py-4 px-4 lg:px-20 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-lg border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      
      {/* Clean Logo */}
      <div className="flex items-center">
        <h1 className='text-2xl md:text-3xl font-bold text-white tracking-wide'>
          <span className="text-[#f7931e]">AAA</span>HUB
        </h1>
      </div>

      {/* Desktop Navigation */}
      <nav className='hidden md:flex items-center gap-8 lg:gap-12'>
        {[
          { name: 'Home', delay: 1000 },
          { name: 'Games', delay: 1200 },
          { name: 'Reviews', delay: 1400 },
          { name: 'News', delay: 1600 },
          { name: 'Community', delay: 1800 }
        ].map((item, index) => (
          <a
            key={item.name}
            href={`#${item.name.toLowerCase()}`}
            className='relative text-sm lg:text-base tracking-wider text-gray-300 hover:text-white transition-all duration-300 group py-2'
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration={item.delay}
          >
            {item.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f7931e] group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
      </nav>

      {/* Desktop CTA Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <button className='flex items-center gap-2 bg-transparent border border-gray-600 text-white py-2 px-6 rounded-full font-medium transition-all duration-300 hover:border-[#f7931e] hover:bg-[#f7931e]/10 cursor-pointer'>
          <i className='bx bx-search text-lg'></i>
          Search
        </button>
        
        <button className='flex items-center gap-2 bg-gradient-to-r from-[#f7931e] to-[#ff6b35] text-black py-2 px-6 rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(247,147,30,0.4)] hover:scale-105 cursor-pointer'>
          <i className='bx bx-game text-lg'></i>
          Join Now
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMobileMenu}
        className={`md:hidden relative w-10 h-10 flex flex-col justify-center items-center z-50 transition-all duration-300 ${
          isMobileMenuOpen ? 'text-[#f7931e]' : 'text-white'
        }`}
        aria-label="Toggle mobile menu"
      >
        <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${
          isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
        }`}></span>
        <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
        }`}></span>
        <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${
          isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
        }`}></span>
      </button>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-80 bg-gradient-to-b from-black to-gray-900 border-l border-gray-800/50 backdrop-blur-lg transform transition-transform duration-500 ease-in-out z-40 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="p-6 border-b border-gray-800/50">
          <div className="flex items-center gap-3">
            <span className="text-white font-semibold">Menu</span>
          </div>
        </div>

        {/* Mobile Menu Content */}
        <nav className='flex flex-col p-6'>
          {['Home', 'Games', 'Reviews', 'News', 'Community', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMobileMenu}
              className='group flex items-center gap-4 py-4 text-gray-300 hover:text-white border-b border-gray-800/50 hover:border-[#f7931e]/30 transition-all duration-300'
            >
              <i className='bx bx-chevron-right text-[#f7931e] group-hover:translate-x-1 transition-transform duration-300'></i>
              <span className="text-base tracking-wider">{item}</span>
            </a>
          ))}
          
          {/* Mobile CTA Buttons */}
          <div className="flex flex-col gap-3 mt-8 pt-6 border-t border-gray-800/50">
            <button className='w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#f7931e] to-[#ff6b35] text-black py-3 rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(247,147,30,0.4)] cursor-pointer'>
              <i className='bx bx-game'></i>
              Join Community
            </button>
            <button className='w-full flex items-center justify-center gap-2 border border-gray-600 text-white py-3 rounded-full font-medium transition-all duration-300 hover:border-[#f7931e] hover:bg-[#f7931e]/10 cursor-pointer'>
              <i className='bx bx-log-in'></i>
              Sign In
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-8 pt-6 border-t border-gray-800/50">
            {['bxl-twitter', 'bxl-discord', 'bxl-youtube', 'bxl-steam'].map((icon) => (
              <a
                key={icon}
                href="#"
                className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-[#f7931e] hover:border-[#f7931e] transition-all duration-300"
              >
                <i className={`bx ${icon} text-lg`}></i>
              </a>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile Overlay Background */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30 md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;