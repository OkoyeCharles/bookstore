/* eslint-disable */
import React from 'react';
import '../styles/Books.css';
import Book from './Book';
import { useSelector } from 'react-redux';

function Books() {
  const [books, setBooks] = useSelector(state => state.books);

  return (
    <div className="books__container">
      {books?.map((book) => <Book title={book.title} author={book.author}/>)}
    </div>
  );
}

export default Books;
