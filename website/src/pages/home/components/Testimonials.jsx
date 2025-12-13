import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg 
        key={i} 
        className="w-4 h-4" 
        fill="currentColor" 
        viewBox="0 0 576 512"
      >
        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials-section" className="py-24 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-brand-brown-900">What Our Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id}
              id={`testimonial-${testimonial.id}`}
              className="bg-white border border-brand-brown-100 p-8 rounded-lg text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <img 
                src={testimonial.avatar}
                alt="Customer Avatar"
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-brand-brown-100"
              />
              <p className="text-brand-brown-700 italic">{testimonial.quote}</p>
              <div className="mt-4 text-brand-orange flex justify-center">
                {renderStars(testimonial.rating)}
              </div>
              <h4 className="font-bold text-brand-brown-900 mt-4">- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;