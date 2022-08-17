import axios from 'axios';
import * as actions from '../actionTypes';

let nextBookId = 0;

// export const loadBooks = createAsyncThunk(actions.LOAD_BOOKS, async () => {
//   try {
//     const response = axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/m0ekECJs3bOXjlfILUsO/books');
//     return response;
//   } catch (err) {
//     return err.message;
//   }
// });
export const loadBooks = async (dispatch) => {
  const response = await axios.get(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/m0ekECJs3bOXjlfILUsO/books',
  );
  dispatch({
    type: actions.LOAD_BOOKS,
    payload: {
      books: Object.entries(response.data),
    },
  });
};

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
