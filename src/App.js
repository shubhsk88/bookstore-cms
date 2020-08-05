import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import BooksList from './components/BooksList';
import BooksForm from './components/BooksForm';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <BooksList />
        <BooksForm />
      </div>
    </Provider>
  );
}

export default App;
