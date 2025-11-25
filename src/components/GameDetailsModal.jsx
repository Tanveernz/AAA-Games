import React from 'react';

const GameDetailsModal = ({ game, isOpen, onClose }) => {
  if (!isOpen || !game) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70"
          >
            <i className="bx bx-x text-2xl"></i>
          </button>
        </div>
        
        <div className="p-6">
          <h2 className="text-3xl font-bold text-white mb-2">{game.title}</h2>
          <p className="text-gray-400 mb-4">{game.developer}</p>
          <p className="text-gray-300 mb-6">{game.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="text-gray-400 text-sm">RELEASE DATE</h4>
              <p className="text-white">{game.release}</p>
            </div>
            <div>
              <h4 className="text-gray-400 text-sm">GENRE</h4>
              <p className="text-white">{game.genre}</p>
            </div>
            <div>
              <h4 className="text-gray-400 text-sm">RATING</h4>
              <p className="text-white">{game.rating}/5</p>
            </div>
            <div>
              <h4 className="text-gray-400 text-sm">PLATFORMS</h4>
              <p className="text-white">{game.platforms.join(', ')}</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <button className="flex-1 bg-[#f7931e] hover:bg-[#ff6b35] text-black py-3 rounded-xl font-semibold transition-colors">
              Add to Wishlist
            </button>
            <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-xl font-semibold transition-colors">
              View Trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetailsModal;