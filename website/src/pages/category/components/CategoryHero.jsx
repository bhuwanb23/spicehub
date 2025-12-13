import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryHero = () => {
  const { categoryName } = useParams();

  // Format category name for display
  const formatCategoryName = (name) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const displayName = formatCategoryName(categoryName || 'Whole Spices');

  return (
    <section id="category-hero" className="relative h-[450px] flex items-center justify-center text-white">
      <div className="absolute inset-0 h-full w-full">
        <img 
          className="w-full h-full object-cover" 
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f345aa5f85-800d28678e0becbe85d6.png" 
          alt="An artful arrangement of whole spices on a rustic wooden surface" 
        />
      </div>
      <div className="absolute inset-0 bg-brand-brown-700/50"></div>
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          {displayName}
        </h1>
        <p className="text-lg text-brand-brown-100 leading-relaxed">
          Discover the soul of flavor with our hand-selected {displayName.toLowerCase()}. 
          Sourced from the finest farms, each spice is a promise of unparalleled aroma and potency. 
          Our philosophy is simple: pure, unadulterated ingredients for an authentic culinary experience 
          that elevates every dish from ordinary to extraordinary.
        </p>
      </div>
    </section>
  );
};

export default CategoryHero;