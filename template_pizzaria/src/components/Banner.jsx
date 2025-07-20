import { FaWhatsapp } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import Pizza from "../assets/pizza.png";

import "./Banner.css";

const Banner = () => {
  return (
    <main className="main">
      <div className="main_content">
        <h2>As Melhores Pizzas Artesanais da Cidade</h2>
        <p>
          Feitas no forno à lenha com ingredientes frescos e selecionados. Sabor
          autêntico que você nunca esquece.
        </p>
        <div className="main_buttons">
            <button className='btn-what'>
                <FaWhatsapp />
                <span>Pedir no WhatsApp</span>
            </button>
            <button className='btn-menu'>
                <GiHamburgerMenu />
                <span>Ver Cardápio</span>
            </button>
        </div>
      </div>
      <div className="main_image">
      </div>
    </main>
  );
};

export default Banner;
