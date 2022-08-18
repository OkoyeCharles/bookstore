import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/actions';
import '../styles/Book.css';

function Book({ id, title, author }) {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book__container">
      <div className="book__info">
        <span className="book__category">Action</span>
        <h2 className="book__title">{title}</h2>
        <div className="book__author">{author}</div>
        <div className="book__action">
          <button type="button">Comments</button>
          <button type="button" onClick={handleRemoveBook}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="book__progress">
        <div className="book__progressCircle">o</div>
        <div>
          <div className="book__progressPercent">64%</div>
          <div className="book__progressStatus">Completed</div>
        </div>
      </div>

      <div className="book__chapter">
        <span>CURRENT CHAPTER</span>
        <div className="book__chapterStatus">
          Chapter&nbsp;
          <span>17</span>
        </div>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

export default Book;
