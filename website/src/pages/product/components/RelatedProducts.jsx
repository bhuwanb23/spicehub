import React from 'react';
import { useNavigate } from 'react-router-dom';

const RelatedProducts = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    // Navigate to product detail page
    navigate(`/product/${productId}`);
  };

  return (
    <section id="related-products" className="mt-20">
      <h2 className="text-3xl font-serif font-bold text-brand-brown-900 text-center mb-10">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            onClick={() => handleProductClick(product.id)}
          >
            <div className="relative h-56 overflow-hidden">
              <img 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                src={product.image} 
                alt={product.name} 
              />
              <div className="absolute top-3 right-3 bg-brand-orange text-white text-xs font-semibold px-3 py-1 rounded-full">
                {product.badge}
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-serif text-brand-brown-900 mb-2">{product.name}</h3>
              <p className="text-brand-brown-700 text-sm mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold text-brand-orange">${product.price.toFixed(2)}</span>
                <button 
                  className="bg-brand-orange text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-opacity-90 transition-colors"
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
    </section>
  );
};

export default RelatedProducts;