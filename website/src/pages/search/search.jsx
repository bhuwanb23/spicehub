import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GLOBAL_PRODUCTS } from '../../constants/products';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  // Extract search query from URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('q') || '';
    setSearchTerm(query);
    
    // Filter products based on search term
    if (query) {
      const filteredProducts = GLOBAL_PRODUCTS.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredProducts);
    } else {
      setSearchResults([]);
    }
  }, [location.search]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <main id="main-content" className="container mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-brand-brown mb-4">
          Search Results for "{searchTerm}"
        </h1>
        <p className="text-brand-brown-700">
          Found {searchResults.length} {searchResults.length === 1 ? 'product' : 'products'}
        </p>
      </div>
      
      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {searchResults.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg shadow-sm border border-brand-tan/30 overflow-hidden transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out-cubic flex flex-col cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  src={product.images && product.images[0] ? product.images[0].src : ''}
                  alt={product.alt || product.name}
                />
                <button
                  className="absolute bottom-3 right-3 bg-brand-brown/80 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bottom-4 transition-all duration-300 hover:bg-brand-rust"
                >
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
                  <p className="text-lg font-bold text-brand-rust">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-2 text-lg font-medium text-brand-brown-700">No products found</h3>
          <p className="mt-1 text-brand-brown-500">
            Try adjusting your search term to find what you're looking for.
          </p>
        </div>
      )}
    </main>
  );
};

export default Search;