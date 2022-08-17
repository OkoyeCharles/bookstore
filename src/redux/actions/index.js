import * as actions from '../actionTypes';

let nextBookId = 0;

export const addBook = (title, author) => ({
  type: actions.ADD_BOOK,
  payload: {
    id: ++nextBookId,
    title,
    author,
  },
});

export const removeBook = (id) => ({
  type: actions.REMOVE_BOOK,
  payload: {
    id,
  },
});

export const checkStatus = () => ({
  type: actions.CHECK_STATUS,
  payload: {
    message: 'Under Construction',
  },
});
