import React from "react";
import "./Depoimentos.css";
import coracao from "../../assets/icon_coracao.png";

export default function Depoimentos() {
  return (
    <section className="depoimentos">
      <h2>Depoimentos</h2>
      <span className="depoimentos-desc">
        O que os usuários estão dizendo sobre o PsicoAmparo
      </span>
      <div className="depoimento-wrapper">
        <button className="depoimento-arrow" aria-label="Anterior">
          &lt;
        </button>
        <div className="depoimento-card">
          <img src={coracao} alt="Depoimento" className="icon-coracao" />
          <p>
            <em>
              “Tem sido uma experiência maravilhosa onde está me ajudando aos poucos a lidar com minha situação de vulnerabilidade atual.”
            </em>
          </p>
          <div className="depoimento-autor">
            <strong>JÉSSICA OLIVEIRA</strong>
            <br />
            <span>usuária do PsicoAmparo</span>
          </div>
        </div>
        <button className="depoimento-arrow" aria-label="Próximo">
          &gt;
        </button>
      </div>
    </section>
  );
}