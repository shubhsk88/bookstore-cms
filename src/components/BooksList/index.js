import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Book from '../Book';

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
        {books.map(book => (
          <Book key={book.id} book={book} />
        ))}
      </tbody>
    </table>
  );
}
const mapStateToProps = state => ({
  books: state.books,
});
const mapDispatchToProps = dispatch => {
  bindActionCreators({}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
