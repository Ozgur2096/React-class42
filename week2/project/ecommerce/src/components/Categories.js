import { useState, useEffect } from 'react';

export const Categories = ({ handleCategoryNameClick, categoryName }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch(
        'https://fakestoreapi.com/products/categories'
      );
      const categoriesAll = await response.json();
      setCategories(categoriesAll);
    };
    getCategories();
  }, []);

  return (
    <div className='categories'>
      {categories.map((category, index) => (
        <div
          key={index}
          className={
            'categories--item' +
            (category === categoryName ? ' categories--item-selected' : '')
          }
          onClick={e => {
            handleCategoryNameClick(e);
          }}
        >
          {category}
        </div>
      ))}
    </div>
  );
};
