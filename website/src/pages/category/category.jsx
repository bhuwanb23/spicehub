import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../constants';
import CategoryHero from './components/CategoryHero';
import ProductGrid from './components/ProductGrid';

const Category = () => {
  const { categoryName } = useParams();
  
  // Get products for this category
  const categoryProducts = getProductsByCategory(categoryName || 'all-spices');
  
  return (
    <main id="main-content" className="w-full">
      <CategoryHero categoryName={categoryName} />
      <ProductGrid products={categoryProducts} />
    </main>
  );
};

export default Category;