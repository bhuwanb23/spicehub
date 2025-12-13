import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../constants';
import ImageGallery from './components/ImageGallery';
import ProductDetails from './components/ProductDetails';

const ProductPage = () => {
  const { productId } = useParams();
  
  // Get the product based on the URL parameter
  const product = getProductById(productId) || getProductById(19); // fallback to coffee product
  
  return (
    <main className="px-20 py-12 bg-brand-cream">
      {/* Product Overview Section */}
      <section id="product-overview" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <ImageGallery images={product.images || [{src: product.image, alt: product.alt}]} />
        <ProductDetails product={product} />
      </section>
    </main>
  );
};

export default ProductPage;