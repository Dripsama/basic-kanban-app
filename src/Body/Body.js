import React from "react";
import ReactDOM from "react-dom";
import { DragDropContext } from "react-beautiful-dnd";
import InitialData from "./InitialData";
import Column from "./Column";
import { useState } from "react";

export default function Body() {
  const [data, setData] = useState(InitialData);

  const updateColumnState = (id, task) => {
    const newTask = {
      id: `task-${Object.keys(data.tasks).length + 1}`,
      content: task,
    };
    data.columns[id].taskIds.push(newTask.id);
    data.tasks[newTask.id] = newTask;
    setData(data);
  };

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
