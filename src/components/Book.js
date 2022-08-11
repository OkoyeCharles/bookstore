import React from 'react';
import '../styles/Book.css';

function Book({ title, author }) {
  return (
    <div className="book__container">
      <div className="book__info">
        <span className="book__category">Action</span>
        <h2 className="book__title">{title}</h2>
        <div className="book__author">{author}</div>
        <div className="book__action">
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="book__progress">
        <div className="book__progressCircle">Ø</div>
        <div className="book__progressPercent">64%</div>
        <div className="book__progressStatus">Completed</div>
      </div>

      <div className="book__chapter">
        <span>CURRENT PROGRESS</span>
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
