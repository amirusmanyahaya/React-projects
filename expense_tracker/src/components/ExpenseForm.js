import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  let [enteredTitle, setEnteredTitle] = useState("");
  let [enteredPrice, setEnteredPrice] = useState("");
  let [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (changeEvent) => {
    setEnteredTitle(changeEvent.target.value);
  };

  const priceChangeHandler = (changeEvent) => {
    setEnteredPrice(changeEvent.target.value);
  };

  const dateChangeHandler = (changeEvent) => {
    setEnteredDate(changeEvent.target.value);
  };

  const submitHandler = (submitEvent) => {
    //   by default a forms redirects when submitted
    //  prevent the forms default behaviour
    submitEvent.preventDefault();
    const formData = {
      title: enteredTitle,
      price: enteredPrice,
      date: new Date(enteredDate),
    };
    console.log(formData);

    // reseting form values
    setEnteredTitle("");
    setEnteredPrice("");
    setEnteredDate("");
  };
  return (
    <form className="new-expense__controls" onSubmit={submitHandler}>
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Price</label>
        <input
          type="number"
          value={enteredPrice}
          min="0.01"
          step="0.01"
          onChange={priceChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          value={enteredDate}
          min="2010-01-01"
          max="2030-12-31"
          onChange={dateChangeHandler}
        />
      </div>
      <div className="new-expense__action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
