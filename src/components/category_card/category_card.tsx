import React from 'react';
import Category from '../../models/category';
import './category.scss';

const CategoryCard: React.FC<{ category: Category }> = (props) => {
  return (
    <div className='category-container'>
      {/* <img /> */}
      <div className='category-body-container'>
        <h2>{props.category.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryCard;
