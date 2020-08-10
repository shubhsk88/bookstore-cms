import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './components/App';

const books = [
  { id: 1, title: 'Scream', category: 'Horror' },
  { id: 2, title: 'Bullets', category: 'Action' },
];
const store = createStore(rootReducer, {
  books,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
