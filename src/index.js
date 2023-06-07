import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import db from "./db/db";
import Book from "./book/book";

const BookList = () => {
  const findBook = (id) => {
    const result = db.find((elem) => elem.id === id);
    return result.title + " by " + result.author;
  };
  return (
    <>
      <h1 className="heading">NYT Best Sellers</h1>
      <section className="booklist">
        {db.map((book, number) => (
          <Book {...book} key={book.id} findBook={findBook} number={number} />
        ))}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
