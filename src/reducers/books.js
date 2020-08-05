const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, {
        id: action.id,
        title: action.title,
        category: action.category,
      }];
    case 'LIST_BOOKS':
      return state;
    default:
      return state;
  }
};

export default booksReducer;
