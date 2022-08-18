import { createAsyncThunk } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import * as actions from '../actionTypes';

const convertToBookArray = (axiosdata) => Object.entries(axiosdata).map((item) => ({
  id: item[0],
  ...item[1][0],
})) || [];

export const loadBooks = createAsyncThunk(actions.LOAD_BOOKS, async () => {
  const response = await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0Y2s4rP2sXykAeSaLGtH/books',
  );
  const data = await response.json();
  // Convert Data to usable format
  const books = convertToBookArray(data);

  return { books };
});

export const addBook = createAsyncThunk(
  actions.ADD_BOOK,
  async ({ title, author }) => {
    const id = v4();
    await fetch(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0Y2s4rP2sXykAeSaLGtH/books',
      {
        method: 'POST',
        body: JSON.stringify({
          item_id: id,
          author,
          title,
          category: 'null',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return {
      id,
      title,
      author,
      category: 'null',
    };
  },
);

export const removeBook = createAsyncThunk(actions.REMOVE_BOOK, async (id) => {
  await fetch(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0Y2s4rP2sXykAeSaLGtH/books/${id}`,
    {
      method: 'DELETE',
      body: JSON.stringify({
        item_id: id,
      }),
    },
  );
  return { id };
});

export const checkStatus = () => ({
  type: actions.CHECK_STATUS,
  payload: {
    message: 'Under Construction',
  },
});
