import "./style.css";
import logo from "../../assets/logo_header.png";
import lupa from "../../assets/lupa.png"; // ← Import da imagem
import React, { useState } from "react";
import ConsultaConfirmada from "../../components/Confirmacao/Confirmacao";

export default function Agendamento() {
  const [modalOpen, setModalOpen] = useState(false);

  function handleConfirmar() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

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
          <img src={lupa} alt="Ícone de lupa" className="agendamento-lupa-icon" />
          <button className="agendamento-search-btn"></button>
        </div>
        <div className="agendamento-label">PRÓXIMOS HORÁRIOS</div>

        {/* CARD 1 */}
        <div className="agendamento-card">
          <div className="agendamento-avatar" />
          <div className="agendamento-card-info">
            <div className="agendamento-card-title">RAFAEL SIQUEIRA VOSS</div>
            <div className="agendamento-card-sub">Psicólogo CRP 05/26598</div>
            <div className="agendamento-card-horario">
              <label htmlFor="horario">Horários:</label>
              <input id="horario" type="datetime-local" className="agendamento-datetime" />
              <button className="agendamento-btn" onClick={handleConfirmar}>Marcar Consulta</button>
              {modalOpen && <ConsultaConfirmada onClose={handleCloseModal} />}
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="agendamento-card">
          <div className="agendamento-avatar" />
          <div className="agendamento-card-info">
            <div className="agendamento-card-title">RAFAEL SIQUEIRA VOSS</div>
            <div className="agendamento-card-sub">Psicólogo CRP 05/26598</div>
            <div className="agendamento-card-horario">
              <label htmlFor="horario2">Horários:</label>
              <input id="horario2" type="datetime-local" className="agendamento-datetime" />
              <button className="agendamento-btn" onClick={handleConfirmar}>Marcar Consulta</button>
              {modalOpen && <ConsultaConfirmada onClose={handleCloseModal} />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}