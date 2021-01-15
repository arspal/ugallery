import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import './styles.scss';

import { useSelector, useDispatch } from 'react-redux';
import { addPhoto } from 'store/actions/photoActions';
import { getPhoto } from 'api';
import { LazyImage } from 'components';

export default function ImageDetails() {
  const { id } = useParams();
  const image = useSelector(state => {
    return state.photos.list.find(image => image.id === id) || state.photos.details[id];
  });
  const imageDetails = useSelector(state => state.photos.details[id]);
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

  if (!image) return <p>loading...</p>;

  return (
    <div className="image-details">
      <div>
        <LazyImage image={image} style={{ width: '500px' }}/>
      </div>
      {imageDetails && <div className="image-details__info">
        {imageDetails.description && <p>{imageDetails.description}</p>}
        <p>Author: <span className="text-medium">{imageDetails.user.name}</span></p>
        <p>Likes: <span className="text-medium">{imageDetails.likes}</span></p>
        <p>Downloads: <span className="text-medium">{imageDetails.downloads}</span></p>
        <p>Views: <span className="text-medium">{imageDetails.views}</span></p>
      </div>}

    </div>
  );
}
