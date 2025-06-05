import React from "react";
import "./SobreSolucao.css";
import icone1 from "../../assets/icone_coracao_pessoa.png";
import icone2 from "../../assets/icone_coracao_wifi.png";
import icone3 from "../../assets/icone_conversa.png";

export default function SobreSolucao() {
  return (
    <section className="sobre-solucao">
      <div className="sobre-solucao-center">
        <h2>Sobre a solução</h2>
        <div className="solucao-cols">
          <div className="solucao-item">
            <img src={icone1} alt="Apoio psicológico" className="solucao-icon" />
            <h3>Apoio psicológico<br/>em momentos críticos</h3>
            <p>
              Conectamos pessoas afetadas por desastres naturais a psicólogos voluntários, oferecendo escuta qualificada em tempo real.
            </p>
          </div>
          <div className="solucao-item">
            <img src={icone2} alt="Funciona com internet instável" className="solucao-icon" />
            <h3>Funciona mesmo com<br/>internet instável</h3>
            <p>
              A solução conta com modo de funcionamento de acesso leve, pensada para contextos de calamidade e baixa conectividade.
            </p>
          </div>
          <div className="solucao-item">
            <img src={icone3} alt="Simples, seguro e humano" className="solucao-icon" />
            <h3>Simples, seguro e<br/>humano</h3>
            <p>
              Uma experiência intuitiva e acolhedora, com foco na privacidade, agilidade e cuidado emocional de quem mais precisa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


