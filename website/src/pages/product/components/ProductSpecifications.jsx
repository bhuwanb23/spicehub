import React from 'react';

const ProductSpecifications = ({ product }) => {
  return (
    <div id="product-specifications" className="bg-white rounded-lg p-6 border border-brand-brown-300 h-full flex flex-col">
      <h2 className="text-xl font-serif font-bold text-brand-brown-900 mb-4">
        Product Specifications
      </h2>
      
      <div className="space-y-5 flex-grow">
        {/* Tasting Notes - Horizontal scroll for better mobile experience */}
        {product.tastingNotes && product.tastingNotes.length > 0 && (
          <div>
            <h3 className="text-base font-serif font-semibold text-brand-brown-900 mb-2">Tasting Notes</h3>
            <div className="flex flex-wrap gap-2">
              {product.tastingNotes.map((note, index) => (
                <span 
                  key={index}
                  className="bg-brand-cream text-brand-brown-900 text-xs font-medium px-2.5 py-1 rounded-full border border-brand-brown-200"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Product Details - Clean grid layout */}
        <div className="space-y-3 mt-2">
          {product.origin && (
            <div className="flex justify-between items-center py-1.5 border-b border-brand-brown-100">
              <span className="font-medium text-brand-brown-700 text-sm">Origin</span>
              <span className="text-brand-brown-900 text-sm">{product.origin}</span>
            </div>
          )}
          
          {product.region && (
            <div className="flex justify-between items-center py-1.5 border-b border-brand-brown-100">
              <span className="font-medium text-brand-brown-700 text-sm">Region</span>
              <span className="text-brand-brown-900 text-sm">{product.region}</span>
            </div>
          )}
          
          {product.harvest && (
            <div className="flex justify-between items-center py-1.5 border-b border-brand-brown-100">
              <span className="font-medium text-brand-brown-700 text-sm">Harvest</span>
              <span className="text-brand-brown-900 text-sm">{product.harvest}</span>
            </div>
          )}
          
          {product.process && (
            <div className="flex justify-between items-center py-1.5 border-b border-brand-brown-100">
              <span className="font-medium text-brand-brown-700 text-sm">Process</span>
              <span className="text-brand-brown-900 text-sm">{product.process}</span>
            </div>
          )}
          
          {product.altitude && (
            <div className="flex justify-between items-center py-1.5 border-b border-brand-brown-100">
              <span className="font-medium text-brand-brown-700 text-sm">Altitude</span>
              <span className="text-brand-brown-900 text-sm">{product.altitude}</span>
            </div>
          )}
          
          {product.roast && (
            <div className="flex justify-between items-center py-1.5 border-b border-brand-brown-100">
              <span className="font-medium text-brand-brown-700 text-sm">Roast</span>
              <span className="text-brand-brown-900 text-sm">{product.roast}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSpecifications;