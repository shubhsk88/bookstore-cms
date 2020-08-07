import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Book from '../Book';
import { removeBook, changeFilter } from '../../actions';
import CategoryFilter from '../CategoryFilter';
import './booklist.css';
import { FaUserAlt } from 'react-icons/fa';
function BooksList({ books, removeBook, changeFilter, filter }) {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  const handleFilterChange = (filter) => {
    changeFilter(filter);
  };
  const checkfilter = (filter, books) => {
    if (filter === 'All') return books;
    return books.filter((book) => book.category === filter);
  };

  return (
    <>
      <header>
        <div className="header-title mont">Bookstore CMS</div>
        <button type="button"> Books</button>
        <CategoryFilter handleFilterChange={handleFilterChange} />
        <div>
          <FaUserAlt />
        </div>
      </header>

      <table>
        <tbody>
          {checkfilter(filter, books).map((book) => (
            <Book
              key={book.id}
              book={book}
              handleRemoveBook={handleRemoveBook}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ removeBook, changeFilter }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
