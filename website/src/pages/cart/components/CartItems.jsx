const CartItems = ({ items, onUpdateQuantity, onRemoveItem }) => {
    const handleQuantityChange = (id, newQuantity) => {
        if (newQuantity >= 1) {
            onUpdateQuantity(id, newQuantity);
        }
    };

    const incrementQuantity = (id, currentQuantity) => {
        handleQuantityChange(id, currentQuantity + 1);
    };

    const decrementQuantity = (id, currentQuantity) => {
        if (currentQuantity > 1) {
            handleQuantityChange(id, currentQuantity - 1);
        }
    };

    return (
        <section id="cart-items-section" className="flex-grow">
            <div className="space-y-6">
                {items.map((item) => (
                    <div
                        key={item.id}
                        id={`product-card-${item.id}`}
                        className="flex items-start md:items-center space-x-4 md:space-x-6 p-4 bg-white rounded-lg border border-brand-brown-300"
                    >
                        <div className="w-24 h-24 md:w-28 md:h-28 rounded-md overflow-hidden flex-shrink-0">
                            <img
                                className="w-full h-full object-cover"
                                src={item.image}
                                alt={item.alt}
                            />
                        </div>
                        <div className="flex-grow flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="mb-2 md:mb-0">
                                <h2 className="text-lg font-semibold text-brand-brown-900">{item.name}</h2>
                                <p className="text-sm text-brand-brown-700">{item.description}</p>
                            </div>
                            <div className="flex items-center space-x-4 md:space-x-8">
                                <div className="flex items-center border border-brand-brown-300 rounded-md">
                                    <button
                                        className="px-3 py-1 text-brand-brown-700 hover:text-brand-brown-900"
                                        onClick={() => decrementQuantity(item.id, item.quantity)}
                                    >
                                        -
                                    </button>
                                    <span className="px-3 py-1 font-medium">{item.quantity}</span>
                                    <button
                                        className="px-3 py-1 text-brand-brown-700 hover:text-brand-brown-900"
                                        onClick={() => incrementQuantity(item.id, item.quantity)}
                                    >
                                        +
                                    </button>
                                </div>
                                <p className="text-lg font-semibold w-20 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                                <button
                                    className="text-brand-brown-300 hover:text-brand-red transition-colors"
                                    onClick={() => onRemoveItem(item.id)}
                                >
                                    <i className="fas fa-trash-can"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Guarantees */}
            <div
                id="guarantees-sub-section"
                className="mt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-8 p-4 bg-brand-green/10 border border-brand-green/20 rounded-lg"
            >
                <div className="flex items-center text-sm text-brand-green">
                    <i className="mr-3 text-lg fas fa-circle-check"></i>
                    <span><strong>Freshness Guarantee:</strong> Sourced directly from local farms.</span>
                </div>
                <div className="flex items-center text-sm text-brand-green">
                    <i className="mr-3 text-lg fas fa-truck-fast"></i>
                    <span><strong>Estimated Delivery:</strong> Tomorrow, Dec 14th</span>
                </div>
            </div>
        </section>
    );
};

export default CartItems;