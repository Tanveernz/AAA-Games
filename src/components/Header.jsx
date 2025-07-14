import React from 'react';
import 'boxicons/css/boxicons.min.css';

const Header = () => {
  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
  };

  return (
    <header className='flex justify-between items-center py-4 px-4 lg:px-20 relative z-50'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-light m-0'>
        MCODE
      </h1>

      {/* Desktop Navigation */}
      <nav className='hidden md:flex items-center gap-12'>
        <a
          href="#"
          className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          Home
        </a>
        <a
          href="#"
          className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1200"
        >
          Games
        </a>
        <a
          href="#"
          className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1400"
        >
          About
        </a>
        <a
          href="#"
          className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1600"
        >
          Contact
        </a>
      </nav>

      {/* Desktop Button */}
      <button className='hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50'>
        Sign Up / Sign In
      </button>

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMobileMenu}
        className='md:hidden text-3xl p-2 z-50'
        aria-label="Toggle mobile menu"
      >
        <i className='bx bx-menu-alt-left'></i>
      </button>

      {/* Mobile Navigation */}
      <div
        id='mobileMenu'
        className='hidden fixed top-0 left-0 right-0 bottom-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md'
      >
        <nav className='flex flex-col gap-6 items-center mt-20'>
          <a href="#" className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'>Home</a>
          <a href="#" className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'>Games</a>
          <a href="#" className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'>About</a>
          <a href="#" className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
