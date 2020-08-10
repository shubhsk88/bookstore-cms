import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from 'react-customizable-progressbar';

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
          <button type="button" className="action">
            Comments
          </button>
          <button
            type="button"
            onClick={() => handleRemoveBook(book)}
            className="action"
          >
            Remove
          </button>
          <button type="button" className="action">
            Edit
          </button>
        </div>
      </div>
      <div className="percentage-container">
        <ProgressBar
          progress={64}
          radius={34}
          strokeWidth={6}
          trackStrokeWidth={6}
          strokeColor="#307bbe"
        />
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
