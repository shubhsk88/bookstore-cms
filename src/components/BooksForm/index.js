import React from 'react';

const BooksForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  return (
    <form onSubmit={'do it later'}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" onChange={'sjdk'} />
      <label htmlFor="categories">Category</label>
      <select name="categories" id="categories">
        {categories.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;
