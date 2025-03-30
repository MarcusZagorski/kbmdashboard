import "./AddExpense.css";
import formAction from "../../api/formAction";

const AddExpense = ({ setExpenses }) => {
  return (
    <div className="addexpense__container">
      <h2>Add Expenses</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newExpense = formAction(e);
          setExpenses((prevExpense) => [...prevExpense, newExpense]);
        }}
        className="form"
      >
        <div>
          <label htmlFor="name">Expense Name:</label>
          <br />
          <input name="name" type="text" required />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <br />
          <input name="description" type="text" required />
        </div>

        <div>
          <label htmlFor="initial_charge_date">Initial Charge Date:</label>
          <br />
          <input name="initial_charge_date" type="date" required />
        </div>

        <input type="hidden" name="currency" value="GBP" />

        <div>
          <label htmlFor="charge_amount">Charge Amount:</label>
          <br />
          <input name="charge_amount" type="text" required />
        </div>

        <div>
          <label htmlFor="category">Category:</label>
          <br />
          <select name="category" required>
            <option value=""></option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="SEO">SEO</option>
            <option value="Wall Decal">Wall Decal</option>
            <option value="Vehicle Graphic">Vehicle Graphic</option>
            <option value="Logo Design">Logo Design</option>
            <option value="Window Graphic">Window Graphic</option>
          </select>
        </div>

        <div>
          <label htmlFor="payment_by">Payee:</label>
          <br />
          <select name="payment_by" required>
            <option value=""></option>
            <option value="Marcus">Marcus</option>
            <option value="Bahadory">Bahadory</option>
            <option value="Karam">Karam</option>
          </select>
        </div>

        <div>
          <label htmlFor="recurring">Recurring:</label>
          <br />
          <select name="recurring" id="recurring" /*onChange={recurring}*/ required>
            <option value=""></option>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        {/* {recurValue && ( */}
        <div>
          <label htmlFor="recurring_date">Recurring Date:</label>
          <br />
          <input name="recurring_date" type="date" required />
        </div>
        {/* )} */}

        <div>
          <label htmlFor="status">Status:</label>
          <br />
          <select name="status" id="status" required>
            <option value=""></option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <br />
        <button type="submit" className="submit__expense">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
