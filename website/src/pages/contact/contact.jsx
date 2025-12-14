import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    orderId: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: '' });

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ submitting: false, success: true, error: '' });
      // Reset form after successful submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        orderId: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const subjects = [
    'General Inquiry',
    'Order Issue',
    'Product Question',
    'Shipping & Delivery',
    'Returns & Refunds',
    'Wholesale Inquiry',
    'Feedback & Suggestions'
  ];

  return (
    <div className="bg-brand-cream font-sans text-brand-brown-700">
      {/* Header Section */}
      <section className="py-16 bg-white border-b border-brand-tan">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-brown-900 mb-4">We're Here to Help</h1>
          <p className="text-lg text-brand-brown-700 max-w-2xl mx-auto">
            Have questions about our spices, your order, or just want to share your cooking adventures? 
            We'd love to hear from you. Reach out and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-brand-tan p-8 mb-8">
              <h2 className="text-2xl font-serif font-bold text-brand-brown-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-brown-900 mb-1">Email Us</h3>
                    <p className="text-brand-brown-700">support@spicehub.com</p>
                    <p className="text-sm text-brand-brown-500 mt-1">We typically respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-brown-900 mb-1">Call Us</h3>
                    <p className="text-brand-brown-700">+1 (555) 123-4567</p>
                    <p className="text-sm text-brand-brown-500 mt-1">Monday-Friday, 9AM-5PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-brown-900 mb-1">Visit Us</h3>
                    <p className="text-brand-brown-700">123 Spice Avenue</p>
                    <p className="text-brand-brown-700">San Francisco, CA 94103</p>
                    <p className="text-sm text-brand-brown-500 mt-1">By appointment only</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trust & Reassurance */}
            <div className="bg-brand-cream rounded-xl border border-brand-tan p-8">
              <h3 className="text-xl font-serif font-bold text-brand-brown-900 mb-4">We're Here for You</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-brand-green"></div>
                  </div>
                  <p className="text-brand-brown-700">
                    <span className="font-medium">Quick Responses:</span> We aim to respond to all inquiries within 24 business hours.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-brand-green"></div>
                  </div>
                  <p className="text-brand-brown-700">
                    <span className="font-medium">Quality Promise:</span> If you're not satisfied with your purchase, we'll make it right.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-brand-green"></div>
                  </div>
                  <p className="text-brand-brown-700">
                    <span className="font-medium">FAQs:</span> Find instant answers to common questions in our 
                    <a href="#" className="text-brand-green hover:underline ml-1">Help Center</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-brand-tan p-8">
              <h2 className="text-2xl font-serif font-bold text-brand-brown-900 mb-6">Send Us a Message</h2>
              
              {formStatus.success ? (
                <div className="bg-brand-green/10 border border-brand-green rounded-lg p-6 text-center mb-6">
                  <svg className="w-12 h-12 text-brand-green mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-brand-brown-900 mb-2">Message Sent!</h3>
                  <p className="text-brand-brown-700">
                    Thank you for contacting us. We've received your message and will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-brand-brown-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-brand-tan rounded-lg focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-brown-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-brand-tan rounded-lg focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-brand-brown-900 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-brand-tan rounded-lg focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="orderId" className="block text-sm font-medium text-brand-brown-900 mb-2">
                        Order ID
                      </label>
                      <input
                        type="text"
                        id="orderId"
                        name="orderId"
                        value={formData.orderId}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-brand-tan rounded-lg focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-colors"
                        placeholder="e.g., ORD-12345"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-brand-brown-900 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-brand-tan rounded-lg focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-colors appearance-none bg-white"
                      >
                        <option value="">Select a subject</option>
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>{subject}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-brown-900 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-brand-tan rounded-lg focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-colors"
                      placeholder="How can we help you today?"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={formStatus.submitting}
                      className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-colors ${
                        formStatus.submitting 
                          ? 'bg-brand-brown-300 cursor-not-allowed' 
                          : 'bg-brand-green hover:bg-brand-green/90'
                      }`}
                    >
                      {formStatus.submitting ? 'Sending...' : 'Send Message'}
                    </button>
                    
                    {formStatus.error && (
                      <p className="mt-3 text-red-600 text-center">{formStatus.error}</p>
                    )}
                  </div>
                </form>
              )}
            </div>
            
            {/* Support Categories */}
            <div className="mt-8 bg-white rounded-xl shadow-sm border border-brand-tan p-8">
              <h3 className="text-xl font-serif font-bold text-brand-brown-900 mb-4">Need Help Faster?</h3>
              <p className="text-brand-brown-700 mb-6">
                Browse our support categories for quick answers to common questions:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="#" className="flex items-center space-x-3 p-4 rounded-lg border border-brand-tan hover:bg-brand-cream transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-medium text-brand-brown-900">Order Issues</span>
                </a>
                
                <a href="#" className="flex items-center space-x-3 p-4 rounded-lg border border-brand-tan hover:bg-brand-cream transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <span className="font-medium text-brand-brown-900">Shipping Info</span>
                </a>
                
                <a href="#" className="flex items-center space-x-3 p-4 rounded-lg border border-brand-tan hover:bg-brand-cream transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <span className="font-medium text-brand-brown-900">Product Quality</span>
                </a>
                
                <a href="#" className="flex items-center space-x-3 p-4 rounded-lg border border-brand-tan hover:bg-brand-cream transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <span className="font-medium text-brand-brown-900">Feedback</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;