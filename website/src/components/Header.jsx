import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext.jsx';
import { GLOBAL_PRODUCTS } from '../constants/products';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { totalItems: cartItemCount } = useCart();
    const { isAuthenticated, user, logout } = useAuth();
    const searchRef = useRef(null);

    const isActive = (path) => {
        return location.pathname === path;
    };
    
    // Function to scroll to top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    // Function to handle navigation with scroll to top
    const handleNavigation = (path) => {
        // If we're already on the same page, just scroll to top
        if (location.pathname === path) {
            scrollToTop();
        } else {
            // Navigate to the new page
            navigate(path);
            // Scroll to top after navigation (using setTimeout to ensure it happens after navigation)
            setTimeout(() => {
                scrollToTop();
            }, 100);
        }
    };
    
    // Handle search submission
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Hide suggestions
            setShowSuggestions(false);
            // Navigate to search results page
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };
    
    // Handle suggestion click
    const handleSuggestionClick = (productId) => {
        // Hide suggestions
        setShowSuggestions(false);
        // Clear search query
        setSearchQuery('');
        // Navigate to product page
        navigate(`/product/${productId}`);
    };
    
    // Generate search suggestions
    useEffect(() => {
        if (searchQuery.trim() !== '') {
            const filteredSuggestions = GLOBAL_PRODUCTS.filter(product => 
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.category.toLowerCase().includes(searchQuery.toLowerCase())
            ).slice(0, 5); // Limit to 5 suggestions
            
            setSuggestions(filteredSuggestions);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    }, [searchQuery]);
    
    // Close suggestions when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header id="header" className="bg-brand-cream/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <button 
                        onClick={() => {
                            handleNavigation('/');
                        }}
                        className="text-2xl font-serif font-bold text-brand-brown-700 hover:opacity-80 transition-opacity"
                    >
                        <span className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-brand-orange" fill="currentColor" viewBox="0 0 512 512">
                                <path d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.2 5.4c-25.9 5.9-50 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"/>
                            </svg>
                            Priya's Masala
                        </span>
                    </button>
                    <nav className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => handleNavigation('/')}
                            className={`${
                                isActive('/') 
                                    ? 'text-brand-orange font-bold' 
                                    : 'text-brand-brown-700 hover:text-brand-orange'
                            } transition-colors duration-300`}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => handleNavigation('/shop')}
                            className={`${
                                isActive('/shop') 
                                    ? 'text-brand-orange font-bold' 
                                    : 'text-brand-brown-700 hover:text-brand-orange'
                            } transition-colors duration-300`}
                        >
                            Shop
                        </button>
                        <button
                            onClick={() => handleNavigation('/our-story')}
                            className={`${
                                isActive('/our-story') 
                                    ? 'text-brand-orange font-bold' 
                                    : 'text-brand-brown-700 hover:text-brand-orange'
                            } transition-colors duration-300`}
                        >
                            Our Story
                        </button>
                        <button
                            onClick={() => handleNavigation('/contact')}
                            className={`${
                                isActive('/contact') 
                                    ? 'text-brand-orange font-bold' 
                                    : 'text-brand-brown-700 hover:text-brand-orange'
                            } transition-colors duration-300`}
                        >
                            Contact
                        </button>
                    </nav>
                    <div className="flex items-center space-x-5">
                        {/* Expanded Search Bar with Autocomplete */}
                        <div ref={searchRef} className="relative">
                            <form onSubmit={handleSearch} className="relative flex items-center">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search spices..."
                                    className="w-48 md:w-64 px-4 py-2 pr-10 rounded-full border border-brand-tan focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange bg-white shadow-sm transition-all duration-500 ease-in-out-cubic"
                                    onFocus={() => searchQuery.trim() !== '' && setShowSuggestions(true)}
                                />
                                <button
                                    type="submit"
                                    className="absolute right-3 text-brand-brown-700 hover:text-brand-orange transition-colors duration-300"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512">
                                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                                    </svg>
                                </button>
                            </form>
                            
                            {/* Suggestions Dropdown */}
                            {showSuggestions && suggestions.length > 0 && (
                                <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-lg shadow-lg border border-brand-tan z-50 max-h-80 overflow-y-auto">
                                    {suggestions.map((product) => (
                                        <div
                                            key={product.id}
                                            className="flex items-center p-3 hover:bg-brand-cream cursor-pointer transition-colors duration-200"
                                            onClick={() => handleSuggestionClick(product.id)}
                                        >
                                            <div className="w-10 h-10 rounded-md overflow-hidden mr-3">
                                                <img
                                                    src={product.images && product.images[0] ? product.images[0].src : ''}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <p className="font-medium text-brand-brown-700">{product.name}</p>
                                                <p className="text-xs text-brand-brown-500 capitalize">{product.category}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        
                        {/* User Authentication */}
                        {isAuthenticated ? (
                            <div className="relative group">
                                <button className="flex items-center space-x-2 text-brand-brown-700 hover:text-brand-orange transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                        </svg>
                                    </div>
                                    <span className="hidden md:inline text-sm font-medium">{user?.name || 'Account'}</span>
                                </button>
                                
                                {/* Dropdown Menu */}
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-brand-tan py-2 hidden group-hover:block z-50">
                                    <Link 
                                        to="/account" 
                                        className="block px-4 py-2 text-brand-brown-700 hover:bg-brand-cream transition-colors"
                                    >
                                        My Account
                                    </Link>
                                    <Link 
                                        to="/account?section=orders" 
                                        className="block px-4 py-2 text-brand-brown-700 hover:bg-brand-cream transition-colors"
                                    >
                                        My Orders
                                    </Link>
                                    <div className="border-t border-brand-tan my-1"></div>
                                    <button
                                        onClick={logout}
                                        className="block w-full text-left px-4 py-2 text-brand-brown-700 hover:bg-brand-cream transition-colors"
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <Link 
                                to="/login" 
                                className="text-brand-brown-700 hover:text-brand-orange transition-colors text-sm font-medium"
                            >
                                Sign In
                            </Link>
                        )}
                        
                        {/* Cart Icon */}
                        <button 
                            onClick={() => handleNavigation('/cart')}
                            className="relative text-brand-brown-700 hover:text-brand-orange transition-colors"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 576 512">
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.4 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                            </svg>
                            {cartItemCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-brand-orange text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartItemCount}
                                </span>
                            )}
                        </button>
                        
                        {/* Mobile Menu Button */}
                        <button className="md:hidden text-brand-brown-700 hover:text-brand-orange transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;