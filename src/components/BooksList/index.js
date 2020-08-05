import React from 'react';
import Book from '../Book';

function BooksList() {
  const books = [{ id: 1, title: 'hey', category: 'wow' }, { id: 2, title: 'wasd', category: 'ieaue' }];
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      {books.map(book => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          category={book.category}
        />
      ))}
    </table>
  );
}

export default BooksList;
