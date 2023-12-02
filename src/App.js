import React from 'react';
import './App.css';
import { Navbar } from './pages/Global/exports'
import Main from './Main.js';

const App = () => {
  return (
    <div className="App">
        <Navbar/>
        <Main/>
    </div>
  )
}

export default App