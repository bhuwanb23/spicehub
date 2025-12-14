import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CheckoutStepper from './components/CheckoutStepper';
import ShippingAddress from './components/ShippingAddress';
import DeliveryMethod from './components/DeliveryMethod';
import PaymentInformation from './components/PaymentInformation';
import OrderSummary from './components/OrderSummary';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items: cartItems, getOrderSummary } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingData, setShippingData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'United States'
  });
  const [deliveryMethod, setDeliveryMethod] = useState('standard');
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvc: ''
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  // Redirect to cart if cart is empty
  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      // Scroll to top when changing steps
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      // Scroll to top when changing steps
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const handlePlaceOrder = () => {
    // In a real application, this would process the payment
    alert('Order placed successfully!');
    navigate('/');
  };

  return (
    <div id="checkout-page" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-brand-cream">
      <header id="header" className="text-center mb-10">
        <button 
          onClick={() => navigate('/')} 
          className="text-3xl font-bold text-brand-brown-900 tracking-wider hover:opacity-80 transition-opacity"
        >
          AROMA
        </button>
      </header>

      <main id="main-content" className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div id="checkout-flow" className="lg:col-span-2">
          <CheckoutStepper currentStep={currentStep} />
          
          <div className="space-y-10">
            {currentStep === 1 && (
              <ShippingAddress 
                shippingData={shippingData} 
                setShippingData={setShippingData} 
                onNext={handleNextStep} 
              />
            )}
            
            {currentStep === 2 && (
              <DeliveryMethod 
                deliveryMethod={deliveryMethod} 
                setDeliveryMethod={setDeliveryMethod} 
                onNext={handleNextStep} 
                onPrev={handlePrevStep} 
              />
            )}
            
            {currentStep === 3 && (
              <PaymentInformation 
                paymentData={paymentData} 
                setPaymentData={setPaymentData} 
                onPlaceOrder={handlePlaceOrder} 
                onPrev={handlePrevStep} 
              />
            )}
          </div>
        </div>
        
        <OrderSummary 
          cartItems={cartItems} 
          deliveryMethod={deliveryMethod}
          getOrderSummary={getOrderSummary}
        />
      </main>
    </div>
  );
};

export default CheckoutPage;