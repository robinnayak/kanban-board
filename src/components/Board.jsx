import React, { useState } from "react";
import Columns from "./Columns";
import AddToDo from "./AddToDo";

const initialTasks = [
  {
    id: 1,
    title: "Task 1",
    status: "todo",
  },
  {
    id: 2,
    title: "Task 2",
    status: "inprogress",
  },
  {
    id: 3,
    title: "Task 3",
    status: "completed",
  },
  {
    id: 4,
    title: "Task 4",
    status: "completed",
  },
];

const Board = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const draggedTask = tasks.find((task) => task.id === parseInt(draggableId));
    if (draggedTask) {
      draggedTask.status = destination.droppableId; // Update the task's status
      setTasks([...tasks]); // Trigger state update
    }
  };

  return (
    <>
      <div className="bg-gray-50">
        <AddToDo setTasks={setTasks} />
      </div>
      <div className="flex flex-1 gap-4 justify-between p-4 bg-gray-100 min-h-screen">
        <Columns
          title="To Do"
          tasks={tasks.filter((task) => task.status === "todo")}
          status="todo"
        />
        <Columns
          title="In Progress"
          tasks={tasks.filter((task) => task.status === "inprogress")}
          status="inprogress"
        />
        <Columns
          title="Completed"
          tasks={tasks.filter((task) => task.status === "completed")}
          status="completed"
        />
      </div>
    </>
  );
};

export default Board;
