import React from 'react';

export default function GalleryItem({ image }) {
  return (
    <a
      href={image.urls.regular}
      target="_blank"
      rel="noreferrer"
      className="image-gallery__item">
      <figure>
        <img src={`${image.urls.raw}&q=80&w=800`} className="image-gallery__image"
             alt={image.alt_description}/>
      </figure>
    </a>
  );
}
