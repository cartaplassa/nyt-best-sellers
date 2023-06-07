import React from "react";
import OrderBox from "./order-box/order-box";

const Book = (props) => {
  return (
    <article className="book">
      <img
        className="book__image"
        src={props.image}
        alt={props.title + " by " + props.author}
      />
      <span className="book__num">#{props.number + 1}</span>
      <div className="book__inner">
        <h2 className="book__title">{props.title}</h2>
        <p className="book__author">{props.author}</p>
        <OrderBox {...props} />
      </div>
    </article>
  );
};

export default Book;
