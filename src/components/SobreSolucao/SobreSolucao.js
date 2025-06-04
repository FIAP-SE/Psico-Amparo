import React from "react";
import "./SobreSolucao.css";
//ícones

export default function SobreSolucao() {
  return (
    <section className="sobre-solucao">
      <h2>Sobre a solução</h2>
      <div className="solucao-cols">
        <div className="solucao-item">
          {/* <img src={icone1} alt="Apoio" /> */}
          <div className="icon icon1" /> {/* Placeholder para ícone */}
          <h3>Apoio psicológico<br />em momentos críticos</h3>
          <p>
            Conectamos pessoas afetadas por desastres naturais a psicólogos voluntários, oferecendo escuta qualificada em tempo real.
          </p>
        </div>
        <div className="solucao-item">
          {/* <img src={icone2} alt="Internet instável" /> */}
          <div className="icon icon2" />
          <h3>Funciona mesmo com<br />internet instável</h3>
          <p>
            A solução conta com modo de funcionamento de acesso leve, pensada para contextos de calamidade e baixa conectividade.
          </p>
        </div>
        <div className="solucao-item">
          {/* <img src={icone3} alt="Seguro e humano" /> */}
          <div className="icon icon3" />
          <h3>Simples, seguro e<br />humano</h3>
          <p>
            Uma experiência intuitiva e acolhedora, com foco na privacidade, agilidade e cuidado emocional de quem mais precisa.
          </p>
        </div>
      </div>
    </section>
  );
}
