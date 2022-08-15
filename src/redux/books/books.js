const books = (state = [], action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        id: action.id,
        title: action.title,
        author: action.author,     
      }
    case "REMOVE_BOOK":
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
}

export default books;