import "./Menu.css"
import MenuItem from "./MenuItem"

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <header className="menu_header">
        <h2>Nosso Cardápio</h2>
        <p>Pizzas artesanais feitas com amor e ingredientes premium</p>
      </header>
      <div className="menu_main">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  )
}

export default Menu
