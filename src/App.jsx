import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []); // <-- Ensure AOS only initializes once

  return (
    <main className="relative bg-black text-white overflow-hidden">
      {/* Background Gradient Image */}
      <img
        className="absolute top-0 right-0 opacity-60 -z-10"
        src="/gradient.png"
        alt="Gradient background"
      />

      {/* Orange Glow Div */}
      <div
        className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"
      ></div>

      {/* Main Sections */}
      <Header />
      <Hero />
    </main>
  );
}
