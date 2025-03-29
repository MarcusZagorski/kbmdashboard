import "./Summary.css";
import { Icon } from "@iconify/react/dist/iconify.js";

const Summary = () => {
  const summariesInfo = [
    {
      icon: "material-symbols-light:dashboard-outline-rounded",
      name: "Total Expenses",
    },
    {
      icon: "arcticons:expense-register",
      name: "Total Budget",
    },
    {
      icon: "arcticons:budgetwatch",
      name: "Client Count",
    },
    {
      icon: "icon-park-outline:calendar",
      name: "Today's appointments",
    },
  ];

  return summariesInfo.map((summary, index) => {
    const summaryClass = `summary__container__${index + 1}`;
    return (
      <div className={summaryClass} key={index}>
        <Icon icon={summary.icon} className="summary__icon" />
        <h3 key={index}>{summary.name}</h3>
      </div>
    );
  });
};

export default Summary;
