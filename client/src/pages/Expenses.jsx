import { useState } from "react";
import "../styles/Expenses.css";
import DashboardNav from "../components/DashboardNav/DashboardNav";
import Summary from "../components/Summary/Summary";
import AllExpenses from "../components/AllExpenses/AllExpenses";
import AddExpense from "../components/AddExpense/AddExpense";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  return (
    <div className="expenses__layout">
      <DashboardNav />
      <Summary />
      <AllExpenses expenses={expenses} />
      <AddExpense setExpenses={setExpenses} />
    </div>
  );
};

export default Expenses;
