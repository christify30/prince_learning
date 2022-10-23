import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <div className="card">
      <p>{props.text}</p>
      <p>{props.result}</p>
    </div>
  );
}
