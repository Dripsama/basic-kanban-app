import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./Task.css";

//each task is an Draggable object
export default function Task(props) {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <div
          className="Task"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {props.task.content}
        </div>
      )}
    </Draggable>
  );
}
