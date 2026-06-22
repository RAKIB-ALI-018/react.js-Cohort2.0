import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';
import Products from './Pages/Products';
import Home from './Pages/Home';
import ProductDetail from './Pages/ProductDetail';

const App = () => {
  


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
