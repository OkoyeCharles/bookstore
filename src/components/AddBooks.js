import React from 'react';
import '../styles/AddBooks.css';

function AddBooks() {
  return (
    <form className="addBooks__form">
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
