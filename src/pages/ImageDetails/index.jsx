import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import './styles.scss';

import UserInfo from './UserInfo';

import { useSelector, useDispatch } from 'react-redux';
import { addPhoto } from 'store/actions/photoActions';
import { setError } from 'store/actions/errorActions';
import { getPhoto } from 'api';
import { LazyImage, SkeletBar, Loader } from 'components';

export default function ImageDetails() {
  const { id } = useParams();

  const image = useSelector(state => {
    return state.photos.list.find(image => image.id === id) || state.photos.details[id];
  });
  const imageDetails = useSelector(state => state.photos.details[id]);
  const dispatch = useDispatch();

  const [imagePadding, setImagePadding] = useState(0);

  useEffect(() => {
    if (imageDetails) return;

    async function loadImageDetails() {
      try {
        const details = await getPhoto(id);
        dispatch(addPhoto(details));
      } catch (e) {
        dispatch(setError(e.message));
      }

    }

    loadImageDetails();

  }, [dispatch, imageDetails, id]);

  useEffect(() => {
    const matchMedia = window.matchMedia('(min-width: 850px)');

    function mediaQueryHandler(e) {
      if (e.matches) {
        setImagePadding(200);
      } else {
        setImagePadding(-100);
      }
    }

    matchMedia.removeEventListener('change', mediaQueryHandler);

    mediaQueryHandler(matchMedia);
    matchMedia.addEventListener('change', mediaQueryHandler);

    return () => matchMedia.removeEventListener('change', mediaQueryHandler);
  }, []);

  if (!image) return <Loader className="mt-8vh"/>;

  const ratio = image.width / image.height;

  const author = image.user;

  return (
    <div className="image-details">
      <div className="image-details__container"
           style={{ maxWidth: `calc(calc(100vh - 52px) * ${ratio} + ${imagePadding}px)` }}>
        {<div className="image-details__info">
          {author && (
            <UserInfo
              name={author.name}
              loc={author.location}
              pic={author.profile_image.medium}
              profileLink={author.links.html}
            />
          )}
          <div className="image-details__stats">
            {imageDetails && (
              <>
                <p>Likes: <span className="text-medium">{imageDetails?.likes}</span></p>
                <p>Downloads: <span className="text-medium">{imageDetails?.downloads}</span></p>
                <p>Views: <span className="text-medium">{imageDetails?.views}</span></p>
              </>
            )}
            {!imageDetails && (
              <>
                <SkeletBar height={18} width={80} className="mb-5"/>
                <SkeletBar height={18} width={120} className="mb-5"/>
                <SkeletBar height={18} width={100}/>
              </>
            )}
          </div>
        </div>}
        <div className="w-full">
          <a href={image.links.html} target="_blank" rel="noreferrer">
            <LazyImage image={image} width={1800}/>
          </a>
        </div>
      </div>
    </div>
  );
}
