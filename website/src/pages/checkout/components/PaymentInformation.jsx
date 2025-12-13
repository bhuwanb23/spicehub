import React from 'react';

const PaymentInformation = ({ paymentData, setPaymentData, onPlaceOrder, onPrev }) => {
  const handleChange = (e) => {
    const { id, value } = e.target;
    setPaymentData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPlaceOrder();
  };

  return (
    <section id="payment-section">
      <h2 className="text-2xl font-semibold text-brand-brown-900 mb-6">Payment Information</h2>
      <div className="bg-white p-6 rounded-lg border border-brand-brown-300">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-brand-brown-900 mb-1">Card Number</label>
            <div className="relative">
              <input 
                type="text" 
                id="cardNumber" 
                value={paymentData.cardNumber}
                onChange={handleChange}
                className="w-full pl-4 pr-12 py-3 bg-white border border-brand-brown-300 rounded-lg focus:ring-brand-orange focus:border-brand-orange transition duration-150"
                placeholder="0000 0000 0000 0000"
                required
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <i className="fas fa-credit-card text-brand-brown-300"></i>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="expiryDate" className="block text-sm font-medium text-brand-brown-900 mb-1">Expiration Date</label>
              <input 
                type="text" 
                id="expiryDate" 
                value={paymentData.expiryDate}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-brand-brown-300 rounded-lg focus:ring-brand-orange focus:border-brand-orange transition duration-150"
                placeholder="MM / YY"
                required
              />
            </div>
            <div>
              <label htmlFor="cvc" className="block text-sm font-medium text-brand-brown-900 mb-1">CVC</label>
              <div className="relative">
                <input 
                  type="text" 
                  id="cvc" 
                  value={paymentData.cvc}
                  onChange={handleChange}
                  className="w-full pl-4 pr-12 py-3 bg-white border border-brand-brown-300 rounded-lg focus:ring-brand-orange focus:border-brand-orange transition duration-150"
                  placeholder="123"
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <i className="fas fa-circle-question text-brand-brown-300"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <button 
              type="button"
              onClick={onPrev}
              className="bg-white border border-brand-brown-300 text-brand-brown-900 font-bold py-3 px-6 rounded-lg hover:border-brand-orange transition duration-300"
            >
              Back to Delivery
            </button>
            <button 
              type="submit"
              className="bg-brand-brown-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition duration-300"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
      <div id="trust-seals" className="mt-6 flex flex-col sm:flex-row items-center justify-between text-brand-brown-300">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <i className="fab fa-cc-visa text-2xl"></i>
          <i className="fab fa-cc-mastercard text-2xl"></i>
          <i className="fab fa-cc-amex text-2xl"></i>
          <i className="fab fa-cc-paypal text-2xl"></i>
        </div>
        <div className="flex items-center text-sm">
          <i className="fas fa-lock mr-2 text-brand-green"></i>
          <span>SSL Secure Transaction</span>
        </div>
      </div>
    </section>
  );
};

export default PaymentInformation;