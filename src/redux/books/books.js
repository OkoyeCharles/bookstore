import * as actions from '../actionTypes';

const books = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_BOOK:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    case actions.REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    case actions.LOAD_BOOKS:
      return action.payload.books;
    default:
      return state;
  }
};

export default books;
