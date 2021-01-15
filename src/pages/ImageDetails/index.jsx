import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import './styles.scss';

import { useSelector, useDispatch } from 'react-redux';
import { addPhoto } from 'store/actions/photoActions';
import { getPhoto } from 'api';

export default function ImageDetails() {
  const { id } = useParams();
  const imageDetails = useSelector(state => state.photos.details)[id];
  const dispatch = useDispatch();

  useEffect(() => {
    if (imageDetails) return;

    async function loadImageDetails() {
      const details = await getPhoto(id);
      dispatch(addPhoto(details));
    }

    loadImageDetails();

  }, [dispatch, imageDetails, id]);

  if (!id) return null;

  if (!imageDetails) return <p>loading...</p>;

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
