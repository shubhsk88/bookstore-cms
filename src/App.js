import React from 'react';

import BooksList from './components/BooksList';
import BooksForm from './components/BooksForm';

function App() {
  return (

    <div className="container">
      <BooksList />
      <BooksForm />
    </div>

  );
}

export default App;
