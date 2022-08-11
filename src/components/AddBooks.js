import React from 'react';

function AddBooks() {
  return (
    <form className="addBooks__form">
      <h2 className="addBooks__title">ADD NEW BOOK</h2>
      <input type="text" name="book" />
      <select name="category">
        <option value="category">Category</option>
        <option value="action">Action</option>
        <option value="drama">Drama</option>
        <option value="scifi">Scifi</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  );
}

export default AddBooks;
