import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import GamesSection from './components/GamesSection';
import GameDetailsModal from './components/GameDetailsModal';
import ReviewsPage from './components/Reviews'; // <-- ADD THIS

export default function App() {
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <main className="relative bg-black text-white overflow-hidden">
      <Header />
      <Hero />
      
      {/* ONLY ONE GamesSection - with proper props */}
      <GamesSection onSelectGame={setSelectedGame} />

      {/* Reviews section */}
      <ReviewsPage />

      {/* Game Modal */}
      {selectedGame && (
        <GameDetailsModal
          game={selectedGame}
          onClose={() => setSelectedGame(null)}
        />
      )}
    </main>
  );
}
