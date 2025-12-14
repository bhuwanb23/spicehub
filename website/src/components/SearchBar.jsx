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
            {!isSearchOpen ? (
                <button 
                    onClick={() => setIsSearchOpen(true)}
                    className="search-toggle text-brand-brown-700 hover:text-brand-orange transition-colors duration-300"
                    aria-label="Open search"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>
                </button>
            ) : (
                <form onSubmit={handleSearchSubmit} className="search-expanded flex items-center">
                    <div className="search-input-wrapper relative">
                        <input
                            ref={searchInputRef}
                            type="text"
                            value={searchQuery}
                            onChange={handleSearch}
                            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                            onFocus={() => searchQuery && setShowSuggestions(true)}
                            placeholder="Search products..."
                            className="search-input w-48 md:w-64 px-4 py-2 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-brand-orange bg-white transition-all duration-300 shadow-sm"
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
                    <button 
                        type="button"
                        onClick={() => {
                            setIsSearchOpen(false);
                            setShowSuggestions(false);
                            setSearchQuery('');
                        }}
                        className="search-close ml-2 text-brand-brown-700 hover:text-brand-orange transition-colors duration-300"
                        aria-label="Close search"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 320 512">
                            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
                        </svg>
                    </button>
                </form>
            )}

            {/* Search Suggestions Dropdown */}
            {showSuggestions && searchResults.length > 0 && (
                <div className="search-suggestions absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-brand-brown-200 z-50 animate-fadeIn">
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
                
                /* Smooth width transition for search input */
                .search-input {
                    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }
                
                /* Container to prevent layout shift */
                .search-container {
                    width: 20px; /* Width of the search icon */
                    height: 20px; /* Height of the search icon */
                }
                
                .search-expanded {
                    position: absolute;
                    right: 0;
                    z-index: 100;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-radius: 30px;
                    padding: 5px 10px 5px 15px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    animation: expand 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
                }
                
                @keyframes expand {
                    from {
                        width: 40px;
                        opacity: 0;
                    }
                    to {
                        width: 300px;
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
};

export default SearchBar;