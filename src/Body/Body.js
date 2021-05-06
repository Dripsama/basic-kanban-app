import React from "react";
import Column from "./Column";
import "./Body.css";

export default function Body() {
  return (
    <div className="Body">
      <Column heading="Backlog" />
      <Column heading="To do" />
      <Column heading="In Progress" />
      <Column heading="Testing" />
      <Column heading="Done" />
    </div>
  );
}
