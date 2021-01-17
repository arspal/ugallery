import React, { useEffect, useCallback, useState } from 'react';
import './styles.scss';
import GalleryItem from './GalleryItem';
import { useDispatch, useSelector } from 'react-redux';
import { addPhotos, setNextPage } from 'store/actions/photoActions';
import { setError } from 'store/actions/errorActions';
import { Loader } from 'components';

import { getPhotos } from 'api';

export default function ImageGallery() {
  const dispatch = useDispatch();

  const photos = useSelector(state => state.photos.list);
  const page = useSelector(state => state.photos.nextPage);

  const [isLoading, setIsLoading] = useState(false);

  const loadPhotos = useCallback(async (page, perPage) => {
    try {
      setIsLoading(true);
      const result = await getPhotos(page, perPage);
      dispatch(addPhotos(result));
    } catch (e) {
      dispatch(setError(e.message));
    } finally {
      setIsLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    if (photos.length > 0) return;

    loadPhotos(page, 20).then(() => dispatch(setNextPage(3)));
  }, [page, loadPhotos, photos, dispatch]);

  useEffect(() => {
    function scrollHandler() {
      const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
      if (scrollHeight === clientHeight) return;

      const isPageEnd = scrollTop + clientHeight > scrollHeight - 100;
      if (isPageEnd && !isLoading) {
        loadPhotos(page, 10);
      }
    }

    document.addEventListener('scroll', scrollHandler);

    return () => document.removeEventListener('scroll', scrollHandler);
  }, [loadPhotos, isLoading, page]);

  return (
    <>
      {(photos.length > 0 && (
        <div className="image-gallery">
          {photos.map((image, index) => <GalleryItem key={index} image={image}/>)}
        </div>
      )) || <Loader className="mt-8vh"/>}
    </>
  );
}
