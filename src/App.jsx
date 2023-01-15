
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import './App.scss';

import Compra from './pages/compra';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Midia from './pages/midia';
import Comunidade from './pages/comunidade';

function App() {
  return (
   
        <Router> 
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/midia" element={<Midia/>}/>
            <Route path="/comunidade" element={<Comunidade/>}/>
            <Route path="/compra" element={<Compra/>}/>
          </Routes>
        </Router>   
  

  );
}

export default App;
