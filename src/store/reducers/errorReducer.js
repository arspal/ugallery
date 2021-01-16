import { SET_ERROR } from '../actionTypes';

export default function errorReducer(state = { message: null }, action) {
  switch (action.type) {
    case SET_ERROR:
      return { message: action.payload };
    default:
      return state;
  }
}
