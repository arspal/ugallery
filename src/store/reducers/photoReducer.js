import { ADD_PHOTO, ADD_PHOTOS } from '../actionTypes';

export default function photoReducer(photos = { list: [], details: {} }, action) {
  switch (action.type) {
    case ADD_PHOTO:
      return {
        list: [...photos.list],
        details: { ...photos.details, [action.payload.id]: { ...action.payload } },
      };
    case ADD_PHOTOS:
      return {
        list: [...photos.list, ...action.payload], details: {
          ...photos.details,
        },
      }
        ;
    default:
      return photos;
  }
}
