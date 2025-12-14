import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useUser } from '../../context/UserContext';
import DashboardOverview from './components/DashboardOverview';
import MyOrders from './components/MyOrders';
import Subscriptions from './components/Subscriptions';
import Wishlist from './components/Wishlist';
import Addresses from './components/Addresses';
import AccountDetails from './components/AccountDetails';
import OrderTracking from './components/OrderTracking';

const Account = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const { orders } = useUser();
  
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }
  
  const initialSection = searchParams.get('section') || 'dashboard';
  const [activeSection, setActiveSection] = useState(initialSection);

  // User data from auth context
  const userData = {
    name: user?.name || "User",
    email: user?.email || "user@example.com",
    memberSince: "January 2025"
  };

  // Navigation items
  const navItems = [
    { id: 'dashboard', label: 'Dashboard Overview', icon: 'dashboard' },
    { id: 'orders', label: 'My Orders', icon: 'box' },
    { id: 'subscriptions', label: 'Subscriptions', icon: 'calendar' },
    { id: 'wishlist', label: 'Wishlist', icon: 'heart' },
    { id: 'addresses', label: 'Addresses', icon: 'map-marker' },
    { id: 'details', label: 'Account Details', icon: 'user' },
    { id: 'logout', label: 'Logout', icon: 'sign-out' }
  ];

  // Handle navigation
  const handleNavClick = (sectionId) => {
    if (sectionId === 'logout') {
      // Handle logout
      navigate('/login');
    } else {
      setActiveSection(sectionId);
      setSearchParams({ section: sectionId });
    }
  };

  // Render active section
  const renderActiveSection = () => {
    // Check if we're viewing a specific order
    const pathParts = window.location.pathname.split('/');
    if (pathParts.includes('orders') && pathParts.length > 3) {
      // We have an order ID (e.g., /account/orders/12345)
      return <OrderTracking />;
    }
    
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'orders':
        return <MyOrders />;
      case 'subscriptions':
        return <Subscriptions />;
      case 'wishlist':
        return <Wishlist />;
      case 'addresses':
        return <Addresses />;
      case 'details':
        return <AccountDetails />;
      default:
        return <DashboardOverview />;
    }
  };

  // Get icon component
  const getIcon = (iconName) => {
    const iconClasses = "w-5 h-5";
    
    switch (iconName) {
      case 'dashboard':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 512 512">
            <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z"/>
          </svg>
        );
      case 'box':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 448 512">
            <path d="M144 0H304c26.5 0 48 21.5 48 48V96H112V48c0-26.5 21.5-48 48-48zm-8 272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64h33.3c13.3 0 25.1 8.3 29.5 20.8l16 44.8c4.4 12.5-1.4 26.4-12.8 32.8s-26.3 3.1-34.7-8.3L224 336H192v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V272zm-32-64H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H104c-8.8 0-16 7.2-16 16s7.2 16 16 16zm400 16c0 77.3-62.7 140-140 140H224 112C50.1 364 0 313.9 0 252V48C0 21.5 21.5 0 48 0H304c26.5 0 48 21.5 48 48v64h32c53 0 96 43 96 96v32z"/>
          </svg>
        );
      case 'calendar':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 448 512">
            <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/>
          </svg>
        );
      case 'heart':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 512 512">
            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
          </svg>
        );
      case 'map-marker':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 384 512">
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/>
          </svg>
        );
      case 'user':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 448 512">
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
          </svg>
        );
      case 'sign-out':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 512 512">
            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-brand-brown-700 mb-2">
          Welcome back, {userData.name.split(' ')[0]}
        </h1>
        <p className="text-brand-brown-500">
          Member since {userData.memberSince} • {userData.email}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Navigation Menu */}
        <div className="lg:w-1/4">
          <nav className="bg-white rounded-lg shadow-sm border border-brand-tan p-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'bg-brand-green/10 text-brand-green font-medium'
                        : 'text-brand-brown-700 hover:bg-brand-cream'
                    }`}
                  >
                    <span className={`${activeSection === item.id ? 'text-brand-green' : 'text-brand-brown-500'}`}>
                      {getIcon(item.icon)}
                    </span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right Content Area */}
        <div className="lg:w-3/4">
          <div className="bg-white rounded-lg shadow-sm border border-brand-tan p-6">
            {renderActiveSection()}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Account;