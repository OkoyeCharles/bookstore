import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import books from './books/books';
import categories from './categories/categories';

// Initialize Root Reducer
const rootReducer = combineReducers({
  books,
  categories,
});

// Add Middleware (Thunk) to the reducer
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
