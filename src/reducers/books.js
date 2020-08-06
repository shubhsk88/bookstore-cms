import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const initialState = [
  { id: 1, title: 'Scream', category: 'Horror' },
  { id: 2, title: 'Bullets', category: 'Action' },
];

const remove = (book, state) => {
  const index = state.findIndex((lookBook) => lookBook.id === book.id);
  state.splice(index, 1);
  return state;
};

const booksReducer = (state = initialState, action) => {
  const { book, type } = action;

  switch (type) {
    case CREATE_BOOK:
      return [...state, book];
    case REMOVE_BOOK:
      return remove(book, state);

    default:
      return state;
  }
};

export default booksReducer;
