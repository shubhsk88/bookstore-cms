import React from 'react';
import Book from '../Book';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function BooksList({ books }) {
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
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </tbody>
    </table>
  );
}
const mapStateToProps = (state) => ({
  books: state.books,
});
const mapDispatchToProps = (dispatch) => {
  bindActionCreators({ createBook, removeBook }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
