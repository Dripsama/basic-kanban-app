import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import NewTask from "./NewTask";

export default function Column(props) {
  const onNewTask = (task) => {
    this.props.updateColumnsState(this.props.column.id, task);
  };
  return (
    <div>
      <div>
        <h1>{props.column.title}</h1>
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
      <NewTask onNewTask={this.onNewTask} />
    </div>
  );
}
