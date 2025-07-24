import "./Menu.css";
import MenuItem from "./MenuItem";
import { comidas } from "../data/db";

const Menu = () => {
  console.log(comidas);

  return (
    <section className="menu" id="menu">
      <header className="menu_header">
        <h2>Nosso Cardápio</h2>
        <p>Pizzas artesanais feitas com amor e ingredientes premium</p>
      </header>
      <div className="menu_main">
        {comidas.map((comida, index) => (
          <MenuItem key={index} item={comida} />
        ))}
      </div>
    </section>
  );
};

export default Menu;
