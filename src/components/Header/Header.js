import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/logo_header.png';

export default function Header() {
  return (
    <header className="header">
      <div className="logo-area">
        <img src={logo} alt="PsicoAmparo Logo" className="logo-img" />
      </div>
      <nav className="nav">
        <Link to="/loginpsicologo" className="nav-link">LOGIN</Link>
        <Link to="/psicologoassociado" className="nav-link">ÁREA DO PSICÓLOGO</Link>
      </nav>
    </header>
  );
}