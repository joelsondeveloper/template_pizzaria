import { FiPhone } from 'react-icons/fi';

import Logo from "../assets/logo.png"

import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header_logo">
        <img src={Logo} alt="logo da pizzaria" />
        <div className="header_logo_brand">
            <h1>Pizza Master</h1>
            <p>Pizzaria Artesanal</p>
        </div>
      </div>
      <nav>
        <ul className="header_nav">
            <li><a href="#menu">Cardápio</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#rating">Avaliações</a></li>
            <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
      <div className="header_button">
        <button>
            <FiPhone />
            <span>
                Pedir Agora
            </span>
        </button>
      </div>
    </header>
  )
}

export default Header
