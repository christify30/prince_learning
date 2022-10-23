import React from "react";
import "./leaderboard.css";
import Nav from "./components/Nav";
import { leaderboardlist, getNumberOfStars } from "./util/leaderboardlist";

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
        <thead>
          <tr>
            <th>
              <h3>
                Loggers Ranking. Thank you for using Toolhub, and come 🔙
                anytime!
              </h3>
            </th>
          </tr>
          <tr>
            <th colSpan={3}>
              <td>Username</td>
              <td>score</td>
              <td>Ranking</td>
            </th>
          </tr>
        </thead>
        <tbody>
          {leaderboardlist.map((value, index) => (
            <tr>
              <td>{value.userName}</td>
              <td>{value.score}</td>
              <td>{getNumberOfStars(value.score)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
