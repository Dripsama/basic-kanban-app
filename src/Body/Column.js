import React from "react";
import "./Column.css";

export default function Column({ heading }) {
  return (
    <div className="Column">
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
