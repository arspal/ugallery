import { ADD_PHOTO_DETAILS, ADD_PHOTOS, SET_NEXT_PAGE } from '../actionTypes';

export const addPhoto = photo => ({ type: ADD_PHOTO_DETAILS, payload: photo });
export const addPhotos = photos => ({ type: ADD_PHOTOS, payload: photos });
export const setNextPage = nextPage => ({ type: SET_NEXT_PAGE, payload: nextPage });
