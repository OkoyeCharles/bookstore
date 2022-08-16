import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/actions';
import '../styles/AddBooks.css';

function AddBooks() {
  const dispatch = useDispatch();

  const validated = (str) => !!str.trim();

  const handleAddBook = (event) => {
    event.preventDefault();
    const { title } = event.target.elements;
    const { author } = event.target.elements;

    if (validated(title.value) && validated(author.value)) {
      dispatch(addBook(title.value, author.value));
      title.value = '';
      author.value = '';
    }
  };

  return (
    <form className="addBooks__form" onSubmit={handleAddBook}>
      <h2 className="addBooks__title">ADD NEW BOOK</h2>
      <fieldset>
        <input type="text" name="title" placeholder="Book title" />
        <input type="text" name="author" placeholder="Book author" />
        <button type="submit">ADD BOOK</button>
      </fieldset>
    </form>
  );
}

export default AddBooks;
