import React from "react";
import "./Recursos.css";
import imagemPessoaCelular from "../../assets/icone_celular.png";

export default function Recursos() {
  return (
    <section className="recursos">
      <h2>Recursos</h2>
      <span className="recursos-desc">Como o PsicoAmparo funciona no apoio emocional</span>
      <div className="recursos-cols">
        <div className="recursos-group">
          <div>
            <h3>Apoio psicológico<br />em momentos críticos</h3>
            <p>Conectamos pessoas afetadas por desastres naturais a psicólogos voluntários, oferecendo escuta qualificada em tempo real.</p>
          </div>
          <div>
            <h3>Rede de profissionais<br />voluntários</h3>
            <p>Psicólogos engajados com seu tempo e escuta para apoiar emocionalmente quem vive momentos extremos.</p>
          </div>
        </div>
        <div className="recursos-img">
          <img src={imagemPessoaCelular} alt="celular" />
          <div className="icon-recursos" />
        </div>
        <div className="recursos-group">
          <div>
            <h3>Foco em contextos<br />de calamidade</h3>
            <p>Especialmente desenvolvido para apoiar pessoas afetadas por desastres, emergências e crises humanitárias.</p>
          </div>
          <div>
            <h3>Confidencialidade garantida</h3>
            <p>Todas as conversas são protegidas por sigilo e respeito absoluto à privacidade da pessoa atendida.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
