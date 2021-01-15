import { createStore, combineReducers } from 'redux';
import photoReducer from './reducers/photoReducer';

const store = createStore(combineReducers({
    photos: photoReducer,
  },
), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
