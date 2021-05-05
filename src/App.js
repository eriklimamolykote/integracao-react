// Original author: Leonardo Moura Leitão (with adaptations)
// Contact: https://www.udemy.com/user/leonardomouraleitao/
import React, { Component } from 'react';
import './App.css';
import Contador from './componentes/ContadorValor'

function App() {
  return (
    <div className="App">
      <Contador valorInicial={9876} />
      <Contador />
    </div>
  );
}

export default App;
