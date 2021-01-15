import React from 'react';
import './styles.scss';

import GalleryItem from './GalleryItem';

export default function ImageGallery({ images }) {
  return (
    <div className="image-gallery">
      {images.map(
        (image, index) => <GalleryItem key={index} image={image}/>,
      )}
    </div>
  );
}
