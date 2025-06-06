import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import iconCoracao from '../../assets/icon_coracao.png';
import pessoaComPrancheta from '../../assets/pessoa_com_prancheta.png';
import './style.css';

export default function CadastroPsicologo() {
  return (
    <div className="cadastro-container">
      <Header />

      <main className="cadastro-content">
        <img src={iconCoracao} alt="Ícone coração" className="cadastro-icon-heart" />
        <h2>Vamos criar a sua conta de psicólogo</h2>

        <div className="cadastro-form-wrapper">
          <input type="text" name="nome" placeholder="Nome Completo" />
          <input type="email" name="email" placeholder="Email" />

          <div className="cadastro-row">
            <input type="password" placeholder="Senha" />
            <input type="tel" placeholder="Telefone" />
          </div>

          <div className="cadastro-row">
            <input type="text" placeholder="CRP" />
            <input type="text" placeholder="CPF" />
          </div>

          <input type="text" name="estado" placeholder="Estado" />
        </div>

        <div className="cadastro-cta-wrapper">
          <img
            src={pessoaComPrancheta}
            alt="Pessoa com prancheta"
            className="cadastro-illustration"
          />
          <button className="cadastro-button">Cadastrar</button>
        </div>
      </main>

      <Footer />
    </div>
  );
}