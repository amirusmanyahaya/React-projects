import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const day = props.date.toLocaleDateString("en-us", { day: "2-digit" });
  const month = props.date.toLocaleDateString("en-Us", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{day}</div>
      <div className="expense-date__day">{year}</div>
    </div>
  );
};

export default ExpenseDate;
