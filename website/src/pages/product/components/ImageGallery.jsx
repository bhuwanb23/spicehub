import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  if (!images || images.length === 0) {
    return <div className="h-[550px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
      <span className="text-gray-500">No images available</span>
    </div>;
  }

  return (
    <div id="image-gallery" className="flex flex-col gap-4">
      {/* Main image */}
      <div className="h-[550px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
        <img 
          className="w-full h-full object-cover" 
          src={images[selectedImageIndex].src} 
          alt={images[selectedImageIndex].alt} 
        />
      </div>
      
      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div 
            key={image.id}
            className={`h-28 bg-gray-200 rounded-md overflow-hidden cursor-pointer transition-opacity ${
              index === selectedImageIndex 
                ? 'border-2 border-brand-orange opacity-100' 
                : 'opacity-70 hover:opacity-100'
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img 
              className="w-full h-full object-cover" 
              src={image.src} 
              alt={image.alt} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;