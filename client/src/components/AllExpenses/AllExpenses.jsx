import "./AllExpenses.css";

const AllExpenses = ({ expenses }) => {
  return (
    <div className="allexpenses__container">
      <h2>Expenses</h2>

      {expenses.length > 0 &&
        expenses.map((expense, index) => (
          <div className="expense" key={index}>
            {/* <Icon icon="typcn:delete" className="delete__expense"></Icon> */}
            <p>Expense Name: {expense.name}</p>
            <p>
              Description: <em>{expense.description}</em>
            </p>
            <p>Initial Charge Date: </p>
            <p>
              Charge Amount: <b>£{expense.charge_amount}</b>
            </p>
            <p>Category: {expense.category}</p>
            <p>
              Payee: <b>{expense.payment_by}</b>
            </p>
            <p>Recurring: {expense.recurring ? <span style={{ fontWeight: "bold" }}>Yes</span> : <span>No</span>}</p>
            {expense.recurring_date ? <p>Recurring Date: </p> : null}
            <p className="status__container">
              Status:{" "}
              {expense.status === "active" ? <span className="active"></span> : <span className="inactive"></span>}
            </p>
          </div>
        ))}
    </div>
  );
};

export default AllExpenses;
