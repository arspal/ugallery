import React from 'react';

// import { useParams } from 'react-router-dom';

import './styles.scss';

import imageDetails from 'test-data-details.json';

export default function ImageDetails() {
  // const { id } = useParams();
  // if (!id) return null;
  // if (!image) return <p>no image found</p>;

  return (
    <div className="image-details">
      <img src={`${imageDetails.urls.raw}&q=80&w=500`} alt={imageDetails.alt_description}/>
      <div className="image-details__info">
        {imageDetails.description && <p>{imageDetails.description}</p>}
        <p>Author: <span className="text-medium">{imageDetails.user.name}</span></p>
        <p>Likes: <span className="text-medium">{imageDetails.likes}</span></p>
        <p>Downloads: <span className="text-medium">{imageDetails.downloads}</span></p>
        <p>Views: <span className="text-medium">{imageDetails.views}</span></p>
      </div>
    </div>
  );
}
