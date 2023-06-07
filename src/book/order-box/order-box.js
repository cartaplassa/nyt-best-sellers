import React from "react";

const OrderBox = (props) => {
  const eventHandler = (e) => {
    e.preventDefault();
    const amount = e.target[0].valueAsNumber;
    const text =
      amount +
      " copies of " +
      props.findBook(parseInt(e.target.name)) +
      " ordered.";
    alert(text);
  };
  // console.log(props);
  return (
    <form className="order-box" name={props.id} onSubmit={eventHandler}>
      <span className="order-box__label">Order: </span>
      <input
        className="order-box__field"
        name="amount"
        type="number"
        defaultValue="1"
      />
      <button className="order-box__submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default OrderBox;
