import { ADD_PHOTO_DETAILS, ADD_PHOTOS, SET_NEXT_PAGE } from '../actionTypes';

export default function photoReducer(photos = { list: [], details: {}, nextPage: 1 }, action) {
  switch (action.type) {
    case ADD_PHOTO_DETAILS:
      return {
        list: [...photos.list],
        details: {
          ...photos.details,
          [action.payload.id]: { ...action.payload },
        },
        nextPage: photos.nextPage,
      };
    case ADD_PHOTOS:
      return {
        list: [...photos.list, ...action.payload], details: {
          ...photos.details,
        },
        nextPage: photos.nextPage + 1,
      };
    case SET_NEXT_PAGE:
      return { ...photos, nextPage: action.payload };
    default:
      return photos;
  }
}
