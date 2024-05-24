// src/components/Gallery.js
import React from 'react';

const Gallery = ({ galleryImages, currentIndex }) => (
  <div className="gallery">
    {galleryImages.length > 0 && (
      <img
        src={galleryImages[currentIndex].url}
        alt={galleryImages[currentIndex].altText}
        title={galleryImages[currentIndex].title}
        className="gallery-image"
        style={{ maxWidth: '200px', maxHeight: '150px' }}
      />
    )}
  </div>
);

export default Gallery;
