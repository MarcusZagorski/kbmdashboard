import "./DashboardNav.css";
import kbmlogo from "../../assets/kbm_logo.jpg";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const DashboardNav = () => {
  return (
    <div className="dashboard__nav">
      <img src={kbmlogo} className="kbm__logo"></img>
      <ul className="nav__links">
        <div className="top__nav__links">
          <li>
            <Link to="/">
              <Icon icon="material-symbols-light:dashboard-outline-rounded" className="nav__icon" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/expenses">
              <Icon icon="arcticons:expense-register" className="nav__icon" />
              Expenses
            </Link>
          </li>
          <li>
            <Icon icon="arcticons:budgetwatch" className="nav__icon" />
            Budget
          </li>
          <li>
            <Icon icon="icon-park-outline:calendar" className="nav__icon" />
            Appointments
          </li>
          <li>
            <Icon icon="material-symbols:person-outline-rounded" className="nav__icon" />
            Clients
          </li>
        </div>
        <span className="logout__link">
          <li>
            <Icon icon="material-symbols-light:logout" className="nav__icon" />
            Logout
          </li>
        </span>
      </ul>
    </div>
  );
};

export default DashboardNav;
