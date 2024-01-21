import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import ProductList from './components/ProductList';

function App() {
  return (
    <Router>
      <>
        <MenuBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/smartphones" element={<ProductList category='smartphones' />} />
            <Route path="/laptops" element={<ProductList category='laptops' />} />
            <Route path="/fragrances" element={<ProductList category='fragrances' />} />
          </Route>
          <Route path="/skincare" element={<ProductList category='skincare' />} />
          <Route path="/groceries" element={<ProductList category='groceries' />} />
          <Route path="/home-decoration" element={<ProductList category='home-decoration' />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
