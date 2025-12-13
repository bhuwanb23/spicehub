import React from 'react';

const DeliveryMethod = ({ deliveryMethod, setDeliveryMethod, onNext, onPrev }) => {
  const handleDeliveryChange = (method) => {
    setDeliveryMethod(method);
  };

  return (
    <section id="delivery-section">
      <h2 className="text-2xl font-semibold text-brand-brown-900 mb-6">Delivery Method</h2>
      <div className="space-y-4">
        <div 
          className={`flex justify-between items-center p-4 border-2 ${deliveryMethod === 'standard' ? 'border-brand-orange' : 'border-brand-brown-300'} rounded-lg bg-white cursor-pointer`}
          onClick={() => handleDeliveryChange('standard')}
        >
          <div className="flex items-center">
            <input 
              id="delivery-standard" 
              name="delivery-method" 
              type="radio" 
              className="h-4 w-4 text-brand-orange focus:ring-brand-orange border-brand-brown-300"
              checked={deliveryMethod === 'standard'}
              onChange={() => handleDeliveryChange('standard')}
            />
            <label htmlFor="delivery-standard" className="ml-3 block text-sm font-medium text-brand-brown-900">
              Standard Delivery <br />
              <span className="text-xs text-brand-brown-300">4-6 business days</span>
            </label>
          </div>
          <span className="font-semibold text-brand-brown-900">$5.00</span>
        </div>
        <div 
          className={`flex justify-between items-center p-4 border ${deliveryMethod === 'express' ? 'border-brand-orange' : 'border-brand-brown-300'} rounded-lg bg-white cursor-pointer hover:border-brand-orange`}
          onClick={() => handleDeliveryChange('express')}
        >
          <div className="flex items-center">
            <input 
              id="delivery-express" 
              name="delivery-method" 
              type="radio" 
              className="h-4 w-4 text-brand-orange focus:ring-brand-orange border-brand-brown-300"
              checked={deliveryMethod === 'express'}
              onChange={() => handleDeliveryChange('express')}
            />
            <label htmlFor="delivery-express" className="ml-3 block text-sm font-medium text-brand-brown-900">
              Express Delivery <br />
              <span className="text-xs text-brand-brown-300">1-2 business days</span>
            </label>
          </div>
          <span className="font-semibold text-brand-brown-900">$15.00</span>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <button 
          onClick={onPrev}
          className="bg-white border border-brand-brown-300 text-brand-brown-900 font-bold py-3 px-6 rounded-lg hover:border-brand-orange transition duration-300"
        >
          Back to Address
        </button>
        <button 
          onClick={onNext}
          className="bg-brand-brown-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition duration-300"
        >
          Continue to Payment
        </button>
      </div>
    </section>
  );
};

export default DeliveryMethod;