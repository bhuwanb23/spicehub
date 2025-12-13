import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import { CATEGORY_PRODUCTS, SORT_OPTIONS } from '../constants';

const ProductGrid = () => {
  const [sortBy, setSortBy] = useState('popularity');
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <section id="product-grid-section" className="py-16 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <h2 className="text-2xl md:text-3xl font-serif text-brand-brown-700">
            Shop Our Collection
          </h2>
          <div className="flex items-center space-x-4 border border-brand-brown-300 rounded-md px-3 py-2">
            <label htmlFor="sort" className="text-sm text-brand-brown-500">Sort by:</label>
            <select 
              id="sort" 
              name="sort" 
              className="bg-transparent focus:outline-none text-sm text-brand-brown-700"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {CATEGORY_PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              id={`product-card-${product.id}`}
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
                <h3 className="text-xl font-serif text-brand-brown-700 mb-2">{product.name}</h3>
                <p className="text-brand-brown-500 text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold text-brand-orange">${product.price.toFixed(2)}</span>
                  <button 
                    className="bg-brand-orange text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-opacity-90 transition-colors"
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div id="pagination" className="flex justify-center mt-16">
          <nav className="flex items-center space-x-2">
            <button className="px-4 py-2 text-brand-brown-500 hover:text-brand-orange">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </button>
            <button className="px-4 py-2 rounded-md bg-brand-orange text-white">1</button>
            <button className="px-4 py-2 rounded-md text-brand-brown-500 hover:bg-white hover:text-brand-orange">2</button>
            <button className="px-4 py-2 rounded-md text-brand-brown-500 hover:bg-white hover:text-brand-orange">3</button>
            <span className="px-4 py-2 text-brand-brown-500">...</span>
            <button className="px-4 py-2 rounded-md text-brand-brown-500 hover:bg-white hover:text-brand-orange">8</button>
            <button className="px-4 py-2 text-brand-brown-500 hover:text-brand-orange">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;