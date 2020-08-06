import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Book from '../Book';
import { removeBook } from '../../actions';

function BooksList({ books, removeBook }) {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
        ))}
      </tbody>
    </table>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});
const mapDispatchToProps = dispatch => bindActionCreators({ removeBook }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
