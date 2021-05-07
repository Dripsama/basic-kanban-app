const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Sample task 1" },
    "task-2": { id: "task-2", content: "Sample task 2" },
    "task-3": { id: "task-3", content: "Sample task 3" },
    "task-4": { id: "task-4", content: "Sample task 4" },
    "task-5": { id: "task-5", content: "Sample task 5" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Backlog",
      taskIds: ["task-1"],
    },
    "column-2": {
      id: "column-2",
      title: "To do",
      taskIds: ["task-2"],
    },
    "column-3": {
      id: "column-3",
      title: "In Progress",
      taskIds: ["task-3", "task-4"],
    },
    "column-4": {
      id: "column-4",
      title: "Testing",
      taskIds: ["task-5"],
    },
    "column-5": {
      id: "column-5",
      title: "Done",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3", "column-4", "column-5"],
};

export default initialData;
