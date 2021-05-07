import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import NewTask from "./NewTask";
import "./Column.css";

export default function Column(props) {
  const onNewTask = (task) => {
    props.updateColumnsState(props.column.id, task);
  };

  return (
    <div className="Column">
      <div className="TaskArea">
        <h1>{props.column.title}</h1>
        <div className="allTasks">
          <Droppable droppableId={props.column.id}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
                {...provided.droppableProps}
              >
                {props.tasks.map((task, index) => {
                  return <Task key={task.id} task={task} index={index} />;
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
      <NewTask onNewTask={onNewTask} />
    </div>
  );
}
