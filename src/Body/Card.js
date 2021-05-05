import React from "react";
import "./Card.css";

export default function Card({ heading }) {
  return (
    <div className="Card">
      <h1>{heading}</h1>
      <ul>
        <li>
          <span>Sample input 1</span>
        </li>
        <li>
          <span>Sample inmput 2</span>
        </li>
      </ul>
    </div>
  );
}
