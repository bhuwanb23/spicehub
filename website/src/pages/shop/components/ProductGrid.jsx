import React, { useState } from 'react';

const ProductGrid = () => {
  const [sortBy, setSortBy] = useState('Popularity');

  const products = [
    {
      id: 1,
      name: "Smoked Paprika",
      description: "Sweet & Smoky",
      price: "$7.50",
      size: "50g",
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/c48ee98e5a-830a45fe2419b55f26d4.png",
      alt: "A premium macro shot of smoked paprika powder in a small wooden bowl, earthy tones, studio lighting",
      badge: "FRESHLY GROUND"
    },
    {
      id: 2,
      name: "Cumin Seeds",
      description: "Earthy & Aromatic",
      price: "$6.00",
      size: "50g",
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/2e57883ea9-dc2e8cb84c73f24dab74.png",
      alt: "High-quality photo of whole cumin seeds spilling from a burlap sack, rustic, warm lighting",
      badge: "ORGANIC"
    },
    {
      id: 3,
      name: "Dried Rosemary",
      description: "Piney & Fragrant",
      price: "$8.25",
      size: "40g",
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/56bff6ac7f-f5211b049fad184620e1.png",
      alt: "Artistic shot of dried rosemary sprigs on a dark slate background, dramatic lighting",
      badge: null
    },
    {
      id: 4,
      name: "Turmeric Powder",
      description: "Warm & Peppery",
      price: "$5.50",
      size: "60g",
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/3210923e1b-9ccae429ffc82d18737d.png",
      alt: "Vibrant yellow turmeric powder arranged in a pattern on a black background, minimalist, high contrast",
      badge: "FRESHLY GROUND"
    },
    {
      id: 5,
      name: "Black Peppercorns",
      description: "Pungent & Spicy",
      price: "$9.00",
      size: "50g",
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/28d6f97d20-5f6fa9fc90b05892a6c0.png",
      alt: "Close-up of whole black peppercorns in a ceramic mortar, textured, natural light",
      badge: null
    },
    {
      id: 6,
      name: "Saffron Threads",
      description: "Floral & Luxurious",
      price: "$25.00",
      size: "1g",
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/7e0b400494-969d05897f22f8fe765d.png",
      alt: "Delicate saffron threads in a small glass jar, highlighting their vibrant red color, macro photography",
      badge: "PREMIUM"
    }
  ];

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <section id="product-grid-section" className="w-full lg:w-3/4 xl:w-4/5">
      <div id="products-header" className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-serif font-bold text-brand-brown">All Products</h1>
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="text-sm">Sort by:</label>
          <select 
            id="sort" 
            name="sort"
            value={sortBy}
            onChange={handleSortChange}
            className="border border-brand-tan rounded-md px-3 py-2 bg-white focus:ring-1 focus:ring-brand-rust focus:border-brand-rust transition"
          >
            <option value="Popularity">Popularity</option>
            <option value="Newest">Newest</option>
            <option value="PriceLowHigh">Price: Low to High</option>
            <option value="PriceHighLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div id="product-grid" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {products.map((product) => (
          <div 
            key={product.id}
            id={`product-card-${product.id}`}
            className="group bg-white rounded-lg shadow-sm border border-brand-tan/30 overflow-hidden transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <div className="relative h-56 overflow-hidden">
              <img 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                src={product.image}
                alt={product.alt}
              />
              {product.badge && (
                <span className="absolute top-3 left-3 bg-brand-green text-white text-xs font-bold px-2 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
              <button className="absolute bottom-3 right-3 bg-brand-brown/80 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bottom-4 transition-all duration-300 hover:bg-brand-rust">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
              </button>
            </div>
            <div className="p-5 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-serif font-bold text-brand-brown">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-lg font-bold text-brand-rust">{product.price}</p>
                <p className="text-sm text-gray-400">/ {product.size}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav id="pagination" className="mt-12 flex justify-center" aria-label="Pagination">
        <ul className="flex items-center -space-x-px h-10 text-base">
          <li>
            <a 
              href="#" 
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="sr-only">Previous</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 320 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
              </svg>
            </a>
          </li>
          <li>
            <a 
              href="#" 
              aria-current="page"
              className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-white border border-brand-rust bg-brand-rust hover:bg-brand-rust/90"
            >
              1
            </a>
          </li>
          <li>
            <a 
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              2
            </a>
          </li>
          <li>
            <a 
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              3
            </a>
          </li>
          <li>
            <a 
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-s-0 border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="sr-only">Next</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 320 512">
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default ProductGrid;