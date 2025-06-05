import React from "react";
import "./style.css";
import logo from "../../assets/logo_header.png"; // ajuste o caminho se necessário


export default function Agendamento() {
  return (
    <div className="agendamento-bg">
      <header className="agendamento-header">
        <img src={logo} alt="PsicoAmparo Logo" className="agendamento-logo" />
        <div className="agendamento-links">
          <a href="#">MARCAR HORÁRIO</a>
          <a href="#">CONFIGURAÇÕES</a>
        </div>
      </header>
      <main className="agendamento-main">
        <h1>Marque seu horário</h1>
        <div className="agendamento-search">
          <input type="text" placeholder="Buscar médico" />
          <span className="agendamento-user-circle">B</span>
          <button className="agendamento-search-btn"></button>
        </div>
        <div className="agendamento-label">PRÓXIMOS HORÁRIOS</div>

        {/* CARD */}
        <div className="agendamento-card">
          <div className="agendamento-avatar" />
          <div className="agendamento-card-info">
            <div className="agendamento-card-title">RAFAEL SIQUEIRA VOSS</div>
            <div className="agendamento-card-sub">Psicólogo CRP 05/26598</div>
            <div className="agendamento-card-horario">
              <label htmlFor="horario">Horários:</label>
              <input id="horario" type="text" />
              <span className="agendamento-user-circle small">B</span>
              <button className="agendamento-btn">Marcar Consulta</button>
            </div>
          </div>
        </div>
        {/* CARD 2 (repita para mais médicos) */}
        <div className="agendamento-card">
          <div className="agendamento-avatar" />
          <div className="agendamento-card-info">
            <div className="agendamento-card-title">RAFAEL SIQUEIRA VOSS</div>
            <div className="agendamento-card-sub">Psicólogo CRP 05/26598</div>
            <div className="agendamento-card-horario">
              <label htmlFor="horario2">Horários:</label>
              <input id="horario2" type="text" />
              <span className="agendamento-user-circle small">B</span>
              <button className="agendamento-btn">Marcar Consulta</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
