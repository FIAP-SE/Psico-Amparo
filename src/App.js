import React from 'react';
import Header from './components/Header/Header';
import MainHome from './pages/MainHome/MainHome';
import SobreSolucao from './components/SobreSolucao/SobreSolucao';
import Recursos from './components/Recursos/Recursos';
import Depoimentos from './components/Depoimentos/Depoimentos';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <MainHome />
      <SobreSolucao />
      <Recursos />
      <Depoimentos />
    </div>
  );
}

export default App;
