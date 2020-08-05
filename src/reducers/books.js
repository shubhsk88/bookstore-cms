import { CREATE_BOOK } from '../actions';

const initialState = [
  { id: 1, title: 'Scream', category: 'Horror' },
  { id: 2, title: 'Bullets', category: 'Action' },
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return state;
    default:
      return state;
  }
};

export default booksReducer;
