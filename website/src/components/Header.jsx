import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { totalItems: cartItemCount } = useCart();

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
                            Aroma
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
                        <button 
                            onClick={() => handleNavigation('/search')}
                            className="text-brand-brown-700 hover:text-brand-orange transition-colors duration-300"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                            </svg>
                        </button>
                        <button 
                            onClick={() => handleNavigation('/account')}
                            className="text-brand-brown-700 hover:text-brand-orange transition-colors duration-300"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
                                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                            </svg>
                        </button>
                        <button 
                            onClick={() => handleNavigation('/cart')}
                            className="relative text-brand-brown-700 hover:text-brand-orange transition-colors duration-300"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 576 512">
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                            </svg>
                            <span className="absolute -top-2 -right-2 bg-brand-orange text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                                {cartItemCount}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;