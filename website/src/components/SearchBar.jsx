import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { GLOBAL_PRODUCTS } from '../constants/products';

const SearchBar = () => {
    const navigate = useNavigate();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchInputRef = useRef(null);
    const searchContainerRef = useRef(null);

    // Handle search functionality
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        
        if (query.length > 0) {
            const filteredProducts = GLOBAL_PRODUCTS.filter(product => 
                product.name.toLowerCase().includes(query)
            ).slice(0, 5); // Limit to 5 suggestions
            
            setSearchResults(filteredProducts);
            setShowSuggestions(true);
        } else {
            setSearchResults([]);
            setShowSuggestions(false);
        }
    };

    // Handle search submission
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Navigate to search results page
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
            setIsSearchOpen(false);
            setShowSuggestions(false);
        }
    };

    // Handle suggestion click
    const handleSuggestionClick = (productId) => {
        navigate(`/product/${productId}`);
        setIsSearchOpen(false);
        setShowSuggestions(false);
        setSearchQuery('');
    };

    // Close search when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
                setIsSearchOpen(false);
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Focus search input when opened
    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            setTimeout(() => {
                searchInputRef.current.focus();
            }, 100);
        }
    }, [isSearchOpen]);

    return (
        <div ref={searchContainerRef} className="search-container relative flex items-center">
            {/* Always show search bar - removing the toggle behavior for better responsiveness */}
            <form onSubmit={handleSearchSubmit} className="flex items-center w-full max-w-md">
                <div className="search-input-wrapper relative flex-grow">
                    <input
                        ref={searchInputRef}
                        type="text"
                        value={searchQuery}
                        onChange={handleSearch}
                        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                        onFocus={() => searchQuery && setShowSuggestions(true)}
                        placeholder="Search products..."
                        className="search-input w-full px-4 py-2 pr-10 rounded-full border border-brand-tan focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange bg-white transition-all duration-300 shadow-sm"
                    />
                    <button 
                        type="submit"
                        className="search-submit absolute right-3 top-1/2 transform -translate-y-1/2 text-brand-brown-400 hover:text-brand-orange transition-colors duration-300"
                        aria-label="Submit search"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512">
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                        </svg>
                    </button>
                </div>
            </form>

            {/* Search Suggestions Dropdown */}
            {showSuggestions && searchResults.length > 0 && (
                <div className="search-suggestions absolute right-0 mt-2 w-full bg-white rounded-lg shadow-lg border border-brand-brown-200 z-50 animate-fadeIn">
                    <div className="py-2">
                        {searchResults.map((product) => (
                            <button
                                key={product.id}
                                onClick={() => handleSuggestionClick(product.id)}
                                className="flex items-center w-full px-4 py-3 hover:bg-brand-cream transition-colors duration-200 text-left"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-md overflow-hidden">
                                    <img 
                                        src={product.images && product.images[0] ? product.images[0].src : ''} 
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-brand-brown-700 truncate">{product.name}</p>
                                    <p className="text-xs text-brand-brown-500">${product.price.toFixed(2)}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Animation styles */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default SearchBar;