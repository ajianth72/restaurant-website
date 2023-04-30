import Header from './components/Layout/Header';
import React from 'react';
import './App.css';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <>
      <Cart/>
      <Header/>
      <main>
        <Meals/>
      </main>
    </>
  )
}

export default App
