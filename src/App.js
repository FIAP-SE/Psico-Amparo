import React from 'react';
import Home from './pages/Home/Home';
import Agendamento from './pages/Agendamento/Agendamento';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PsicologoAssociado from './pages/PsicologoAssociado/PsicologoAssociado';
import LoginPsicologo from './pages/LoginPsicologo/LoginPsicologo';
import CadastroPsicologo from './pages/CadastroPsicologo/CadastroPsicologo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/PsicologoAssociado" element={<PsicologoAssociado />} />  
        <Route path="/LoginPsicologo" element={<LoginPsicologo />} />  
        <Route path="/CadastroPsicologo" element={<CadastroPsicologo />} />
      </Routes>
    </Router>
  );
}

export default App;

