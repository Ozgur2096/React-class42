import { useState } from 'react';
import categories from '../fake-data/all-categories';

export const Categories = ({ handleCategoryNameClick }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);

  const handleClickForBackgroundColor = index => {
    setSelectedCategoryIndex(index);
  };

  return (
    <div className='categories'>
      {categories.map((category, index) => (
        <div
          key={index}
          className={
            selectedCategoryIndex === index
              ? 'categories--item categories--item-selected'
              : 'categories--item'
          }
          onClick={e => {
            handleClickForBackgroundColor(index);
            handleCategoryNameClick(e);
          }}
        >
          {category}
        </div>
      ))}
    </div>
  );
};
