const OrderSummary = ({ cartItems, deliveryMethod, getOrderSummary }) => {
  const orderSummary = getOrderSummary();
  const deliveryCost = deliveryMethod === 'express' ? 15.00 : 5.00;
  const total = orderSummary.subtotal + deliveryCost;

  return (
    <aside id="order-summary" className="lg:col-span-1">
      <div className="bg-white rounded-lg border border-brand-brown-300 p-6 sticky top-10">
        <h3 className="text-xl font-semibold text-brand-brown-900 border-b border-brand-brown-300 pb-4 mb-4">
          Order Summary
        </h3>
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} id={`product-card-${item.id}`} className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-brand-cream rounded-md overflow-hidden flex-shrink-0">
                <img 
                  className="w-full h-full object-cover" 
                  src={item.image || item.images?.[0]?.src} 
                  alt={item.name} 
                />
              </div>
              <div className="flex-grow">
                <p className="font-semibold text-brand-brown-900">{item.name}</p>
                <p className="text-sm text-brand-brown-300">
                  {item.selectedWeight?.label ? `${item.selectedWeight.label}, ` : ''}
                  {item.selectedGrind?.label ? `${item.selectedGrind.label}, ` : ''}
                  Quantity: {item.quantity}
                </p>
              </div>
              <p className="font-semibold text-brand-brown-900">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="border-t border-brand-brown-300 pt-4 mt-6 space-y-2">
          <div className="flex justify-between text-brand-brown-900">
            <span>Subtotal</span>
            <span>${orderSummary.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-brand-brown-900">
            <span>Shipping</span>
            <span>${deliveryCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-brand-brown-900">
            <span>Tax</span>
            <span>${orderSummary.tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-brand-brown-900 font-bold text-lg pt-2">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <div id="quality-assurance" className="mt-6 text-center bg-brand-cream p-4 rounded-lg">
          <i className="fas fa-shield-alt text-brand-green text-2xl mb-2"></i>
          <h4 className="font-semibold text-brand-brown-900">Satisfaction Guarantee</h4>
          <p className="text-xs text-brand-brown-300 mt-1">
            Not happy with your order? We offer a 30-day money-back guarantee.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default OrderSummary;