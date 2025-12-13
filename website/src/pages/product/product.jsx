import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, getRelatedProducts } from '../../constants';
import ImageGallery from './components/ImageGallery';
import ProductDetails from './components/ProductDetails';
import ProductSpecifications from './components/ProductSpecifications';
import CustomerReviews from './components/CustomerReviews';
import RelatedProducts from './components/RelatedProducts';

const ProductPage = () => {
  const { productId } = useParams();
  
  // Get the product based on the URL parameter
  const product = getProductById(productId) || getProductById(1); // fallback to coffee product (ID 1)
  
  // Get related products
  const relatedProducts = getRelatedProducts();
  
  return (
    <main className="px-4 sm:px-6 lg:px-20 py-8 bg-brand-cream">
      {/* Product Overview Section */}
      <section id="product-overview" className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16">
        <ImageGallery images={product.images || [{src: product.image, alt: product.alt}]} />
        <ProductDetails product={product} />
      </section>
      
      {/* Product Details Section - Side by side layout */}
      {(product.origin || product.region || product.harvest || product.process || product.altitude || product.roast || (product.tastingNotes && product.tastingNotes.length > 0) || product.originStory) && (
        <section id="product-details" className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Specifications */}
            {(product.origin || product.region || product.harvest || product.process || product.altitude || product.roast || (product.tastingNotes && product.tastingNotes.length > 0)) && (
              <div>
                <ProductSpecifications product={product} />
              </div>
            )}
            
            {/* Origin Story */}
            {product.originStory && (
              <div className="bg-white rounded-lg p-6 border border-brand-brown-300 h-full flex flex-col">
                <h2 className="text-xl font-serif font-bold text-brand-brown-900 mb-4">
                  {product.originStory.title}
                </h2>
                <div className="space-y-4 flex-grow">
                  <p className="text-brand-brown-700 text-sm leading-relaxed">
                    {product.originStory.description}
                  </p>
                  <div className="rounded-lg overflow-hidden mt-auto">
                    <img 
                      src={product.originStory.image.src} 
                      alt={product.originStory.image.alt} 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}
      
      {/* Customer Reviews Section */}
      <section id="customer-reviews" className="mb-16">
        <CustomerReviews />
      </section>
      
      {/* Related Products Section */}
      <section id="related-products">
        <RelatedProducts products={relatedProducts} />
      </section>
    </main>
  );
};

export default ProductPage;