import "./Expenses.css";
import ExpenseItemList from "./ExpenseItemList";
import NewExpense from "./NewExpense";
const Expense = () => {
  return (
    <div className="expenses">
      <NewExpense />
      <ExpenseItemList />
    </div>
  );
};

export default Expense;
