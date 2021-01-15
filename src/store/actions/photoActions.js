import { ADD_PHOTO, ADD_PHOTOS } from '../actionTypes';

export const addPhoto = photo => ({ type: ADD_PHOTO, payload: photo });
export const addPhotos = photos => ({ type: ADD_PHOTOS, payload: photos });
