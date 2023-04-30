import Header from './components/Layout/Header';
import React from 'react';
import './App.css';
import Meals from './components/Meals/Meals';

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <Meals/>
      </main>
    </>
  )
}

export default App
