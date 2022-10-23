import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav className="navigationbar">
      <ul>
        <li className="firstlink">
          <Link to={props.link1}>{props.link1Name}</Link>{" "}
        </li>

        <li className="">
          <Link to={props.link2}>{props.link2Name}</Link>
        </li>
      </ul>
    </nav>
  );
}
