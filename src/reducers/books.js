import { CREATE_BOOK } from '../actions';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return state;
    default:
      return state;
  }
};

export default booksReducer;
