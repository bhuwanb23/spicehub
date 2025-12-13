import React, { useState } from 'react';

const ProductGrid = () => {
  const [sortBy, setSortBy] = useState('popularity');

  // Sample product data - in a real app this would come from an API
  const products = [
    {
      id: 1,
      name: 'Ceylon Cinnamon Sticks',
      description: 'Delicate, sweet notes perfect for desserts and warm beverages.',
      price: 8.50,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/5548d5225c-5d4fc0ded4327b455991.png',
      badge: 'Best for Baking'
    },
    {
      id: 2,
      name: 'Star Anise',
      description: 'Aromatic licorice flavor essential for pho and braised meats.',
      price: 6.75,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/3c98775e62-c111d9853a5c6bc32b93.png',
      badge: 'Ideal for Broths'
    },
    {
      id: 3,
      name: 'Green Cardamom Pods',
      description: 'Intensely aromatic with a complex, slightly sweet and spicy taste.',
      price: 12.00,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/e28f20b6e9-4cd51c3529e318a13655.png',
      badge: 'Perfect for Chai'
    },
    {
      id: 4,
      name: 'Whole Cloves',
      description: 'Pungent and warming, a staple in savory dishes and spice blends.',
      price: 7.25,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/51c673d0b9-498c5f1f8ef2ee93f505.png',
      badge: 'Best for Curries'
    },
    {
      id: 5,
      name: 'Tellicherry Peppercorns',
      description: 'Bold, pungent, and fruity. The king of spices for any dish.',
      price: 9.00,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/a574adddeb-c889730ed53491605710.png',
      badge: 'Kitchen Essential'
    },
    {
      id: 6,
      name: 'Turkish Bay Leaves',
      description: 'Subtle, herbal aroma that deepens the flavor of stews and soups.',
      price: 5.50,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/380597d0ca-34ffee3a84ceb5ed9f9d.png',
      badge: 'Ideal for Slow Cooking'
    },
    {
      id: 7,
      name: 'Whole Cumin Seeds',
      description: 'Robust, earthy flavor essential for Mexican, Indian, and Middle Eastern cuisines.',
      price: 6.00,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/6dd179ee5b-66c289d9a21c86e09d9e.png',
      badge: 'Earthy & Warm'
    },
    {
      id: 8,
      name: 'Whole Nutmeg',
      description: 'Grate fresh for a warm, nutty kick in cream sauces and baked goods.',
      price: 10.50,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/5127c368bb-2b9c23dd03cab3703864.png',
      badge: 'Sweet & Spicy'
    }
  ];

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
              <option value="popularity">Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              id={`product-card-${product.id}`}
              className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
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
                  <button className="bg-brand-orange text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-opacity-90 transition-colors">
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