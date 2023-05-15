import React from 'react';
import { Route, Routes } from 'react-router';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Orders from './Pages/Orders/Orders';
import Products from './Pages/Products/Products';
import './style/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App__main">
        <Menu />

        <Routes>
          <Route path="*" element={<div className="container"></div>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
