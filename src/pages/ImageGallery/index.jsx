import React, { useEffect } from 'react';
import './styles.scss';
import GalleryItem from './GalleryItem';
import { useDispatch, useSelector } from 'react-redux';
import { addPhotos } from 'store/actions/photoActions';
import { getPhotos } from 'api';

export default function ImageGallery() {
  const photos = useSelector(state => state.photos.list);
  const dispatch = useDispatch();

  useEffect(() => {
    if (photos.length > 0) return;

    async function loadPhotos() {
      const result = await getPhotos();
      dispatch(addPhotos(result));

    }

    loadPhotos();
  }, [photos, dispatch]);

  return (
    <div className="image-gallery">
      {photos.map(
        (image, index) => <GalleryItem key={index} image={image}/>,
      )}
    </div>
  );
}
