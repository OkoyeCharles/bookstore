import * as actions from "../actionTypes";
let nextBookId = 0;

export const addBook = (title, author) => {
  return {
    type: actions.ADD_BOOK,
    payload: {
      id: ++nextBookId,
      title,
      author
    }
  }
};

export const removeBook = id => {
  return {
    type: actions.REMOVE_BOOK,
    payload: {
      id
    }
  }
}