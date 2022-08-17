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
const convertToBookArray = (axiosdata) => Object.entries(axiosdata).map((item) => ({
  id: parseInt(item[0], 10),
  ...item[1][0],
})) || [];

export const loadBooks = async (dispatch) => {
  const response = await axios.get(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/m0ekECJs3bOXjlfILUsO/books',
  );
  // Convert Data to usable format
  const books = convertToBookArray(response.data);

  dispatch({
    type: actions.LOAD_BOOKS,
    payload: {
      books,
    },
  });
  nextBookId += books.length;
};

export const addBook = (title, author) => (dispatch) => {
  // Update store at API.
  axios.post(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/m0ekECJs3bOXjlfILUsO/books',
    {
      item_id: ++nextBookId,
      title,
      author,
      category: 'null',
    },
  );
  // Dispatch event locally
  dispatch({
    type: actions.ADD_BOOK,
    payload: {
      id: ++nextBookId,
      title,
      author,
      category: 'null',
    },
  });
};

export const removeBook = (id) => (dispatch) => {
  fetch(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/m0ekECJs3bOXjlfILUsO/books/${id}`,
    {
      method: 'DELETE',
      body: JSON.stringify({
        item_id: id,
      }),
    },
  ).catch((err) => console.error(err));

  dispatch({
    type: actions.REMOVE_BOOK,
    payload: {
      id,
    },
  });
};

export const checkStatus = () => ({
  type: actions.CHECK_STATUS,
  payload: {
    message: 'Under Construction',
  },
});
