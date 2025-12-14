import React, { useState } from 'react';
import { useUser } from '../../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
  const { orders = [] } = useUser(); // Default to empty array if orders is undefined
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

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

  // Pagination
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const handleViewDetails = (orderId) => {
    // Navigate to order tracking page
    navigate(`/account/orders/${orderId}`);
  };

  const handleReorder = (orderId) => {
    // For now, just show an alert
    alert(`Reordering items from order ${orderId}`);
  };

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold text-brand-brown-700 mb-6">My Orders</h2>
      
      {orders.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-brand-brown-500 mb-4">You haven't placed any orders yet.</p>
          <button 
            onClick={() => navigate('/shop')}
            className="px-4 py-2 bg-brand-orange text-white rounded-lg hover:bg-brand-orange/90 transition-colors"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {currentOrders.map((order) => (
              <div key={order.id} className="border border-brand-tan rounded-lg p-5 hover:bg-brand-cream transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div>
                        <p className="font-bold text-brand-brown-700">{order.orderId}</p>
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
                    <p className="font-bold text-brand-brown-700 text-lg">${order.total}</p>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleViewDetails(order.id)}
                        className="px-4 py-2 text-sm font-medium text-brand-brown-700 border border-brand-tan rounded-lg hover:bg-white transition-colors"
                      >
                        View Details
                      </button>
                      <button 
                        onClick={() => handleReorder(order.orderId)}
                        className="px-4 py-2 text-sm font-medium text-brand-orange border border-brand-orange rounded-lg hover:bg-brand-orange/10 transition-colors"
                      >
                        Reorder
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <nav className="flex items-center space-x-1">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`px-3 py-2 rounded-lg ${currentPage === 1 ? 'text-brand-brown-300 cursor-not-allowed' : 'text-brand-brown-500 hover:bg-brand-cream'}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 320 512">
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                  </svg>
                </button>
                
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-3 py-2 rounded-lg ${currentPage === index + 1 ? 'text-brand-brown-700 bg-brand-cream font-medium' : 'text-brand-brown-500 hover:bg-brand-cream'}`}
                  >
                    {index + 1}
                  </button>
                ))}
                
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-2 rounded-lg ${currentPage === totalPages ? 'text-brand-brown-300 cursor-not-allowed' : 'text-brand-brown-500 hover:bg-brand-cream'}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 320 512">
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                  </svg>
                </button>
              </nav>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyOrders;