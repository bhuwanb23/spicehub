import React, { useState } from 'react';

const ProductDetails = ({ product }) => {
  const [selectedWeight, setSelectedWeight] = useState(
    product.weightOptions.find(option => option.selected)?.id || product.weightOptions[0]?.id
  );
  const [selectedGrind, setSelectedGrind] = useState(
    product.grindOptions.find(option => option.selected)?.id || product.grindOptions[0]?.id
  );
  const [quantity, setQuantity] = useState(1);

  const handleWeightChange = (weightId) => {
    setSelectedWeight(weightId);
  };

  const handleGrindChange = (grindId) => {
    setSelectedGrind(grindId);
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  // Render star ratings
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <div className="flex text-brand-orange">
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
    <div id="product-details" className="flex flex-col space-y-6">
      <h1 className="text-4xl lg:text-5xl font-serif font-bold text-brand-brown-900">{product.name}</h1>
      
      <div className="flex items-center space-x-2">
        {renderRating(product.rating)}
        <span className="text-sm text-brand-brown-700">({product.reviewCount} reviews)</span>
      </div>
      
      <p className="text-2xl lg:text-3xl font-serif text-brand-orange">${product.price.toFixed(2)}</p>
      
      <p className="text-brand-brown-700 leading-relaxed">{product.description}</p>

      <div className="space-y-4 pt-4">
        {/* Weight Options */}
        <div>
          <label className="text-sm font-bold text-brand-brown-900 tracking-wider">WEIGHT</label>
          <div className="flex space-x-3 mt-2">
            {product.weightOptions.map((option) => (
              <button
                key={option.id}
                className={`px-4 py-2 border text-sm font-semibold rounded-full ${
                  selectedWeight === option.id
                    ? 'border-brand-brown-900 bg-brand-brown-900 text-white'
                    : 'border-brand-brown-900 text-brand-brown-900 bg-transparent'
                }`}
                onClick={() => handleWeightChange(option.id)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grind Options */}
        <div>
          <label className="text-sm font-bold text-brand-brown-900 tracking-wider">GRIND</label>
          <div className="flex space-x-3 mt-2">
            {product.grindOptions.map((option) => (
              <button
                key={option.id}
                className={`px-4 py-2 border text-sm font-semibold rounded-full ${
                  selectedGrind === option.id
                    ? 'border-brand-brown-900 bg-brand-brown-900 text-white'
                    : 'border-brand-brown-900 text-brand-brown-900 bg-transparent'
                }`}
                onClick={() => handleGrindChange(option.id)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4 pt-4">
        <div className="flex items-center border border-brand-brown-300 rounded-full">
          <button 
            className="px-4 py-2 text-brand-brown-900"
            onClick={decrementQuantity}
          >
            <i className="fas fa-minus"></i>
          </button>
          <span className="px-4 py-2 text-lg font-bold">{quantity}</span>
          <button 
            className="px-4 py-2 text-brand-brown-900"
            onClick={incrementQuantity}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <button className="flex-1 bg-brand-brown-900 text-white py-3 rounded-full font-bold tracking-wider hover:bg-brand-brown-700 transition-colors shadow-md">
          ADD TO CART
        </button>
      </div>

      <div className="text-sm text-green-600 font-semibold flex items-center pt-2">
        <i className="mr-2 fas fa-circle-check"></i>
        <span>{product.inStock ? 'In Stock & Ready to Ship' : 'Out of Stock'}</span>
      </div>

      {product.trustBadges && (
        <div id="trust-badges" className="flex items-center space-x-6 pt-4 border-t border-brand-brown-300">
          {product.trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center text-sm text-brand-brown-900">
              <i className={`mr-2 text-brand-orange fas fa-${badge.icon}`}></i>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;