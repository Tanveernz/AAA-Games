import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';
import { useState } from 'react';

const Hero = () => {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  return (
    <main className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen overflow-hidden px-4 lg:px-20 bg-gradient-to-br from-black via-[#0c0c0c] to-[#1a1a1a]">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-0"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
      
      {/* Left Content */}
      <div 
        data-aos="fade-right" 
        data-aos-delay="200"
        className="z-10 max-w-2xl mt-32 lg:mt-0 relative"
      >
        
        {/* Tag Box - Improved */}
        <div className="relative w-fit h-12 bg-gradient-to-r from-[#ff6b35] to-[#f7931e] rounded-full text-white px-6 mb-8 group hover:shadow-[0_0_30px_rgba(247,147,30,0.3)] transition-all duration-500">
          <div className="absolute inset-[2px] bg-black rounded-full flex items-center justify-center gap-3 text-sm font-medium tracking-wider">
            <i className="bx bx-game text-xl text-[#f7931e]"></i>
            WELCOME TO AAA GAMES
          </div>
        </div>

        {/* Heading - More Gaming Themed */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          AAA <span className="text-[#f7931e]">GAMES</span> 
          <br />
          <span className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-[0.2em]">
            HUB
          </span>
        </h1>

        {/* Description - More Specific */}
        <p className="text-lg sm:text-xl tracking-wide text-gray-300 max-w-lg mb-10 leading-relaxed">
          Discover the world's most epic AAA titles. Track your collection, 
          explore new releases, and join the ultimate gaming community.
        </p>

        {/* Stats */}
        <div className="flex gap-8 mb-10">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-sm text-gray-400">Games</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">50K+</div>
            <div className="text-sm text-gray-400">Gamers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">2024</div>
            <div className="text-sm text-gray-400">Latest</div>
          </div>
        </div>

        {/* CTA Buttons - Improved */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#games"
            className="group inline-flex items-center gap-3 border-2 border-[#f7931e] py-4 px-10 rounded-full text-lg font-semibold tracking-wider bg-gradient-to-r from-[#f7931e] to-[#ff6b35] text-black hover:shadow-[0_0_30px_rgba(247,147,30,0.5)] hover:scale-105 transition-all duration-300"
          >
            <i className="bx bx-play-circle text-2xl group-hover:animate-pulse"></i>
            Explore Games
          </a>

          <a
            href="#about"
            className="group inline-flex items-center gap-3 border-2 border-gray-600 py-4 px-10 rounded-full text-lg font-semibold tracking-wider bg-transparent text-white hover:border-white hover:bg-white/5 hover:scale-105 transition-all duration-300"
          >
            <i className="bx bx-trophy text-2xl"></i>
            Top Rated
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute -bottom-20 left-0 hidden lg:flex items-center gap-3 text-gray-400">
          <div className="w-px h-12 bg-gradient-to-b from-[#f7931e] to-transparent"></div>
          <span className="text-sm tracking-wider rotate-90 origin-left translate-x-2">SCROLL TO EXPLORE</span>
        </div>
      </div>

      {/* Spline Section - Improved */}
      <div 
        data-aos="zoom-out-left" 
        data-aos-delay="500"
        className="relative z-10 w-full lg:w-[45%] h-[500px] lg:h-screen mt-10 lg:mt-0"
      >
        {/* Loading State */}
        {!isSplineLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-[#f7931e] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {/* Spline with Overlay */}
        <div className={`relative w-full h-full transition-opacity duration-1000 ${isSplineLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <Spline 
            scene="https://prod.spline.design/KMWHPT4wRs0SVVkZ/scene.splinecode"
            onLoad={() => setIsSplineLoaded(true)}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 right-10 hidden xl:block">
          <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 animate-float">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm">Live Gaming Stats</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="absolute bottom-8 left-8 hidden lg:flex flex-col gap-4 z-10">
        {['bxl-twitter', 'bxl-discord', 'bxl-youtube', 'bxl-steam'].map((icon) => (
          <a
            key={icon}
            href="#"
            className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-[#f7931e] hover:border-[#f7931e] hover:scale-110 transition-all duration-300"
          >
            <i className={`bx ${icon} text-xl`}></i>
          </a>
        ))}
      </div>
    </main>
  );
};

export default Hero;