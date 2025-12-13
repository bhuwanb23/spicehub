import React from 'react';

const ProductSpecifications = ({ product }) => {
  // Check if product has any specifications to display
  const hasSpecifications = product.origin || product.region || product.harvest || 
                          product.process || product.altitude || product.roast || 
                          (product.tastingNotes && product.tastingNotes.length > 0);

  if (!hasSpecifications) {
    return null;
  }

  return (
    <div id="product-specifications" className="bg-white rounded-lg p-6 md:p-8 border border-brand-brown-300">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-brown-900 mb-6">
        Product Specifications
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tasting Notes */}
        {product.tastingNotes && product.tastingNotes.length > 0 && (
          <div className="bg-brand-cream p-6 rounded-lg">
            <h3 className="text-lg font-serif font-semibold text-brand-brown-900 mb-4">Tasting Notes</h3>
            <div className="flex flex-wrap gap-3">
              {product.tastingNotes.map((note, index) => (
                <span 
                  key={index}
                  className="bg-brand-orange/20 text-brand-brown-900 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Product Details Grid */}
        <div className="space-y-4">
          {product.origin && (
            <div className="flex justify-between pb-2 border-b border-brand-brown-300">
              <span className="font-bold text-brand-brown-900 tracking-wider">ORIGIN</span>
              <span>{product.origin}</span>
            </div>
          )}
          
          {product.region && (
            <div className="flex justify-between pb-2 border-b border-brand-brown-300">
              <span className="font-bold text-brand-brown-900 tracking-wider">REGION</span>
              <span>{product.region}</span>
            </div>
          )}
          
          {product.harvest && (
            <div className="flex justify-between pb-2 border-b border-brand-brown-300">
              <span className="font-bold text-brand-brown-900 tracking-wider">HARVEST</span>
              <span>{product.harvest}</span>
            </div>
          )}
          
          {product.process && (
            <div className="flex justify-between pb-2 border-b border-brand-brown-300">
              <span className="font-bold text-brand-brown-900 tracking-wider">PROCESS</span>
              <span>{product.process}</span>
            </div>
          )}
          
          {product.altitude && (
            <div className="flex justify-between pb-2 border-b border-brand-brown-300">
              <span className="font-bold text-brand-brown-900 tracking-wider">ALTITUDE</span>
              <span>{product.altitude}</span>
            </div>
          )}
          
          {product.roast && (
            <div className="flex justify-between pb-2 border-b border-brand-brown-300">
              <span className="font-bold text-brand-brown-900 tracking-wider">ROAST</span>
              <span>{product.roast}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSpecifications;