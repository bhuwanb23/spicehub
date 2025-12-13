import React from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCT_DATA, CUSTOMER_REVIEWS, RELATED_PRODUCTS } from './constants';
import ImageGallery from './components/ImageGallery';
import ProductDetails from './components/ProductDetails';
import ProductSpecifications from './components/ProductSpecifications';
import CustomerReviews from './components/CustomerReviews';
import RelatedProducts from './components/RelatedProducts';

const ProductPage = () => {
  // In a real application, we would use the productId to fetch the correct product data
  // For now, we'll just use the existing PRODUCT_DATA
  const { productId } = useParams();
  
  // Normally, you would fetch product data based on productId
  // const product = fetchProductById(productId);
  // For this implementation, we'll continue using the static data
  
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