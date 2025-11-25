import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

interface Review {
  id: number;
  game: string;
  gameImage: string;
  rating: number;
  author: string;
  date: string;
  platform: string;
  playtime: string;
  title: string;
  content: string;
  likes: number;
  helpful: number;
  pros: string[];
  cons: string[];
  verified: boolean;
}

const ReviewsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [expandedReview, setExpandedReview] = useState<number | null>(null);

  // Sample reviews data
  const reviewsData: Review[] = [
    {
      id: 1,
      game: "Marvel's Spider-Man 2",
      gameImage:
        "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/4c1d483b743051fbf3d6d6a7c32b4a5c572bff757a0c97c8.jpg?w=200&h=300",
      rating: 5,
      author: 'Peter Parker',
      date: '2023-10-20',
      platform: 'PS5',
      playtime: '35 hours',
      title: 'The Ultimate Spider-Man Experience',
      content:
        "Insomniac has outdone themselves with Spider-Man 2. The web-swinging mechanics are perfected, the story is emotionally gripping, and the addition of both Peter and Miles creates an incredible dynamic. The graphics are stunning, especially during sunset swings through Manhattan.",
      likes: 1247,
      helpful: 89,
      pros: ['Amazing web-swinging', 'Great story', 'Dual protagonists'],
      cons: ['Some side missions feel repetitive'],
      verified: true,
    },
    {
      id: 2,
      game: 'God of War Ragnarök',
      gameImage:
        'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xM8cD8HdS4ATReytI6ZFreJ.jpg?w=200&h=300',
      rating: 5,
      author: 'Kratos Fan',
      date: '2022-11-09',
      platform: 'PS5',
      playtime: '50 hours',
      title: 'A Masterpiece in Storytelling',
      content:
        "Santa Monica Studio delivers another incredible chapter in Kratos' journey. The character development, combat improvements, and emotional depth make this one of the best games of this generation. The relationship between Kratos and Atreus evolves in beautiful ways.",
      likes: 892,
      helpful: 76,
      pros: ['Emotional story', 'Improved combat', 'Beautiful visuals'],
      cons: ['Pacing issues in middle'],
      verified: true,
    },
    {
      id: 3,
      game: 'Elden Ring',
      gameImage:
        'https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/4xM8cD8HdS4ATReytI6ZFreJ.jpg?w=200&h=300',
      rating: 4,
      author: 'Souls Veteran',
      date: '2022-02-25',
      platform: 'PS5',
      playtime: '120 hours',
      title: "FromSoftware's Magnum Opus",
      content:
        "Elden Ring takes everything great about Souls games and expands it into a massive open world. The exploration is rewarding, combat is tight, and the world-building is incredible. While challenging, it's the most accessible FromSoftware game to date.",
      likes: 1567,
      helpful: 134,
      pros: ['Massive world', 'Great combat', 'Rewarding exploration'],
      cons: ['Performance issues on launch', 'Can be overwhelming'],
      verified: false,
    },
    {
      id: 4,
      game: 'Ghost of Tsushima',
      gameImage:
        'https://image.api.playstation.com/vulcan/ap/rnd/202010/0221/4xM8cD8HdS4ATReytI6ZFreJ.jpg?w=200&h=300',
      rating: 5,
      author: 'Samurai Enthusiast',
      date: '2020-07-17',
      platform: 'PS4',
      playtime: '60 hours',
      title: 'Beautiful Samurai Epic',
      content:
        "Sucker Punch created one of the most visually stunning games I've ever played. The combat is satisfying, the story is compelling, and the world feels alive. The attention to Japanese culture and aesthetics is remarkable.",
      likes: 734,
      helpful: 67,
      pros: ['Stunning visuals', 'Satisfying combat', 'Great story'],
      cons: ['Some repetitive activities'],
      verified: true,
    },
  ];

  // Filtering logic
  const filteredReviews = reviewsData.filter((review) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === '5-star') return review.rating === 5;
    if (activeFilter === '4-star') return review.rating === 4;
    if (activeFilter === 'verified') return review.verified;
    return true;
  });

  // Render stars
  const renderStars = (rating: number) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <i
          key={i}
          className={`bx ${
            i < rating ? 'bxs-star text-yellow-400' : 'bx-star text-gray-400'
          } text-lg`}
        ></i>
      ))}
    </div>
  );

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  return (
    <section
      id="reviews"
      className="min-h-screen py-20 px-4 lg:px-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6">
            GAME <span className="text-[#f7931e]">REVIEWS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Honest reviews from the gaming community
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-700">
            <div className="text-3xl font-bold text-white mb-2">
              {reviewsData.length}
            </div>
            <div className="text-gray-400">Total Reviews</div>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-700">
            <div className="text-3xl font-bold text-white mb-2">
              {(
                reviewsData.reduce((acc, r) => acc + r.rating, 0) /
                reviewsData.length
              ).toFixed(1)}
            </div>
            <div className="text-gray-400">Average Rating</div>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-700">
            <div className="text-3xl font-bold text-white mb-2">
              {reviewsData.filter((r) => r.verified).length}
            </div>
            <div className="text-gray-400">Verified Reviews</div>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-700">
            <div className="text-3xl font-bold text-white mb-2">
              {reviewsData.filter((r) => r.rating >= 4).length}
            </div>
            <div className="text-gray-400">Positive Reviews</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {[
            { key: 'all', label: 'All Reviews', icon: 'bx-list-ul' },
            { key: '5-star', label: '5 Stars', icon: 'bx-star' },
            { key: '4-star', label: '4 Stars', icon: 'bx-star' },
            { key: 'verified', label: 'Verified', icon: 'bx-check-shield' },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                activeFilter === f.key
                  ? 'bg-[#f7931e] border-[#f7931e] text-black shadow-lg shadow-[#f7931e]/20'
                  : 'bg-transparent border-gray-700 text-gray-300 hover:border-[#f7931e] hover:text-white'
              }`}
            >
              <i className={`bx ${f.icon}`}></i>
              {f.label}
            </button>
          ))}
        </div>

        {/* Reviews */}
        <div className="space-y-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Game image */}
                  <div className="flex-shrink-0">
                    <img
                      src={review.gameImage}
                      alt={review.game}
                      className="w-32 h-40 object-cover rounded-xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {review.game}
                        </h3>
                        <p className="text-gray-400 text-sm">{review.title}</p>
                      </div>

                      <div className="flex items-center gap-2 mt-2 sm:mt-0">
                        {renderStars(review.rating)}
                        {review.verified && (
                          <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs border border-green-500/30">
                            Verified
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <i className="bx bx-user"></i>
                        {review.author}
                      </span>

                      <span className="flex items-center gap-1">
                        <i className="bx bx-calendar"></i>
                        {formatDate(review.date)}
                      </span>

                      <span className="flex items-center gap-1">
                        <i className="bx bx-game"></i>
                        {review.platform}
                      </span>

                      <span className="flex items-center gap-1">
                        <i className="bx bx-time"></i>
                        {review.playtime}
                      </span>
                    </div>

                    {/* Content text */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {review.content}
                    </p>
                  </div>
                </div>

                {/* Pros & Cons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                      <i className="bx bx-plus-circle"></i>
                      Pros
                    </h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {review.pros.map((pro, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <i className="bx bx-check text-green-400"></i>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                      <i className="bx bx-minus-circle"></i>
                      Cons
                    </h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {review.cons.map((con, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <i className="bx bx-x text-red-400"></i>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-700">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <button className="flex items-center gap-1 hover:text-white transition-colors">
                      <i className="bx bx-like"></i>
                      Helpful ({review.helpful})
                    </button>

                    <button className="flex items-center gap-1 hover:text-white transition-colors">
                      <i className="bx bx-comment"></i>
                      Comment
                    </button>
                  </div>

                  <div className="text-sm text-gray-400">
                    {review.likes.toLocaleString()} likes
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Share Your Gaming Experience
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Help other gamers make informed decisions by writing honest
              reviews of the games you've played.
            </p>

            <button className="bg-[#f7931e] hover:bg-[#ff6b35] text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Write a Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsPage;
