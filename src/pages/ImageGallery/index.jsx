import React from 'react';
import './styles.scss';
import GalleryItem from './GalleryItem';

import images from 'test-data.json';

export default function ImageGallery() {
  return (
    <div className="image-gallery">
      {images.map(
        (image, index) => <GalleryItem key={index} image={image}/>,
      )}
    </div>
  );
}
