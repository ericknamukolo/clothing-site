import React from 'react';
import Category from '../../../models/category';
import CategoryCard from './category_card';
import './category.scss';

const Categories: React.FC<{ categories: Category[] }> = (props) => {
  return (
    <div className='categories-container'>
      {props.categories.map((category) => {
        return <CategoryCard key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Categories;
