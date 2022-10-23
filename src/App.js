import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom"; //Why did we import this here and not in the dashbord.jsx?
import Dashboard from "./DashBoard";
import HomePage from "./HomePage";
import Leaderboard from "./Leaderboard";

export default function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/" element={<HomePage />} />
          <Route path="leaderboard" element={<Leaderboard />} />
        </Routes>
      </BrowserRouter>
   );
}
