import { useState } from "react";

import { FaStar } from "react-icons/fa";

import "./Review.css";
import ReviewItem from "./ReviewItem";

const Review = () => {

    const [transform, setTransform] = useState(0);

    const handleTransform = (newTransform) => {
        setTransform(newTransform);
    }

  return (
    <section className="review">
      <header className="review_header">
        <h2>O que nossos clientes dizem</h2>
        <div className="review_classification">
          <div className="review_bar">
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
          <p>4.9/5 (127 avaliações)</p>
        </div>
      </header>
      <main className="review_main">
        <div className="review_wrapper" style={{ transform: `translateX(${transform}%)` }}>
          <ReviewItem logo={null} />
          <ReviewItem logo={null} />
          <ReviewItem logo={null} />
          <ReviewItem logo={null} />
          <ReviewItem logo={null} />
          <ReviewItem logo={null} />
          <ReviewItem logo={null} />
          <ReviewItem logo={null} />
          <ReviewItem logo={null} />
        </div>
      </main>
      <div className="review_controls">
        <button className={`dot ${transform === 0 ? "active" : ""}` } onClick={() => handleTransform(0)}></button>
        <button className={`dot ${transform === -33 ? "active" : ""}`} onClick={() => handleTransform(-33)}></button>
        <button className={`dot ${transform === -67 ? "active" : ""}`} onClick={() => handleTransform(-67)}></button>
      </div>
    </section>
  );
};

export default Review;
