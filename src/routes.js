import { lazy } from 'react';
import { URL } from 'const';

const ImageGallery = lazy(() => import('pages/ImageGallery'));
const ImageDetails = lazy(() => import('pages/ImageDetails'));

const routes = [
  { id: 'PHOTOS', path: URL.PHOTOS, Component: ImageGallery, exact: true },
  { id: 'PHOTO_DETAILS', path: URL.PHOTO_DETAILS, Component: ImageDetails, exact: false },
];

export default routes;
