import React from 'react';
import { Link } from 'react-router-dom';
import { URL } from 'const';
import { LazyImage } from 'components';

export default function GalleryItem({ image }) {
  return (
    <Link
      to={URL.PHOTO_DETAILS.replace(':id', image.id)}
      className="image-gallery__item">
      <LazyImage image={image}/>
    </Link>
  );
}
