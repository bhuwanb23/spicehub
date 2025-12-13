import React from 'react';
import { CATEGORY_HERO_IMAGE, CATEGORY_DESCRIPTIONS } from '../constants';

const CategoryHero = ({ categoryName }) => {
  // Format category name for display
  const formatCategoryName = (name) => {
    if (!name || name === 'all-spices') return 'All Spices';
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const displayName = formatCategoryName(categoryName);
  const description = CATEGORY_DESCRIPTIONS[categoryName] || CATEGORY_DESCRIPTIONS.default;

  return (
    <section id="category-hero" className="relative h-[450px] flex items-center justify-center text-white">
      <div className="absolute inset-0 h-full w-full">
        <img 
          className="w-full h-full object-cover" 
          src={CATEGORY_HERO_IMAGE.src} 
          alt={CATEGORY_HERO_IMAGE.alt} 
        />
      </div>
      <div className="absolute inset-0 bg-brand-brown-700/50"></div>
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          {displayName}
        </h1>
        <p className="text-lg text-brand-brown-100 leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default CategoryHero;