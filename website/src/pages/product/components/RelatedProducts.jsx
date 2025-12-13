import React from 'react';
import { useNavigate } from 'react-router-dom';

const RelatedProducts = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    // Navigate to product detail page
    navigate(`/product/${productId}`);
  };

  return (
    <div id="related-products" className="bg-white rounded-lg p-6 md:p-8 border border-brand-brown-300">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-brown-900 mb-6">
        You May Also Like
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="group bg-brand-cream rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer border border-brand-brown-300"
            onClick={() => handleProductClick(product.id)}
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                src={product.image} 
                alt={product.name} 
              />
              {product.badge && (
                <div className="absolute top-3 right-3 bg-brand-orange text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {product.badge}
                </div>
              )}
            </div>
            <div className="p-5">
              <h3 className="text-lg font-serif text-brand-brown-900 mb-2">{product.name}</h3>
              <p className="text-brand-brown-700 text-sm mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-brand-orange">${product.price.toFixed(2)}</span>
                <button 
                  className="bg-brand-brown-900 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add to cart functionality would go here
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;