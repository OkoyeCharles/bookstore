import * as actions from '../actionTypes';

const books = (state = [], action) => {
  switch (action.type) {
    case `${actions.ADD_BOOK}/fulfilled`:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    case `${actions.REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.id !== action.payload.id);
    case `${actions.LOAD_BOOKS}/fulfilled`:
      return action.payload.books; // payload: { books : books[] }
    default:
      return state;
  }
};

export default books;
