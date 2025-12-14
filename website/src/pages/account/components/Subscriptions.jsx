import React from 'react';

const Subscriptions = () => {
  // Mock subscription data
  const subscriptions = [
    {
      id: 1,
      productName: 'Ethiopian Yirgacheffe',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/b9efbbe56c-0a6741fc95183e32a8af.png',
      quantity: '250g',
      frequency: 'Monthly',
      nextDelivery: 'Dec 20, 2025',
      status: 'active'
    },
    {
      id: 2,
      productName: 'Organic Turmeric Powder',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/4f951d53cd-c8cf971d86c4807c14f1.png',
      quantity: '100g',
      frequency: 'Bi-weekly',
      nextDelivery: 'Jan 5, 2026',
      status: 'active'
    },
    {
      id: 3,
      productName: 'Cardamom Pods',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/678b5ccfc9-52d37aa1cd3b06f95274.png',
      quantity: '50g',
      frequency: 'Monthly',
      nextDelivery: 'Dec 28, 2025',
      status: 'paused'
    }
  ];

  // Get status badge
  const getStatusBadge = (status) => {
    const baseClasses = "px-3 py-1 rounded-full text-sm font-medium";
    
    switch (status.toLowerCase()) {
      case 'active':
        return <span className={`${baseClasses} bg-brand-green/10 text-brand-green`}>Active</span>;
      case 'paused':
        return <span className={`${baseClasses} bg-brand-brown-100 text-brand-brown-700`}>Paused</span>;
      default:
        return <span className={`${baseClasses} bg-brand-brown-100 text-brand-brown-700`}>{status}</span>;
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-serif font-bold text-brand-brown-700">Subscriptions</h2>
        <button className="px-4 py-2 bg-brand-orange text-white rounded-lg hover:bg-brand-orange/90 transition-colors">
          New Subscription
        </button>
      </div>
      
      <div className="space-y-6">
        {subscriptions.map((subscription) => (
          <div key={subscription.id} className="border border-brand-tan rounded-lg p-5 hover:bg-brand-cream transition-colors">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="bg-brand-cream rounded-lg w-20 h-20 flex items-center justify-center">
                <img 
                  src={subscription.image} 
                  alt={subscription.productName} 
                  className="w-16 h-16 object-contain"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-brand-brown-700 text-lg">{subscription.productName}</h3>
                    <p className="text-brand-brown-500">
                      {subscription.quantity} • {subscription.frequency}
                    </p>
                  </div>
                  
                  <div>
                    {getStatusBadge(subscription.status)}
                  </div>
                </div>
                
                <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="text-brand-brown-500">
                      Next delivery: <span className="font-medium text-brand-brown-700">{subscription.nextDelivery}</span>
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1 text-sm font-medium text-brand-brown-700 border border-brand-tan rounded-lg hover:bg-white transition-colors">
                      Pause
                    </button>
                    <button className="px-3 py-1 text-sm font-medium text-brand-brown-700 border border-brand-tan rounded-lg hover:bg-white transition-colors">
                      Skip Delivery
                    </button>
                    <button className="px-3 py-1 text-sm font-medium text-brand-brown-700 border border-brand-tan rounded-lg hover:bg-white transition-colors">
                      Modify
                    </button>
                    <button className="px-3 py-1 text-sm font-medium text-brand-red border border-brand-red rounded-lg hover:bg-brand-red/10 transition-colors">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscriptions;