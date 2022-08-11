/* eslint-disable */
import React, { useState } from 'react';
import '../styles/Books.css';
import Book from './Book';

function Books() {
  const [books, setBooks] = useState();

  return (
    <div className="books__container">
      {books?.map((book) => <Book title={book.title} author={book.author}/>)}
    </div>
  );
}

export default Books;
