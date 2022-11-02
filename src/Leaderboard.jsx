import React from "react";
import "./leaderboard.css";
import Nav from "./components/Nav";
import { leaderboardlist, sortTypes} from "./util/leaderboardlist";

export default function Leaderboard() {
  return (
    <div className="leaderboard">
      <Nav
        link1="/"
        link1Name="Homepage"
        link2="/dashboard"
        link2Name="Dashboard"
      />

      <table id="table">
        <caption>
          Loggers Ranking. Thank you for using Toolhub, and come 🔙 anytime!
        </caption>
        <thead>
          <tr>
            <th>Username</th>
            <th>score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardlist.map((value, index) => (
            <tr>
              <td>{value.userName}</td>
              <td>{value.score}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}
