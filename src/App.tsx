import React from 'react';
import Category from './models/category';
import Categories from './components/category_card/categories';

const App = () => {
  const categories: Category[] = [
    { id: 1, title: 'Hats' },
    { id: 2, title: 'Jackets' },
    { id: 3, title: 'Sneakers' },
    { id: 4, title: "Women's" },
    { id: 5, title: "Men's" },
  ];
  return <Categories categories={categories} />;
};

export default App;
