import { createStore, combineReducers } from 'redux';
import photoReducer from './reducers/photoReducer';
import errorReducer from './reducers/errorReducer';

const initialState = window.sessionStorage.getItem('app-state') || '{}';

const store = createStore(combineReducers({
    photos: photoReducer,
    errors: errorReducer,
  }),
  JSON.parse(initialState),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  window.sessionStorage.setItem('app-state', JSON.stringify(store.getState()));
});

export default store;
