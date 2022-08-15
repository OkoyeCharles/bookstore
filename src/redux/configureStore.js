import { combineReducers } from '@reduxjs/toolkit';
import books from './books/books';
import categories from './categories/categories';

export default combineReducers({
  books,
  categories,
});