import "../styles/Homepage.css";
import DashboardNav from "../components/DashboardNav/DashboardNav";
import Summary from "../components/Summary/Summary";
import DailySchedule from "../components/DailySchedule/DailySchedule";
import CurrentTickets from "../components/CurrentTickets/CurrentTickets";
import Quote from "../components/Quote/Quote";

const Homepage = () => {
  return (
    <div className="homepage__layout">
      <DashboardNav />
      <Summary />
      <DailySchedule />
      <CurrentTickets />
      <Quote />
    </div>
  );
};

export default Homepage;
