import { FaPlus } from "react-icons/fa";

import "./MenuItem.css";

const MenuItem = ({ item }) => {
  return (
    <article className="menu_item" >
      <div className="menu_item_img">
        <img src={item.imagem} alt={item.title} />
      </div>
      <div className="menu_item_content">
        <div className="menu_item_details">
          <h3>{item.nome || "titulo"}</h3>
          <p>
            {item.descricao ||
              "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor"}
          </p>
        </div>
        <div className="menu_item_action">
          <p>R$ {item.price || "49,99"}</p>
          <button>
            <FaPlus />
          </button>
        </div>
      </div>
    </article>
  );
};

export default MenuItem;
