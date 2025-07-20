import "./Menu.css"
import MenuItem from "./MenuItem"

const Menu = () => {
  return (
    <section className="menu">
      <header className="menu_header">
        <h2>Nosso Cardápio</h2>
        <p>Pizzas artesanais feitas com amor e ingredientes premium</p>
      </header>
      <main className="menu_main">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </main>
    </section>
  )
}

export default Menu
