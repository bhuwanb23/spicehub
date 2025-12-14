import React from 'react';

const MyOrders = () => {
  // Mock order data
  const orders = [
    {
      id: 'ORD-7842',
      date: 'Dec 12, 2025',
      status: 'Delivered',
      total: '$86.42',
      items: 3
    },
    {
      id: 'ORD-7839',
      date: 'Dec 8, 2025',
      status: 'Shipped',
      total: '$42.15',
      items: 2
    },
    {
      id: 'ORD-7835',
      date: 'Dec 8, 2025',
      status: 'Processing',
      total: '$124.99',
      items: 5
    },
    {
      id: 'ORD-7821',
      date: 'Nov 28, 2025',
      status: 'Delivered',
      total: '$67.30',
      items: 4
    },
    {
      id: 'ORD-7815',
      date: 'Nov 22, 2025',
      status: 'Delivered',
      total: '$92.75',
      items: 3
    }
  ];

  // Get status badge
  const getStatusBadge = (status) => {
    const baseClasses = "px-3 py-1 rounded-full text-sm font-medium";
    
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
      <h2 className="text-2xl font-serif font-bold text-brand-brown-700 mb-6">My Orders</h2>
      
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="border border-brand-tan rounded-lg p-5 hover:bg-brand-cream transition-colors">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div>
                    <p className="font-bold text-brand-brown-700">{order.id}</p>
                    <p className="text-sm text-brand-brown-500">{order.date}</p>
                  </div>
                  <div>
                    <p className="text-brand-brown-700">{order.items} {order.items === 1 ? 'item' : 'items'}</p>
                  </div>
                  <div>
                    {getStatusBadge(order.status)}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <p className="font-bold text-brand-brown-700 text-lg">{order.total}</p>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 text-sm font-medium text-brand-brown-700 border border-brand-tan rounded-lg hover:bg-white transition-colors">
                    View Details
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-brand-orange border border-brand-orange rounded-lg hover:bg-brand-orange/10 transition-colors">
                    Reorder
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <nav className="flex items-center space-x-1">
          <button className="px-3 py-2 rounded-lg text-brand-brown-500 hover:bg-brand-cream">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 320 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
            </svg>
          </button>
          
          <button className="px-3 py-2 rounded-lg text-brand-brown-700 bg-brand-cream font-medium">
            1
          </button>
          <button className="px-3 py-2 rounded-lg text-brand-brown-500 hover:bg-brand-cream">
            2
          </button>
          <button className="px-3 py-2 rounded-lg text-brand-brown-500 hover:bg-brand-cream">
            3
          </button>
          
          <button className="px-3 py-2 rounded-lg text-brand-brown-500 hover:bg-brand-cream">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 320 512">
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
            </svg>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MyOrders;