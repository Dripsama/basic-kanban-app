import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import InitialData from "./InitialData";
import Column from "./Column";
import { useState, useReducer } from "react";
import "./Body.css";

export default function Body() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [data, setData] = useState(InitialData);

  function updateColumnsState(id, task) {
    const newTask = {
      id: `task-${Object.keys(data.tasks).length + 1}`,
      content: task,
    };
    data.columns[id].taskIds.push(newTask.id);
    data.tasks[newTask.id] = newTask;
    setData(data);
    forceUpdate();
  }

  function onDragEnd(result) {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };

      setData(newData);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setData(newData);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="Body">
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);
          return (
            <Column
              key={column.id}
              column={column}
              tasks={tasks}
              updateColumnsState={updateColumnsState}
            />
          );
        })}
      </div>
    </DragDropContext>
  );
}
