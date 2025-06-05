import React from "react";
import "./style.css";
import ilustracao from "../../assets/homem_confirmando_consulta_.png";

export default function ConsultaConfirmada({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-content">
          <img src={ilustracao} alt="Consulta confirmada" className="modal-img" />
          <div className="modal-info">
            <h2>SUA CONSULTA<br/>FOI CONFIRMADA!</h2>
            <p className="modal-p">
              Por gentileza clique no link abaixo com 10 minutos de antecedência e aguarde ser atendido.
              Você receberá uma copia das informações via sms.
            </p>
            <p className="modal-link">
              Link da Consulta: <a href="https://www.linkdaconsulta.com" target="_blank" rel="noopener noreferrer">www.linkdaconsulta.com</a>
            </p>
            <div className="modal-details">
              <div>Profissional: XXXXX XXXX XXXX</div>
              <div>Dia: XX/XX</div>
              <div>Horário: XX:XX</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
