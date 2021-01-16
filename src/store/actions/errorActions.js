import { SET_ERROR } from '../actionTypes';

export const setError = errorMessage => ({ type: SET_ERROR, payload: errorMessage });
