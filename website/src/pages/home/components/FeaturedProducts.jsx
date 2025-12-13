import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FEATURED_PRODUCTS } from '../constants';

const FeaturedProducts = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section id="featured-section" className="py-24 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-brand-brown-900">Explore Our Collection</h2>
          <p className="mt-4 text-brand-brown-700 max-w-2xl mx-auto">
            From fiery whole chillies to fragrant ground masalas, discover the perfect ingredient for your next culinary creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_PRODUCTS.map((product) => (
            <div 
              key={product.id}
              id={`product-card-${product.id}`}
              className="group bg-white rounded-lg shadow-sm overflow-hidden border border-brand-brown-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={product.image}
                  alt={product.alt}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl font-bold text-brand-brown-900">{product.name}</h3>
                <p className="text-brand-brown-500 mt-2">{product.description}</p>
                <p className="text-lg font-bold text-brand-green-700 mt-4">{product.price}</p>
                <button 
                  className="mt-4 w-full bg-brand-brown-700 text-white py-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add to cart functionality would go here
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;