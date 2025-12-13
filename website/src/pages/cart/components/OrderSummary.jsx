import { useNavigate } from 'react-router-dom';

const OrderSummary = ({ summary }) => {
    const navigate = useNavigate();

    return (
        <aside id="order-summary-section" className="w-full lg:w-96 flex-shrink-0 mt-10 lg:mt-0">
            <div className="bg-white p-6 rounded-lg border border-brand-brown-300 sticky top-10">
                <h2 className="text-xl font-bold text-brand-brown-900 mb-6 pb-4 border-b border-brand-brown-300">
                    Order Summary
                </h2>
                <div className="space-y-3 text-brand-brown-700">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span className="font-medium text-brand-brown-900">${summary.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping</span>
                        <span className="font-medium text-brand-brown-900">${summary.shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Tax</span>
                        <span className="font-medium text-brand-brown-900">${summary.tax.toFixed(2)}</span>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-brand-brown-300">
                    <span className="text-lg font-bold text-brand-brown-900">Total</span>
                    <span className="text-2xl font-bold text-brand-brown-900">${summary.total.toFixed(2)}</span>
                </div>
                <button
                    onClick={() => navigate('/checkout')}
                    className="w-full bg-brand-brown-900 text-white font-bold py-3 px-4 rounded-lg mt-6 hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                    Proceed to Checkout
                </button>
                <div id="trust-indicators" className="mt-6 text-center">
                    <div className="flex items-center justify-center text-sm text-brand-green">
                        <i className="mr-2 fas fa-shield-halved"></i>
                        <span>Secure SSL Encrypted Checkout</span>
                    </div>
                    <div className="flex justify-center space-x-4 mt-4 text-2xl text-brand-brown-300">
                        <i className="fab fa-cc-visa"></i>
                        <i className="fab fa-cc-mastercard"></i>
                        <i className="fab fa-cc-amex"></i>
                        <i className="fab fa-cc-paypal"></i>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default OrderSummary;