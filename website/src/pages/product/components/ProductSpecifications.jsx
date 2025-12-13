import React from 'react';

const ProductSpecifications = ({ product }) => {
  return (
    <div id="detailed-info" className="mt-20">
      <div className="border-b border-brand-brown-300 mb-8">
        <nav className="flex space-x-8 -mb-px">
          <a href="#" className="py-4 px-1 border-b-2 border-brand-brown-900 font-semibold text-brand-brown-900 whitespace-nowrap">
            Full Profile
          </a>
          <a href="#" className="py-4 px-1 border-b-2 border-transparent text-brand-brown-700 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap">
            Usage & Storage
          </a>
          <a href="#" className="py-4 px-1 border-b-2 border-transparent text-brand-brown-700 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap">
            Reviews ({product.reviewCount})
          </a>
        </nav>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-brand-brown-700 leading-relaxed">
        <div id="origin-story">
          <h3 className="text-2xl font-serif font-semibold text-brand-brown-900 mb-4">
            {product.originStory.title}
          </h3>
          <p className="mb-4">{product.originStory.description}</p>
          <div className="h-64 rounded-lg overflow-hidden mt-6">
            <img 
              className="w-full h-full object-cover" 
              src={product.originStory.image.src} 
              alt={product.originStory.image.alt} 
            />
          </div>
        </div>
        
        <div id="product-specs" className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-brand-brown-300">
            <h4 className="text-lg font-serif font-semibold text-brand-brown-900 mb-4">Tasting Notes</h4>
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
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
            <div className="flex flex-col">
              <span className="font-bold text-brand-brown-900 tracking-wider">ORIGIN</span>
              <span>{product.origin}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-brand-brown-900 tracking-wider">REGION</span>
              <span>{product.region}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-brand-brown-900 tracking-wider">HARVEST</span>
              <span>{product.harvest}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-brand-brown-900 tracking-wider">PROCESS</span>
              <span>{product.process}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-brand-brown-900 tracking-wider">ALTITUDE</span>
              <span>{product.altitude}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-brand-brown-900 tracking-wider">ROAST</span>
              <span>{product.roast}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecifications;