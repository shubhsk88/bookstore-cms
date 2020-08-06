import React from 'react';
import PropTypes from 'prop-types';
import './book.css';
const Book = ({ book, handleRemoveBook }) => {
  const { title, category } = book;

  return (
    <div className="book-container ">
      <div className="details-container ">
        <div className="category">{category}</div>
        <div className="book-title">{title}</div>
        <div className="author">Suzanne Collins</div>
        <div className="book-action">
          <button className="action">Comments</button>
          <button
            type="button"
            onClick={() => handleRemoveBook(book)}
            className="action"
          >
            Remove
          </button>
          <button className="action">Edit</button>
        </div>
      </div>
      <div className="percentage-container">
        <svg className="progress-ring" height="120" width="120">
          <circle
            className="progress-ring__circle"
            stroke-width="1"
            fill="transparent"
            r="58"
            cx="60"
            cy="60"
          />
        </svg>
        <div className="percentage">
          <div className="number mont">64%</div>
          <div className="percentage-completed mont">Completed</div>
        </div>
      </div>
      <div className="chapter-container">
        <div className="chapter-title">Current Chapter</div>
        <div className="chapter-number">Chapter 17</div>
        <div className="update">Update Progress</div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
