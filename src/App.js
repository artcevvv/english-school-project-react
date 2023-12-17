import React from 'react';
import './App.css';
import { Navbar } from './pages/Global/exports'
import Main from './Main.js';
import { Footer } from './pages/Home/containers/exports.js';

const App = () => {
  return (
    <div className="App">
        <Navbar/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default App