import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ data }) => {
  return (
    <div className="expenses">
      {data.map((element) => {
        return <ExpenseItem key={element.id} {...element} />;
      })}
    </div>
  );
};

export default Expenses;
