import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import iconCoracao from '../../assets/icon_coracao.png';
import pessoaNoCelular from '../../assets/pessoa_no_celular.png';
import './style.css';

export default function LoginPsicologo() {
  return (
    <div className="login-container">
      <Header />

      <main className="login-content">
        <img src={iconCoracao} alt="Ícone coração" className="icon-heart" />
        <h2>Seja bem-vindo,<br />a sua escuta transforma vidas!</h2>

        <input type="email" placeholder="Digite seu email" />
        <input type="password" placeholder="Digite sua senha" />
        <button>ENTRAR</button>

        <div className="links">
          <a href="#">Esqueci minha senha</a>
          <a href="#">Ainda não sou cadastrado</a>
        </div>

        <div className="access-section">
          <p className="sub-text">
            Acesse sua conta e <br />
            esteja presente onde <br />
            mais importa.
          </p>
          <img
            src={pessoaNoCelular}
            alt="Pessoa no celular"
            className="login-illustration"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}