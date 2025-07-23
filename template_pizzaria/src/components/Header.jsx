import { useState } from 'react';

import { FiPhone } from 'react-icons/fi';

import Logo from "../assets/logo.png"

import "./Header.css"

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const revertMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="header_logo">
        <img src={Logo} alt="logo da pizzaria" />
        <div className="header_logo_brand">
            <h1>Pizza Master</h1>
            <p>Pizzaria Artesanal</p>
        </div>
      </div>
      <nav className={isMenuOpen ? "open" : "close"}>
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
      <div className="header_menu">
        <span htmlFor="menu_btn" onClick={revertMenu}>
          <div></div>
          <div></div>
          <div></div>
        </span>
      </div>
      </div>
    </header>
  )
}

export default Header
