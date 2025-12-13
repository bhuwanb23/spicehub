import React from 'react';

const ShippingAddress = ({ shippingData, setShippingData, onNext }) => {
  const handleChange = (e) => {
    const { id, value } = e.target;
    setShippingData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <section id="address-section">
      <h2 className="text-2xl font-semibold text-brand-brown-900 mb-6">Shipping Address</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-brand-brown-900 mb-1">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              value={shippingData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-brand-brown-300 rounded-lg focus:ring-brand-orange focus:border-brand-orange transition duration-150"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-brand-brown-900 mb-1">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              value={shippingData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-brand-brown-300 rounded-lg focus:ring-brand-orange focus:border-brand-orange transition duration-150"
              placeholder="Doe"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-brand-brown-900 mb-1">Address</label>
          <input 
            type="text" 
            id="address" 
            value={shippingData.address}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-brand-brown-300 rounded-lg focus:ring-brand-orange focus:border-brand-orange transition duration-150"
            placeholder="123 Meadow Lane"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-brand-brown-900 mb-1">City</label>
            <input 
              type="text" 
              id="city" 
              value={shippingData.city}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-brand-brown-300 rounded-lg focus:ring-brand-orange focus:border-brand-orange transition duration-150"
              placeholder="Green Valley"
              required
            />
          </div>
          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium text-brand-brown-900 mb-1">Postal Code</label>
            <input 
              type="text" 
              id="postalCode" 
              value={shippingData.postalCode}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-brand-brown-300 rounded-lg focus:ring-brand-orange focus:border-brand-orange transition duration-150"
              placeholder="12345"
              required
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-brand-brown-900 mb-1">Country</label>
            <select 
              id="country" 
              value={shippingData.country}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-brand-brown-300 rounded-lg focus:ring-brand-orange focus:border-brand-orange transition duration-150"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end">
          <button 
            type="submit"
            className="bg-brand-brown-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition duration-300"
          >
            Continue to Delivery
          </button>
        </div>
      </form>
    </section>
  );
};

export default ShippingAddress;