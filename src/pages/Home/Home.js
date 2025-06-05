import React from 'react';
import Header from '../../components/Header/Header';
import MainHome from '../../components/MainHome/MainHome';
import SobreSolucao from '../../components/SobreSolucao/SobreSolucao';
import Recursos from '../../components/Recursos/Recursos';
import Depoimentos from '../../components/Depoimentos/Depoimentos';
import Footer from '../../components/Footer/Footer';

import './style.css';

function Home() {
  return (
    <div>
      <Header />
      <MainHome />
      <SobreSolucao />
      <Recursos />
      <Depoimentos />
      <Footer />
    </div>
  );
}

export default Home;
