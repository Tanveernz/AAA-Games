import React, { useState, useEffect, useMemo } from 'react';
import 'boxicons/css/boxicons.min.css';

// Move games data outside component to prevent re-renders
const GAMES_DATA = [
  {
    id: 1,
    title: "Marvel's Spider-Man 2",
    developer: "Insomniac Games",
    release: "2023",
    genre: "Action-Adventure",
    rating: 4.8,
    platforms: ["PS5"],
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/4c1d483b743051fbf3d6d6a7c32b4a5c572bff757a0c97c8.jpg?w=320&h=180",
    featured: true,
  },
  {
    id: 2,
    title: "God of War Ragnarök",
    developer: "Santa Monica Studio",
    release: "2022",
    genre: "Action RPG",
    rating: 4.9,
    platforms: ["PS4", "PS5"],
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xM8cD8HdS4ATReytI6ZFreJ.jpg?w=320&h=180",
    featured: true,
  },
  {
    id: 3,
    title: "Demon's Souls",
    developer: "Bluepoint Games",
    release: "2020",
    genre: "Action RPG",
    rating: 4.7,
    platforms: ["PS5"],
    image: "https://image.api.playstation.com/vulcan/img/rnd/202011/1703/1A8wRyR2akS4RcCk9f3bB9wU.png?w=320&h=180",
    featured: false,
  },
  {
    id: 4,
    title: "The Last of Us Part II",
    developer: "Naughty Dog",
    release: "2020",
    genre: "Action-Adventure",
    rating: 4.9,
    platforms: ["PS4"],
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202010/0221/4xM8cD8HdS4ATReytI6ZFreJ.jpg?w=320&h=180",
    featured: true,
  },
  {
    id: 5,
    title: "Ghost of Tsushima",
    developer: "Sucker Punch",
    release: "2020",
    genre: "Action-Adventure",
    rating: 4.8,
    platforms: ["PS4", "PS5"],
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202010/0221/4xM8cD8HdS4ATReytI6ZFreJ.jpg?w=320&h=180",
    featured: true,
  },
  {
    id: 6,
    title: "Elden Ring",
    developer: "FromSoftware",
    release: "2022",
    genre: "Action RPG",
    rating: 4.9,
    platforms: ["PS4", "PS5", "PC", "Xbox"],
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/4xM8cD8HdS4ATReytI6ZFreJ.jpg?w=320&h=180",
    featured: true,
  }
];

// Pre-defined filter options outside component
const FILTER_OPTIONS = [
  { key: 'all', label: 'All Games', icon: 'bx-game' },
  { key: 'featured', label: 'Featured', icon: 'bx-star' },
  { key: 'ps5', label: 'PS5', icon: 'bx-trophy' },
  { key: 'ps4', label: 'PS4', icon: 'bx-joystick' },
  { key: 'action', label: 'Action', icon: 'bx-run' },
  { key: 'rpg', label: 'RPG', icon: 'bx-shield' }
];

const GamesSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Remove loading state for immediate display
  useEffect(() => {
    // Disable AOS on this section if it's causing issues
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach(el => {
      el.removeAttribute('data-aos');
    });
  }, []);

  // Ultra-simple filter function
  const filteredGames = useMemo(() => {
    if (!searchQuery.trim() && activeFilter === 'all') {
      return GAMES_DATA;
    }

    const query = searchQuery.toLowerCase().trim();
    
    return GAMES_DATA.filter(game => {
      // Search filter
      if (query && !game.title.toLowerCase().includes(query) && 
          !game.developer.toLowerCase().includes(query) && 
          !game.genre.toLowerCase().includes(query)) {
        return false;
      }

      // Category filter
      switch (activeFilter) {
        case 'featured': return game.featured;
        case 'ps5': return game.platforms.includes('PS5');
        case 'ps4': return game.platforms.includes('PS4');
        case 'action': return game.genre.includes('Action');
        case 'rpg': return game.genre.includes('RPG');
        default: return true;
      }
    });
  }, [activeFilter, searchQuery]);

  // Simple star rating component
  const StarRating = ({ rating }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <i
          key={i}
          className={`bx ${i < Math.floor(rating) ? 'bxs-star text-yellow-400' : 'bx-star text-gray-400'} text-sm`}
        />
      ))}
      <span className="text-sm text-gray-400 ml-1">({rating})</span>
    </div>
  );

  // Simple platform badges component
  const PlatformBadges = ({ platforms }) => (
    <div className="flex gap-1">
      {platforms.map(platform => (
        <span
          key={platform}
          className={`text-xs px-2 py-1 rounded-full ${
            platform === 'PS5'
              ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
              : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
          }`}
        >
          {platform}
        </span>
      ))}
    </div>
  );

  // Game Card Component - Memoized by being separate
  const GameCard = ({ game }) => (
    <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden transition-colors hover:border-[#f7931e]/50">
      <div className="relative overflow-hidden">
        <img
          src={game.image}
          alt={game.title}
          loading="lazy"
          className="w-full h-48 object-cover"
        />
        {game.featured && (
          <div className="absolute top-3 left-3 bg-[#f7931e] text-black px-2 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
        <div className="absolute top-3 right-3">
          <PlatformBadges platforms={game.platforms} />
        </div>
        <div className="absolute bottom-3 left-3">
          <StarRating rating={game.rating} />
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2">
          {game.title}
        </h3>
        <p className="text-gray-400 text-sm mb-2">{game.developer}</p>
        <div className="flex justify-between items-center text-sm text-gray-400">
          <span>{game.release}</span>
          <span>{game.genre}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="games" className="py-20 px-4 lg:px-20 bg-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - No animations */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            GAMES <span className="text-[#f7931e]">LIBRARY</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover AAA titles for PlayStation
          </p>
        </div>

        {/* Search and Filters - Simplified */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12">
          <div className="flex-1">
            <div className="relative">
              <i className="bx bx-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"></i>
              <input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-xl py-3 pl-12 pr-6 text-white placeholder-gray-400 focus:outline-none focus:border-[#f7931e]"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
            {FILTER_OPTIONS.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm ${
                  activeFilter === filter.key
                    ? 'bg-[#f7931e] border-[#f7931e] text-black'
                    : 'bg-transparent border-gray-700 text-gray-300 hover:border-[#f7931e]'
                }`}
              >
                <i className={`bx ${filter.icon}`}></i>
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Games Grid - No hover animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-20">
            <i className="bx bx-search text-6xl text-gray-400 mb-4"></i>
            <h3 className="text-2xl text-white mb-2">No games found</h3>
            <p className="text-gray-400">Try adjusting your search</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GamesSection;