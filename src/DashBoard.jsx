import "./App.css";
// import Header from "./components/Header";
import Card from "./components/Card";

import "./dashboard.css";
import Nav from "./components/Nav";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { pieData } from "./utils";
ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  return (
    <div className={"App"}>
      {/* <Header /> */}
      <Nav
        link1="/"
        link1Name="Homepage"
        link2="/leaderboard"
        link2Name="Leaderboard"
      />
      <section className="section">
        <Card text="Total Number of Tools" result="10,000" />
        <Card
          text="Total Number of Tools with Missing Information"
          result="1200"
        />
        <Card
          text="Total Number of Tools edited annually with incite"
          result="3,000"
        />
        <Card text="Number of Tools edited using Incite" result="450" />
        <Card
          text="Total Number of Tools with verified information"
          result="500"
        />
        <Card text="Total Number of Monthly Users" result="6,000" />
        <Card text="Estimated number of Annual Users" result="65,000" />
      </section>
      <section>
        <div className="pieData">
          <Pie data={pieData} />{" "}
          <i>
            pie chart comparing percentage of tools with missing information,
            total number of tools in the records and Percentage of tools edited
            using this record management.
          </i>
          {/* <Pie data={pieData} /> pie chart comparing percentage of tools with
          missing information, total number of tools in the records and
          Percentage of tools edited using this record management. */}
        </div>

        {/* <Link to="/">Go to Home page</Link> */}
      </section>
    </div>
  );
}

export default App;
