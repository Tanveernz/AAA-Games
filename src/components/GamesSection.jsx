import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

const GamesSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Games Data
  const gamesData = [
    // PS5 Exclusives
    {
      id: 1,
      title: "Marvel's Spider-Man 2",
      developer: "Insomniac Games",
      release: "2023",
      genre: "Action-Adventure",
      rating: 4.8,
      platforms: ["PS5"],
      image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400&h=300&fit=crop",
      featured: true,
      description: "Swing through NYC as both Peter Parker and Miles Morales"
    },
    {
      id: 2,
      title: "God of War Ragnarök",
      developer: "Santa Monica Studio",
      release: "2022",
      genre: "Action RPG",
      rating: 4.9,
      platforms: ["PS4", "PS5"],
      image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=400&h=300&fit=crop",
      featured: true,
      description: "Join Kratos and Atreus on a mythic journey"
    },
    {
      id: 3,
      title: "Demon's Souls",
      developer: "Bluepoint Games",
      release: "2020",
      genre: "Action RPG",
      rating: 4.7,
      platforms: ["PS5"],
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      featured: false,
      description: "Brutal fantasy action RPG remake"
    },
    {
      id: 4,
      title: "Ratchet & Clank: Rift Apart",
      developer: "Insomniac Games",
      release: "2021",
      genre: "Platformer",
      rating: 4.6,
      platforms: ["PS5"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
      featured: false,
      description: "Interdimensional adventure with dynamic gameplay"
    },

    // PS4 & Cross-Platform
    {
      id: 5,
      title: "The Last of Us Part II",
      developer: "Naughty Dog",
      release: "2020",
      genre: "Action-Adventure",
      rating: 4.9,
      platforms: ["PS4"],
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=300&fit=crop",
      featured: true,
      description: "Emotional story of revenge and redemption"
    },
    {
      id: 6,
      title: "Ghost of Tsushima",
      developer: "Sucker Punch",
      release: "2020",
      genre: "Action-Adventure",
      rating: 4.8,
      platforms: ["PS4", "PS5"],
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
      featured: true,
      description: "Samurai epic in feudal Japan"
    },
    {
      id: 7,
      title: "Horizon Forbidden West",
      developer: "Guerrilla Games",
      release: "2022",
      genre: "Action RPG",
      rating: 4.7,
      platforms: ["PS4", "PS5"],
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=300&fit=crop",
      featured: false,
      description: "Explore a post-apocalyptic western America"
    },
    {
      id: 8,
      title: "Final Fantasy VII Remake",
      developer: "Square Enix",
      release: "2020",
      genre: "RPG",
      rating: 4.6,
      platforms: ["PS4", "PS5"],
      image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=400&h=300&fit=crop",
      featured: false,
      description: "Reimagined classic RPG adventure"
    },

    // Multiplatform
    {
      id: 9,
      title: "Cyberpunk 2077",
      developer: "CD Projekt Red",
      release: "2020",
      genre: "RPG",
      rating: 4.2,
      platforms: ["PS4", "PS5", "PC", "Xbox"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
      featured: false,
      description: "Open-world cyberpunk RPG"
    },
    {
      id: 10,
      title: "Elden Ring",
      developer: "FromSoftware",
      release: "2022",
      genre: "Action RPG",
      rating: 4.9,
      platforms: ["PS4", "PS5", "PC", "Xbox"],
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      featured: true,
      description: "Epic fantasy action RPG from Dark Souls creators"
    },
    {
      id: 11,
      title: "Call of Duty: Modern Warfare II",
      developer: "Infinity Ward",
      release: "2022",
      genre: "FPS",
      rating: 4.4,
      platforms: ["PS4", "PS5", "PC", "Xbox"],
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=300&fit=crop",
      featured: false,
      description: "Intense modern military shooter"
    },
    {
      id: 12,
      title: "Red Dead Redemption 2",
      developer: "Rockstar Games",
      release: "2018",
      genre: "Action-Adventure",
      rating: 4.9,
      platforms: ["PS4", "Xbox", "PC"],
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=300&fit=crop",
      featured: true,
      description: "Western epic in a vast open world"
    }
  ];

  // Filter games based on active filter and search
  const filteredGames = gamesData.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         game.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         game.genre.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeFilter === 'all') return matchesSearch;
    if (activeFilter === 'featured') return game.featured && matchesSearch;
    if (activeFilter === 'ps5') return game.platforms.includes('PS5') && matchesSearch;
    if (activeFilter === 'ps4') return game.platforms.includes('PS4') && matchesSearch;
    if (activeFilter === 'action') return game.genre.includes('Action') && matchesSearch;
    if (activeFilter === 'rpg') return game.genre.includes('RPG') && matchesSearch;
    
    return matchesSearch;
  });

  // Render star rating
  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <i 
            key={i} 
            className={`bx ${i < Math.floor(rating) ? 'bxs-star text-yellow-400' : 'bx-star text-gray-400'} text-sm`}
          ></i>
        ))}
        <span className="text-sm text-gray-400 ml-1">({rating})</span>
      </div>
    );
  };

  // Render platform icons
  const renderPlatforms = (platforms) => {
    return (
      <div className="flex gap-1">
        {platforms.map(platform => (
          <span 
            key={platform}
            className={`text-xs px-2 py-1 rounded-full ${
              platform === 'PS5' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
              platform === 'PS4' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
              'bg-gray-500/20 text-gray-400 border border-gray-500/30'
            }`}
          >
            {platform}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section id="games" className="min-h-screen py-20 px-4 lg:px-20 bg-gradient-to-b from-[#0c0c0c] to-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6">
            GAMES <span className="text-[#f7931e]">LIBRARY</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the ultimate collection of AAA titles for PlayStation
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12" data-aos="fade-up">
          {/* Search Bar */}
          <div className="flex-1">
            <div className="relative">
              <i className="bx bx-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"></i>
              <input
                type="text"
                placeholder="Search games, developers, genres..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-2xl py-4 pl-12 pr-6 text-white placeholder-gray-400 focus:outline-none focus:border-[#f7931e] transition-all duration-300"
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
            {[
              { key: 'all', label: 'All Games', icon: 'bx-game' },
              { key: 'featured', label: 'Featured', icon: 'bx-star' },
              { key: 'ps5', label: 'PS5', icon: 'bx-trophy' },
              { key: 'ps4', label: 'PS4', icon: 'bx-joystick' },
              { key: 'action', label: 'Action', icon: 'bx-run' },
              { key: 'rpg', label: 'RPG', icon: 'bx-shield' }
            ].map(filter => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-[#f7931e] border-[#f7931e] text-black shadow-lg shadow-[#f7931e]/20'
                    : 'bg-transparent border-gray-700 text-gray-300 hover:border-[#f7931e] hover:text-white'
                }`}
              >
                <i className={`bx ${filter.icon}`}></i>
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" data-aos="fade-up">
          {filteredGames.map(game => (
            <div
              key={game.id}
              className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-[#f7931e]/50 hover:transform hover:scale-105 transition-all duration-500"
            >
              {/* Game Image */}
              <div className="relative overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {game.featured && (
                  <div className="absolute top-3 left-3 bg-[#f7931e] text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  {renderPlatforms(game.platforms)}
                </div>
                <div className="absolute bottom-3 left-3">
                  {renderStars(game.rating)}
                </div>
              </div>

              {/* Game Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#f7931e] transition-colors duration-300">
                  {game.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{game.developer}</p>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {game.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <i className="bx bx-calendar"></i>
                      {game.release}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="bx bx-category"></i>
                      {game.genre}
                    </span>
                  </div>
                  
                  <button className="bg-[#f7931e] hover:bg-[#ff6b35] text-black px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform group-hover:scale-110">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredGames.length === 0 && (
          <div className="text-center py-20" data-aos="fade-up">
            <i className="bx bx-search text-6xl text-gray-400 mb-4"></i>
            <h3 className="text-2xl text-white mb-2">No games found</h3>
            <p className="text-gray-400">Try adjusting your search or filters</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default GamesSection;