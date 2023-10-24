import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Questions from './pages/Questions';
import Contacts from './pages/Contacts';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route path='/' element={
          <Home />
        }/>
        <Route path='catalog' element={
          <Catalog />
        }/>
        <Route path='about' element={
          <About />
        }/>
        <Route path='questions' element={
          <Questions />
        }/>
        <Route path='contacts' element={
          <Contacts />
        }/>
      </Routes>
    </div>
  );
}

export default App;
