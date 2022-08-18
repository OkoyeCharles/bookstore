import React from 'react';
import '../styles/Books.css';
import { useSelector } from 'react-redux';
import Book from './Book';

function Books() {
  const books = useSelector((state) => state.books);

  return (
    <div className="books__container">
      {books?.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </div>
  );
}

export default Books;
