import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaClock,
  FaTimes
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import Logo from "../assets/logo.png";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_main">
        <div className="footer_brand">
          <div className="footer_brand_logo">
            <img src={Logo} alt="logo da pizzaria" />
            <div className="footer_brand_logo_text">
              <h2>Nonna Rosa</h2>
              <p>Pizzaria Artesanal</p>
            </div>
          </div>
          <p className="footer_brand_text">
            Tradição italiana desde 2008. Pizzas artesanais feitas com
            ingredientes selecionados e muito amor, direto do nosso forno à
            lenha para sua mesa.
          </p>
          <ul className="footer_brand_links">
            <li>
              <a href="#" className="logo_insta">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#" className="logo_face">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#" className="logo_what">
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_links links">
          <h2>Links Úteis</h2>
          <ul className="link_list">
            <li>
              <a href="#">Cardápio Completo</a>
            </li>
            <li>
              <a href="#">Sobre a Nonna Rosa</a>
            </li>
            <li>
              <a href="#">Avaliações dos Clientes</a>
            </li>
            <li>
              <a href="#">Como Chegar</a>
            </li>
            <li>
              <a href="#">Trabalhe Conosco</a>
            </li>
          </ul>
        </div>
        <div className="footer_contact links">
          <h2>Contato Rápido</h2>
          <ul className="link_list">
            <li>
              <a href="#">
                <FaPhoneAlt />
                <span>(11) 99999-9999</span>
              </a>
            </li>
            <li>
              <a href="#">
                <MdEmail />
                <span>contato@nonnarosa.com.br</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FaLocationDot />
                <span>Rua das Pizzas, 123 - Centro</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_hours links">
          <h2>Funcionamento</h2>
          <ul className="link_list">
            <li>
                <FaClock />
                <span>Ter-Qui: 18h-23h</span>
            </li>
            <li>
                <FaClock />
                <span>Sex-Dom: 18h-00h</span>
            </li>
            <li className="closed">
                <FaTimes />
                <span>Segunda: Fechado</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_divider"></div>
      <div className="footer_bottom">
        <p>© 2024 Nonna Rosa && JoelsonDeveloper. Todos os direitos reservados.</p>
        <ul className="bottom_links">
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Termos de Uso</a></li>
            <li><a href="#">CNPJ: 12.345.678/0001-90</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
