import React from "react";
import Card from "./Card";
import "./Body.css";

export default function Body() {
  return (
    <div className="Body">
      <Card heading="Backlog" />
      <Card heading="To do" />
      <Card heading="In Progress" />
      <Card heading="Testing" />
      <Card heading="Done" />
    </div>
  );
}
