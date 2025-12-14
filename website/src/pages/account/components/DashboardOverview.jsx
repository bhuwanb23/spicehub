import React from 'react';

const DashboardOverview = () => {
  // Mock data
  const summaryCards = [
    { id: 1, title: 'Total Orders', value: 12, icon: 'box', color: 'text-brand-orange' },
    { id: 2, title: 'Active Subscriptions', value: 3, icon: 'calendar', color: 'text-brand-green' },
    { id: 3, title: 'Saved Addresses', value: 2, icon: 'map-marker', color: 'text-brand-brown-700' },
    { id: 4, title: 'Wishlist Items', value: 8, icon: 'heart', color: 'text-brand-red' }
  ];

  const recentOrders = [
    { id: 'ORD-7842', date: 'Dec 12, 2025', status: 'Delivered', total: '$86.42' },
    { id: 'ORD-7839', date: 'Dec 8, 2025', status: 'Shipped', total: '$42.15' },
    { id: 'ORD-7835', date: 'Dec 8, 2025', status: 'Processing', total: '$124.99' }
  ];

  const upcomingSubscription = {
    productName: 'Ethiopian Yirgacheffe',
    nextDelivery: 'Dec 20, 2025',
    quantity: '250g',
    frequency: 'Monthly'
  };

  // Get icon component
  const getIcon = (iconName) => {
    const iconClasses = "w-6 h-6";
    
    switch (iconName) {
      case 'box':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 512 512">
            <path d="M16 64C16 28.7 44.7 0 80 0H432c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM160 160c0-17.7 14.3-32 32-32H320c17.7 0 32 14.3 32 32V416H160V160zm80 48c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16V256h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16s7.2-16 16-16h16V208z"/>
          </svg>
        );
      case 'calendar':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 448 512">
            <path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"/>
          </svg>
        );
      case 'map-marker':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 384 512">
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/>
          </svg>
        );
      case 'heart':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 512 512">
            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  // Get status badge
  const getStatusBadge = (status) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    
    switch (status.toLowerCase()) {
      case 'delivered':
        return <span className={`${baseClasses} bg-brand-green/10 text-brand-green`}>Delivered</span>;
      case 'shipped':
        return <span className={`${baseClasses} bg-brand-orange/10 text-brand-orange`}>Shipped</span>;
      case 'processing':
        return <span className={`${baseClasses} bg-brand-brown-100 text-brand-brown-700`}>Processing</span>;
      default:
        return <span className={`${baseClasses} bg-brand-brown-100 text-brand-brown-700`}>{status}</span>;
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold text-brand-brown-700 mb-6">Dashboard Overview</h2>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {summaryCards.map((card) => (
          <div key={card.id} className="bg-brand-cream rounded-lg p-5 border border-brand-tan">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-brand-brown-500 text-sm">{card.title}</p>
                <p className="text-2xl font-bold text-brand-brown-700 mt-1">{card.value}</p>
              </div>
              <div className={`${card.color}`}>
                {getIcon(card.icon)}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <div>
          <h3 className="text-lg font-serif font-bold text-brand-brown-700 mb-4">Recent Orders</h3>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="border border-brand-tan rounded-lg p-4 hover:bg-brand-cream transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-brand-brown-700">{order.id}</p>
                    <p className="text-sm text-brand-brown-500">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-brand-brown-700">{order.total}</p>
                    {getStatusBadge(order.status)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Upcoming Subscription */}
        <div>
          <h3 className="text-lg font-serif font-bold text-brand-brown-700 mb-4">Upcoming Subscription</h3>
          <div className="border border-brand-tan rounded-lg p-5 bg-white">
            <div className="flex items-start space-x-4">
              <div className="bg-brand-cream rounded-lg w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8 text-brand-brown-500" fill="currentColor" viewBox="0 0 384 512">
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-brand-brown-700">{upcomingSubscription.productName}</h4>
                <p className="text-sm text-brand-brown-500 mt-1">
                  {upcomingSubscription.quantity} • {upcomingSubscription.frequency}
                </p>
                <p className="text-sm text-brand-brown-500 mt-2">
                  Next delivery: <span className="font-medium">{upcomingSubscription.nextDelivery}</span>
                </p>
              </div>
            </div>
            <div className="flex space-x-3 mt-4">
              <button className="text-sm font-medium text-brand-orange hover:text-brand-orange/80">
                Skip Delivery
              </button>
              <button className="text-sm font-medium text-brand-brown-700 hover:text-brand-brown-900">
                Modify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;