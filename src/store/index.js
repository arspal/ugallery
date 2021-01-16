import { createStore, combineReducers } from 'redux';
import photoReducer from './reducers/photoReducer';

const initialState = window.sessionStorage.getItem('app-state') || '{}';

const store = createStore(combineReducers({
    photos: photoReducer,
  }),
  JSON.parse(initialState),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  window.sessionStorage.setItem('app-state', JSON.stringify(store.getState()));
});

export default store;
