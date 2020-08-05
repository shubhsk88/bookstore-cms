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
    <form action="post">
      <label htmlFor="title">
        Title
        <input type="text" id="title" />
      </label>

      <label htmlFor="categories">
        Category
        <select name="categories" id="categories">
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;
