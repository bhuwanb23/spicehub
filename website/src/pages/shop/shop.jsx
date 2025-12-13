import React from 'react';
import ProductFilters from './components/ProductFilters';
import ProductGrid from './components/ProductGrid';

const Shop = () => {
  return (
    <main id="main-content" className="container mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        <ProductFilters />
        <ProductGrid />
      </div>
    </main>
  );
};

export default Shop;