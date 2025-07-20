import Logo from "../assets/logo.png";

import "./About.css";
import Stats from "./Stats";

const About = () => {
  return (
    <section className="about">
      <div className="about_image">
        <img src={Logo} alt="imagem do restaurante" />
      </div>
      <div className="about_content">
        <h2>Sobre a Nonna rosa</h2>
        <p>
          Há mais de 15 anos trazendo o sabor autêntico da Itália para sua mesa.
          Nossa pizzaria familiar combina receitas tradicionais com ingredientes
          frescos e selecionados.
        </p>
        <p>
          Nosso forno à lenha, importado diretamente de Nápoles, garante o sabor
          único e a textura perfeita que só uma pizza artesanal pode oferecer.
        </p>
        <div className="about_stats">
            <Stats number={15} text={"Anos de tradição"}/>
            <Stats number={50} text={"Sabores Únicos"}/>
            <Stats number={1000} text={"Clientes Satisfeitos"}/>
        </div>
      </div>
    </section>
  );
};

export default About;
