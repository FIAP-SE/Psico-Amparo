import React from "react";
import "./Depoimentos.css";

export default function Depoimentos() {
  return (
    <section className="depoimentos">
      <h2>Depoimentos</h2>
      <span className="depoimentos-desc">
        O que os usuários estão dizendo sobre o PsicoAmparo
      </span>
      <div className="depoimento-wrapper">
        <button className="depoimento-arrow left" aria-label="Anterior">
          &lt;
        </button>
        <div className="depoimento-card">
          <div className="icon-depoimento">
            {/* SVG do coração */}
            {/* <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 21s-6.1-5.28-8.46-7.64a5.5 5.5 0 017.77-7.77L12 6.34l.69-.75a5.5 5.5 0 117.77 7.77C18.1 15.72 12 21 12 21z"
                stroke="#0088A9"
                strokeWidth="2"
                fill="none"
                strokeLinejoin="round"
              />
            </svg> */}
          </div>
          <p>
            “Tem sido uma experiência maravilhosa onde está me ajudando aos poucos a lidar com minha situação de vulnerabilidade atual.”
          </p>
          <div className="depoimento-autor">
            <strong>JÉSSICA OLIVEIRA</strong>
            <br />
            <span>usuária do PsicoAmparo</span>
          </div>
        </div>
        <button className="depoimento-arrow right" aria-label="Próximo">
          &gt;
        </button>
      </div>
    </section>
  );
}
