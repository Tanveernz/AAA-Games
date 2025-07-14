import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <main className="relative flex flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] overflow-hidden px-4 lg:px-20">
      
      {/* Left Content */}
      <div  data-aos="fade-right" className="z-10 max-w-xl mt-24 lg:mt-0">

        {/* Tag Box */}
        <div className="relative w-full sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full text-white px-4 mb-6">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-2 text-sm font-medium">
            <i className="bx bx-confused text-lg"></i>
            INTRODUCING
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-wider mb-6 leading-tight">
          EMAIL <br /> DEV
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-md mb-8">
          The ultimate platform for gamers to explore, connect, and play.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-[#2a2a2a] py-3 px-8 rounded-full text-sm sm:text-lg font-semibold tracking-wider bg-gray-300 text-black hover:text-white hover:bg-[#1a1a1a] transition-all duration-300"
          >
            <i className="bx bx-rocket text-xl"></i>
            Get Started
          </a>

          <a
            href="#"
            className="inline-flex items-center gap-2 border border-[#2a2a2a] py-3 px-8 rounded-full text-sm sm:text-lg font-semibold tracking-wider bg-gray-300 text-black hover:text-white hover:bg-[#1a1a1a] transition-all duration-300"
          >
            <i className="bx bx-info-circle text-xl"></i>
            Learn More
          </a>
        </div>
      </div>

      {/* Right: Spline Animation */}
      <div data-aos="zoom-out-left" className="absolute lg:static top-[-10%] lg:top-0 left-0 lg:left-auto w-full lg:w-[50%] h-[400px] lg:h-full">
        <Spline scene="https://prod.spline.design/KMWHPT4wRs0SVVkZ/scene.splinecode" />
      </div>
    </main>
  );
};

export default Hero;
