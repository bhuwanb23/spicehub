import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { COMPLEMENTARY_PRODUCTS } from './constants';
import CartItems from './components/CartItems';
import OrderSummary from './components/OrderSummary';
import ComplementaryProducts from './components/ComplementaryProducts';

const CartPage = () => {
  const { items: cartItems, updateQuantity, removeFromCart, getOrderSummary } = useCart();
  const navigate = useNavigate();

  const handleUpdateQuantity = (id, newQuantity) => {
    updateQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <div id="cart-page-container" className="min-h-[1100px] bg-brand-cream">
      {/* Header */}
      <header id="header" className="border-b border-brand-brown-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <button 
            onClick={() => navigate('/')}
            className="text-2xl font-bold text-brand-green tracking-wider"
          >
            <i className="mr-2 fas fa-leaf"></i>Aroma
          </button>
          <button
            onClick={() => navigate('/shop')}
            className="text-sm font-medium text-brand-brown-900 hover:text-brand-green transition-colors duration-300"
          >
            <i className="mr-2 fas fa-arrow-left"></i> Continue Shopping
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="container mx-auto px-6 py-12 md:py-16">
        <div id="cart-header-section" className="text-center md:text-left mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-brown-900">Your Cart</h1>
          <p className="text-brand-brown-700 mt-2">You have {itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart.</p>
        </div>

        <div id="cart-layout" className="flex flex-col lg:flex-row lg:space-x-12">
          <CartItems 
            items={cartItems} 
            onUpdateQuantity={handleUpdateQuantity} 
            onRemoveItem={handleRemoveItem} 
          />
          <OrderSummary summary={getOrderSummary()} />
        </div>
      </main>

      <ComplementaryProducts products={COMPLEMENTARY_PRODUCTS} />
    </div>
  );
};

export default CartPage;