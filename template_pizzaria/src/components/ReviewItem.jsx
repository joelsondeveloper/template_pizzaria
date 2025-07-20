import { FaStar } from "react-icons/fa";

import "./ReviewItem.css";

const ReviewItem = ({ logo, name, rating, description }) => {
  return (
    <article className="reviewItem">
      <header className="reviewItem_header">
        <div className="reviewItem_avatar">
          {logo ? <span>{logo}</span> : <span>m</span>}
        </div>
          <div className="reviewItem_classification">
            {name ? <p>{name}</p> : <p>Maria Silva</p>}
            <div className="reviewItem_bar">
            <div className="star-empty">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="star-full" style={{ width: "90%" }}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          </div>
      </header>
      <p>
        {description
          ? description
          : "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor"}
      </p>
    </article>
  );
};

export default ReviewItem;
