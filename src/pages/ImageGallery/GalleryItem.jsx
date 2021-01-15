import React from 'react';
import { Link } from 'react-router-dom';
import { URL } from 'const';

export default function GalleryItem({ image }) {
  return (
    <Link
      to={URL.PHOTO_DETAILS.replace(':id', image.id)}
      className="image-gallery__item">
      <figure>
        <img src={`${image.urls.raw}&q=80&w=800`} className="image-gallery__image"
             alt={image.alt_description}/>
      </figure>
    </Link>
  );
}
