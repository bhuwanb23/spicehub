import React from 'react';
import { CUSTOMER_REVIEWS } from '../../../constants/siteData';

const CustomerReviews = () => {
  // Render star ratings for reviews
  const renderReviewRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <div className="flex text-brand-orange text-sm">
        {[...Array(fullStars)].map((_, i) => (
          <i key={`full-${i}`} className="fas fa-star"></i>
        ))}
        {hasHalfStar && <i className="fas fa-star-half-stroke"></i>}
        {[...Array(emptyStars)].map((_, i) => (
          <i key={`empty-${i}`} className="far fa-star"></i>
        ))}
      </div>
    );
  };

  return (
    <div id="customer-reviews" className="bg-white rounded-lg p-6 md:p-8 border border-brand-brown-300">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-brown-900 mb-6">
        Customer Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CUSTOMER_REVIEWS.map((review) => (
          <div 
            key={review.id} 
            className="bg-brand-cream p-6 rounded-lg flex flex-col"
          >
            <div className="flex items-center mb-4">
              <img 
                src={review.avatar} 
                alt={`${review.author} avatar`} 
                className="w-12 h-12 rounded-full mr-4" 
              />
              <div>
                <p className="font-bold text-brand-brown-900">{review.author}</p>
                {renderReviewRating(review.rating)}
              </div>
            </div>
            <p className="text-brand-brown-700 flex-grow">"{review.comment}"</p>
            <p className="text-xs text-brand-brown-300 mt-4">Reviewed on: {review.date}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-transparent border border-brand-brown-900 text-brand-brown-900 py-2 px-6 rounded-full font-semibold hover:bg-brand-brown-900 hover:text-white transition-colors">
          Load More Reviews
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;