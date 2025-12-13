import React from 'react';

const CheckoutStepper = ({ currentStep }) => {
  return (
    <div id="stepper" className="flex items-center border-b border-brand-brown-300 pb-6 mb-8">
      <div className={`flex items-center ${currentStep >= 1 ? 'text-brand-green' : 'text-brand-brown-300'}`}>
        <span className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 1 ? 'bg-brand-brown-900 text-white' : 'border-2 border-brand-brown-300'} font-bold`}>
          1
        </span>
        <span className="ml-3 font-semibold">Address</span>
      </div>
      <div className="flex-auto border-t-2 border-brand-brown-300 mx-4"></div>
      <div className={`flex items-center ${currentStep >= 2 ? 'text-brand-green' : 'text-brand-brown-300'}`}>
        <span className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 2 ? 'bg-brand-brown-900 text-white' : 'border-2 border-brand-brown-300'} font-bold`}>
          2
        </span>
        <span className="ml-3 font-semibold">Delivery</span>
      </div>
      <div className="flex-auto border-t-2 border-brand-brown-300 mx-4"></div>
      <div className={`flex items-center ${currentStep >= 3 ? 'text-brand-green' : 'text-brand-brown-300'}`}>
        <span className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 3 ? 'bg-brand-brown-900 text-white' : 'border-2 border-brand-brown-300'} font-bold`}>
          3
        </span>
        <span className="ml-3 font-semibold">Payment</span>
      </div>
    </div>
  );
};

export default CheckoutStepper;