export const CREATE_BOOK = 'CREATE_BOOK';

export const REMOVE_BOOK = ' REMOVE_BOOK ';

export const createBook = book => ({
  type: CREATE_BOOK,
  bookUpload: book,
});

export const removeBook = book => ({ type: REMOVE_BOOK, bookRemove: book });
