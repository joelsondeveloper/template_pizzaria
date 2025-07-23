import { FaClock, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import "./Location.css";

const Location = () => {
  return (
    <section className="location" id="contact">
      <header className="Location_header">
        <h2>Onde nos encontrar</h2>
        <p>Venha nos visitar ou peça delivery</p>
      </header>
      <div className="Location_main">
        <div className="location_map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3290.0643105709687!2d-35.03108400000004!3d-8.295119000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTcnNDIuNCJTIDM1wrAwMSc1MS45Ilc!5e1!3m2!1spt-BR!2sbr!4v1753121844188!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="location_contact">
          <section className="contact_address">
            <header className="contact_address_header">
              <div className="address_header_logo">
                <FaLocationDot />
              </div>
              <div className="address_header_content">
                <h3>Nosso Endereço</h3>
                <p>Venha nos visitar pessoalmente</p>
              </div>
            </header>
            <div className="contact_address_main">
              <p>Rua das Pizzas, 123 - Centro</p>
              <p>São Paulo, SP - CEP: 01234-567</p>
              <p>Próximo ao Shopping Center Plaza</p>
            </div>
          </section>
          <section className="contact_hours">
            <header className="contact_hours_header">
              <div className="hours_header_logo">
                <FaClock />
              </div>
              <div className="hours_header_content">
                <h3>Horário de Funcionamento</h3>
                <p>Estamos abertos para você</p>
              </div>
            </header>
            <ul className="contact_hours_list">
              <li>
                <span>Terça a Quinta-feira</span>
                <span className="open">18h00 - 23h00</span>
              </li>
              <li>
                <span>Sexta a Domingo</span>
                <span className="open">18h00 - 00h00</span>
              </li>
              <li>
                <span>Segunda-feira</span>
                <span className="closed">Fechado</span>
              </li>
            </ul>
          </section>
          <section className="contact_contact">
            <header className="contact_contact_header">
              <div className="contact_header_logo">
                <FaPhoneAlt />
              </div>
              <div className="contact_header_content">
                <h3>Entre em Contato</h3>
                <p>Faça seu pedido ou tire dúvidas</p>
              </div>
            </header>
            <div className="contact_contact_main">
              <div className="contact_phone">
                <div className="contact_phone_info">
                  <FaPhoneAlt />
                  <p>(11) 99999-9999</p>
                </div>
                <p className="whatsapp_tag">WhatsApp</p>
              </div>
              <div className="contact_email">
                <MdEmail />
                <p>contato@nonnarosa.com.br</p>
              </div>
            </div>
          </section>
          <div className="contact_buttons">
            <button className="btn_what">
              <FaWhatsapp />
              <span>Pedir no WhatsApp</span>
            </button>
            <button className="btn_phone">
              <FaPhoneAlt />
              <span>Ligar Agora</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
