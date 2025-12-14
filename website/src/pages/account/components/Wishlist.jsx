import React from 'react';

const Wishlist = () => {
  // Mock wishlist data
  const wishlistItems = [
    {
      id: 1,
      name: 'Smoked Paprika',
      price: 4.99,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/6e2e0af7db-a2d0cad51ef3c356cde4.png',
      inStock: true
    },
    {
      id: 2,
      name: 'Dried Rosemary',
      price: 3.99,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/e12f7dd9c5-fc8659930aef22f3ab58.png',
      inStock: true
    },
    {
      id: 3,
      name: 'Black Peppercorns',
      price: 5.49,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/678b5ccfc9-52d37aa1cd3b06f95274.png',
      inStock: true
    },
    {
      id: 4,
      name: 'Sea Salt Flakes',
      price: 6.99,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/9d401590bb-86f1cbbbbbcde85a5f6b.png',
      inStock: false
    },
    {
      id: 5,
      name: 'Ground Turmeric',
      price: 4.49,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/4f951d53cd-c8cf971d86c4807c14f1.png',
      inStock: true
    },
    {
      id: 6,
      name: 'Ceylon Cinnamon Sticks',
      price: 7.99,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/b640e6d159-747925f453976ddee0d7.png',
      inStock: true
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold text-brand-brown-700 mb-6">Wishlist</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.map((item) => (
          <div key={item.id} className="border border-brand-tan rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-48 object-contain bg-brand-cream"
              />
              {!item.inStock && (
                <div className="absolute top-2 right-2 bg-brand-red text-white text-xs px-2 py-1 rounded">
                  Out of Stock
                </div>
              )}
            </div>
            
            <div className="p-4">
              <h3 className="font-bold text-brand-brown-700">{item.name}</h3>
              <p className="text-lg font-bold text-brand-orange mt-2">${item.price.toFixed(2)}</p>
              
              <div className="flex space-x-2 mt-4">
                <button 
                  disabled={!item.inStock}
                  className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                    item.inStock 
                      ? 'bg-brand-orange text-white hover:bg-brand-orange/90' 
                      : 'bg-brand-brown-100 text-brand-brown-500 cursor-not-allowed'
                  }`}
                >
                  {item.inStock ? 'Add to Cart' : 'Unavailable'}
                </button>
                <button className="p-2 text-brand-brown-500 hover:text-brand-red transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;