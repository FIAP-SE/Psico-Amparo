import React from 'react';
import './style.css';
import illustration from '../../assets/woman_homepage.png';
import { useNavigate } from "react-router-dom";

export default function MainHome() {
  const navigate = useNavigate();

  return (
    <section className="main-home">
      <div className="main-home-content">
        <div className="main-text">
          <h1>Quando tudo desaba,<br />estar junto faz toda a diferença.</h1>
          <p>
            O PsicoAmparo é um projeto de apoio psicológico remoto para momentos de calamidade e emergência.
            Conectamos pessoas em sofrimento a profissionais capacitados, oferecendo escuta, cuidado e acolhimento quando mais se precisa.
          </p>
          <div className="buttons">
            <button className="btn green" onClick={() => navigate("/agendamento")}>QUERO RECEBER ACOLHIMENTO</button>
            <button className="btn blue">ÁREA DO PSICÓLOGO ASSOCIADO</button>
          </div>
        </div>
        <img src={illustration} alt="Ilustração abraço" className="illustration" />
      </div>
    </section>
  );
}