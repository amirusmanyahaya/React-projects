import React from "react";
import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  let [title, setTitle] = useState(props.title);
  const titleHandler = (clickEvent) => {
    setTitle("Update");
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <h2 className="expense-item__description">{title}</h2>
      <p className="expense-item__price">{props.price}</p>
      <button onClick={titleHandler}>Update Title</button>
    </div>
  );
};

export default ExpenseItem;
