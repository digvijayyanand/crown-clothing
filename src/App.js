import React from 'react';

import { Route, Routes } from 'react-router-dom';

import './App.css';

import obj from './pages/homepage/homepage.component';

import ShopPage from './pages/shop/shop.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<obj.home />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </div>)
}

//all the routes should be inside routes
//extra attribute exact can be added with defination true after which the route will only be loaded if the path matches exactly

export default App;
