import React, { useEffect, useState } from 'react';
import './styles.scss';
import GalleryItem from './GalleryItem';
import { useDispatch, useSelector } from 'react-redux';

import { addPhotos } from 'store/actions/photoActions';

import { getPhotos } from 'api';

export default function ImageGallery() {
  const dispatch = useDispatch();

  const photos = useSelector(state => state.photos.list);
  const page = useSelector(state => state.photos.nextPage);

  const [isLoading, setIsLoading] = useState(false);

  async function loadPhotos() {
    setIsLoading(true);
    const result = await getPhotos(page);
    dispatch(addPhotos(result));
    setIsLoading(false);
  }

  useEffect(() => {
    if (photos.length > 0) return;

    loadPhotos();
  }, [photos, dispatch]);

  useEffect(() => {
    function scrollHandler() {
      const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
      const isPageEnd = scrollTop + clientHeight > scrollHeight - 5;
      if (isPageEnd && !isLoading) {
        loadPhotos();
      }
    }

    document.addEventListener('scroll', scrollHandler);

    return () => document.removeEventListener('scroll', scrollHandler);
  }, [isLoading, page]);

  return (
    <div className="image-gallery">
      {photos.map(image => <GalleryItem key={image.id} image={image}/>)}
    </div>
  );
}
