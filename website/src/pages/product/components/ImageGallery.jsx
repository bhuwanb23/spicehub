import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Handle both single image and array of images
  const imageList = Array.isArray(images) ? images : [images];
  const currentImage = imageList[currentImageIndex] || {};

  return (
    <div id="image-gallery" className="flex flex-col-reverse lg:flex-row gap-6">
      {/* Thumbnails */}
      {imageList.length > 1 && (
        <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-x-visible lg:h-[500px] pb-2">
          {imageList.map((image, index) => (
            <button
              key={index}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                currentImageIndex === index ? 'border-brand-orange' : 'border-transparent'
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={image.src || image.image}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Main Image */}
      <div className="flex-grow">
        <div className="aspect-square rounded-xl overflow-hidden bg-brand-brown-100 flex items-center justify-center">
          <img
            src={currentImage.src || currentImage.image}
            alt={currentImage.alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;