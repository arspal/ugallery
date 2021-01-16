import React from 'react';
import { Link } from 'react-router-dom';
import { URL } from 'const';
import { LazyImage } from 'components';

export default function GalleryItem({ image }) {
  return (
    <Link
      to={URL.PHOTO_DETAILS.replace(':id', image.id)}
      className="gallery-picture">
      <LazyImage image={image}/>
      <div className="gallery-picture__overlay">
        <div className="gallery-picture__author">
          <img
            className="gallery-picture__author-image"
            src={image.user.profile_image.small}
            alt="user profile"/>
          <p className="gallery-picture__author-name">{image.user.name}</p>
        </div>
        <p className="gallery-picture__likes">
            <span className="gallery-picture__likes-icon">
              <svg>
                <use xlinkHref="/icons.svg#heart"/>
              </svg>
            </span>
          {image.likes}
        </p>
      </div>
    </Link>
  );
}
