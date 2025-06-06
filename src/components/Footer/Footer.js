import React from "react";
import "./style.css";
import logo from "../../assets/logo_header.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="PsicoAmparo Logo" className="footer-logo-img" />
          </div>
          <div className="footer-contact">
            <div>Contato:<br />contato@psicoamparo.com.br</div>
            <br></br>
            <div>Telefone:<br />(11) 9999-5888</div>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-title">
            Projeto para FIAP - Global Solution
          </div>
          <div className="footer-team">
            André Luiz Viana Ribeiro RM553702<br />
            Bárbara Blauh Schmitt RM554144<br />
            Gustavo Henrique de Jesus RM555354<br />
            Paulo Sergio Morais Gonçalves RM553012<br />
            Silvaldo Stolarz de Lima RM552727
          </div>
        </div>
      </div>
    </footer>
  );
}