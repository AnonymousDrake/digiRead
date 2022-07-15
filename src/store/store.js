import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import searchReducer from '../reducers/searchReducer';
import booksReducer from '../reducers/booksReducer';

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      search: searchReducer,
      books: booksReducer,
    }),
    compose(applyMiddleware(thunk)),
  );

  return store;
};
