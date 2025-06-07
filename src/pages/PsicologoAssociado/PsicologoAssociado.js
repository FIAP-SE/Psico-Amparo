import React from 'react';
import './style.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import rafaelImg from '../../assets/perfis/rafael.png';
import alessandraImg from '../../assets/perfis/alessadra.png';




const PsicologoAssociado = () => {
  return (  
    <div> 
        
        <Header />
         
        <div className="perfil-container">
        <div className="perfil-sidebar">
            <div className="foto-placeholder"></div>
            <p><strong>Nome:</strong> Alexandre Floriani Goulart</p>
            <p><strong>Email:</strong> alexdregoulart@gmail.com</p>
            <p><strong>Telefone:</strong> (11) 99815-5632</p>
            <p><strong>CPF:</strong> 296.581.652-36</p>
            <p><strong>Estado:</strong> São Paulo</p>
            <p><strong>Cidade:</strong> São Paulo</p>
            <button className="botao-editar">ALTERAR DADOS</button>
        </div>

        <div className="perfil-agendamentos">
            <div className="agendamento-section">
            <h4>PRÓXIMO HORÁRIO</h4>
            <div className="agendamento-card">
                <img src={rafaelImg} alt="Foto Rafael" className="foto-circulo" />                <div className="agendamento-info">
                <p><strong>RAFAEL SIQUEIRA VOSS</strong></p>
                <p>Psicólogo CRP 05/26598</p>
                <p>Dia 15/06 às 11:30</p>
                </div>
                <button className="botao-sala">Entrar na sala virtual</button>
            </div>
            </div>

            <div className="agendamento-section">
            <h4>HISTÓRICO</h4>

            <div className="agendamento-card">
            <img src={rafaelImg} alt="Foto Rafael" className="foto-circulo" />
                <div className="agendamento-info">
                <p><strong>RAFAEL SIQUEIRA VOSS</strong></p>
                <p>Psicólogo CRP 05/26598</p>
                <p>Dia 10/05 às 14:00</p>
                </div>
            </div>

            <div className="agendamento-card">
                <img src={alessandraImg} alt="Foto Alessandra" className="foto-circulo" />                <div className="agendamento-info">
                <p><strong>ALESSANDRA MARINHO ALVES</strong></p>
                <p>Psicólogo CRP 02/33856</p>
                <p>Dia 31/04 às 8:50</p>
                </div>
            </div>
            </div>
        </div>
        </div>
        <Footer />
    </div>
          

  );
};

export default PsicologoAssociado;
