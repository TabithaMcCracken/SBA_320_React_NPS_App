import React from 'react';

const Gallery = ({ galleryImages, currentIndex }) => (
  <div className="gallery-card">
    {galleryImages.length > 0 && (
      <div className="gallery-image-container">
        <img
          src={galleryImages[currentIndex].url}
          alt={galleryImages[currentIndex].altText}
          title={galleryImages[currentIndex].title}
          className="gallery-image"
        />
      </div>
    )}
  </div>
);

export default Gallery;
