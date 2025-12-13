import React from 'react';
import { PRODUCT_DATA, CUSTOMER_REVIEWS, RELATED_PRODUCTS } from './constants';
import ImageGallery from './components/ImageGallery';
import ProductDetails from './components/ProductDetails';
import ProductSpecifications from './components/ProductSpecifications';
import CustomerReviews from './components/CustomerReviews';
import RelatedProducts from './components/RelatedProducts';

const ProductPage = () => {
  return (
    <main className="px-20 py-12 bg-brand-cream">
      {/* Product Overview Section */}
      <section id="product-overview" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <ImageGallery images={PRODUCT_DATA.images} />
        <ProductDetails product={PRODUCT_DATA} />
      </section>

      {/* Product Specifications and Origin Story */}
      <ProductSpecifications product={PRODUCT_DATA} />

      {/* Customer Reviews */}
      <CustomerReviews reviews={CUSTOMER_REVIEWS} />

      {/* Related Products */}
      <RelatedProducts products={RELATED_PRODUCTS} />
    </main>
  );
};

export default ProductPage;