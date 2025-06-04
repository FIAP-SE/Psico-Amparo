import React from 'react';
import './style.css';
// import logo from '../assets/logo.svg'; 

export default function Header() {
  return (
    <header className="header">
      <div className="logo-area">
        {/* <img src={logo} alt="PsicoAmparo Logo" className="logo-img" /> */}
        <span className="logo-text">PsicoAmparo</span>
      </div>
      <nav className="nav">
        <a href="#" className="nav-link">LOGIN</a>
        <a href="#" className="nav-link">ÁREA DO PSICÓLOGO</a>
      </nav>
    </header>
  );
}
