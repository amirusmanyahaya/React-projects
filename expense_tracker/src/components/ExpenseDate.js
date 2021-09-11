import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  //   const day = props.date.toLocaleDateString("en-Us", { day: "2-digit" });
  //   const month = props.date.toLocaleDateString("en-Us", { month: "long" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{"August"}</div>
      <div className="expense-date__year">{"2001"}</div>
      <div className="expense-date__day">{"02"}</div>
    </div>
  );
};

export default ExpenseDate;
