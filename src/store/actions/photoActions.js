import { ADD_PHOTO_DETAILS, ADD_PHOTOS } from '../actionTypes';

export const addPhoto = photo => ({ type: ADD_PHOTO_DETAILS, payload: photo });
export const addPhotos = photos => ({ type: ADD_PHOTOS, payload: photos });
