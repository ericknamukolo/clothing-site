import React from 'react';
import Home from './routes/home/home_route';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navigation_bar/navigation';
import SignIn from './routes/sign-in/sign-in';

const Shop = () => {
  return <div>Hey im a shop</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
