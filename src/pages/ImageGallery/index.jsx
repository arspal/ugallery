import React, { useEffect, useCallback, useState } from 'react';
import './styles.scss';
import GalleryItem from './GalleryItem';
import { useDispatch, useSelector } from 'react-redux';

import { addPhotos, setNextPage } from 'store/actions/photoActions';
import { setError } from 'store/actions/errorActions';

import { getPhotos } from 'api';

export default function ImageGallery() {
  const dispatch = useDispatch();

  const photos = useSelector(state => state.photos.list);
  const page = useSelector(state => state.photos.nextPage);

  const [isLoading, setIsLoading] = useState(false);

  const loadPhotos = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await getPhotos(page);
      dispatch(addPhotos(result));
    } catch (e) {
      dispatch(setError(e.message));
    } finally {
      setIsLoading(false);
    }
  }, [page, dispatch]);

  useEffect(() => {
    if (photos.length > 0) return;

    loadPhotos();
    dispatch(setNextPage(1));
  }, [loadPhotos, photos, dispatch]);

  useEffect(() => {
    function scrollHandler() {
      const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
      const isPageEnd = scrollTop + clientHeight > scrollHeight - 100;
      if (isPageEnd && !isLoading) {
        loadPhotos();
      }
    }

    document.addEventListener('scroll', scrollHandler);

    return () => document.removeEventListener('scroll', scrollHandler);
  }, [loadPhotos, isLoading, page]);

  return (
    <div className="image-gallery">
      {photos.map((image, index) => <GalleryItem key={index} image={image}/>)}
    </div>
  );
}
