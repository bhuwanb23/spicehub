import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from '../../../context/UserContext';

const OrderTracking = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const { orders = [] } = useUser(); // Default to empty array if orders is undefined
    const [order, setOrder] = useState(null);

    useEffect(() => {
        // Find the order by ID
        const foundOrder = orders.find(o => o && o.id && o.id.toString() === orderId);
        if (foundOrder) {
            setOrder(foundOrder);
        } else {
            // If order not found, redirect to orders page
            navigate('/account?section=orders');
        }
    }, [orderId, orders, navigate]);

    if (!order) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-brand-brown-500">Loading order details...</p>
            </div>
        );
    }

    // Calculate delivery date (estimated 3 days from order date)
    const orderDate = new Date(order.date);
    const deliveryDate = new Date(orderDate);
    deliveryDate.setDate(deliveryDate.getDate() + 3);

    // Format delivery date
    const formattedDeliveryDate = deliveryDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    // Status timeline - simulate progression based on order status
    const getStatusTimeline = () => {
        const statuses = ['Processing', 'Packed', 'Shipped', 'Out for Delivery', 'Delivered'];
        const currentIndex = statuses.indexOf(order.status);
        
        return statuses.map((status, index) => {
            const isCompleted = index <= currentIndex;
            const isActive = index === currentIndex;
            
            return {
                status,
                isCompleted,
                isActive,
                date: index <= 2 ? order.date : (index === 3 ? 'Today' : formattedDeliveryDate)
            };
        });
    };

    const timeline = getStatusTimeline();

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-serif font-bold text-brand-brown-700">Order Tracking</h2>
                <button
                    onClick={() => navigate('/account?section=orders')}
                    className="text-brand-brown-500 hover:text-brand-brown-700 transition-colors"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                    </svg>
                </button>
            </div>

            <section id="order-header" className="bg-white rounded-xl shadow-sm border border-brand-tan p-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div id="tracking-info">
                        <h2 className="text-sm font-medium text-brand-brown-500 uppercase tracking-wide mb-2">Tracking ID</h2>
                        <p className="text-xl font-semibold text-brand-brown-900 mb-1">{order.orderId}</p>
                        <p className="text-sm text-brand-brown-700">Order placed on {order.date}</p>
                    </div>

                    <div id="courier-info">
                        <h2 className="text-sm font-medium text-brand-brown-500 uppercase tracking-wide mb-2">Courier Partner</h2>
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-brand-cream rounded-lg flex items-center justify-center">
                                <svg className="text-brand-brown-700 text-sm" fill="currentColor" viewBox="0 0 640 512">
                                    <path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-semibold text-brand-brown-900">Express Logistics</p>
                                <p className="text-sm text-brand-brown-700">Standard Delivery</p>
                            </div>
                        </div>
                    </div>

                    <div id="delivery-info">
                        <h2 className="text-sm font-medium text-brand-brown-500 uppercase tracking-wide mb-2">Estimated Delivery</h2>
                        <p className="text-xl font-semibold text-brand-green mb-1">{formattedDeliveryDate}</p>
                        <p className="text-sm text-brand-brown-700">By 6:00 PM</p>
                    </div>
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <section id="tracking-timeline" className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-brand-tan p-8">
                    <h2 className="text-lg font-semibold text-brand-brown-900 mb-8">Order Status</h2>

                    <div className="relative">
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-tan"></div>

                        {timeline.map((item, index) => (
                            <div key={index} className="relative flex items-start space-x-4 pb-8">
                                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center relative z-10 ${item.isCompleted
                                        ? 'bg-brand-brown-900'
                                        : 'bg-brand-cream border-2 border-brand-tan'
                                    }`}>
                                    {item.isCompleted ? (
                                        <svg className="text-white text-sm" fill="currentColor" viewBox="0 0 448 512">
                                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                                        </svg>
                                    ) : (
                                        <span className={`text-sm font-medium ${item.isActive ? 'text-brand-brown-900' : 'text-brand-brown-500'}`}>
                                            {index + 1}
                                        </span>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0 pt-1">
                                    <h3 className={`font-semibold ${item.isCompleted ? 'text-brand-brown-900' : 'text-brand-brown-500'}`}>
                                        {item.status}
                                    </h3>
                                    <p className="text-sm text-brand-brown-700 mt-1">
                                        {item.status === 'Processing' && 'Your order has been confirmed and is being prepared'}
                                        {item.status === 'Packed' && 'Your order has been packed and ready for pickup'}
                                        {item.status === 'Shipped' && 'Your package is on the way to your delivery address'}
                                        {item.status === 'Out for Delivery' && 'Your package will be delivered today'}
                                        {item.status === 'Delivered' && 'Your package has been delivered successfully'}
                                    </p>
                                    <p className="text-xs text-brand-brown-500 mt-2">{item.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="space-y-6">
                    <section id="shipment-updates" className="bg-white rounded-xl shadow-sm border border-brand-tan p-6">
                        <h2 className="text-lg font-semibold text-brand-brown-900 mb-6">Recent Updates</h2>

                        <div className="space-y-4">
                            <div className="border-l-2 border-brand-orange pl-4">
                                <p className="text-sm font-medium text-brand-brown-900">Package out for delivery</p>
                                <p className="text-xs text-brand-brown-700 mt-1">Your package is with our delivery partner and will be delivered today</p>
                                <p className="text-xs text-brand-brown-500 mt-2">Today - 9:30 AM</p>
                            </div>

                            <div className="border-l-2 border-brand-tan pl-4">
                                <p className="text-sm font-medium text-brand-brown-900">Arrived at delivery facility</p>
                                <p className="text-xs text-brand-brown-700 mt-1">Package has reached the local delivery center</p>
                                <p className="text-xs text-brand-brown-500 mt-2">{order.date} - 6:15 AM</p>
                            </div>

                            <div className="border-l-2 border-brand-tan pl-4">
                                <p className="text-sm font-medium text-brand-brown-900">In transit</p>
                                <p className="text-xs text-brand-brown-700 mt-1">Package is on the way to delivery facility</p>
                                <p className="text-xs text-brand-brown-500 mt-2">{order.date} - 2:20 PM</p>
                            </div>
                        </div>
                    </section>

                    <section id="delivery-address" className="bg-white rounded-xl shadow-sm border border-brand-tan p-6">
                        <h2 className="text-lg font-semibold text-brand-brown-900 mb-4">Delivery Address</h2>
                        <div className="text-sm text-brand-brown-700 leading-relaxed">
                            <p className="font-medium text-brand-brown-900">
                                {order.shippingData?.firstName} {order.shippingData?.lastName}
                            </p>
                            <p>{order.shippingData?.address}</p>
                            <p>{order.shippingData?.city}, {order.shippingData?.postalCode}</p>
                            <p>{order.shippingData?.country}</p>
                        </div>
                    </section>

                    <section id="customer-support" className="bg-brand-cream rounded-xl border border-brand-tan p-6">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg className="text-brand-brown-700" fill="currentColor" viewBox="0 0 512 512">
                                    <path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-brand-brown-900 mb-2">Need Help?</h3>
                            <p className="text-sm text-brand-brown-700 mb-4">Having issues with your delivery? Our customer support team is here to help.</p>
                            <button className="inline-flex items-center justify-center w-full bg-brand-brown-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
                                <svg className="mr-2 text-sm" fill="currentColor" viewBox="0 0 512 512">
                                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                                </svg>
                                Contact Support
                            </button>
                            <p className="text-xs text-brand-brown-500 mt-3">Available 24/7 • Response within 2 hours</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default OrderTracking;