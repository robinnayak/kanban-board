import React, { useState } from "react";

const AddToDo = ({ setTasks }) => {
  const [title, setTitle] = useState(""); // Local state to manage input value

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Please enter a title");
      return;
    }

    const newTask = {
      id: Math.floor(Math.random() * 1000) + 1,
      title: title.trim(),
      status: "todo",
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
    setTitle(""); // Clear the input field
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add To-Do</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-indigo-500"
            id="title"
            value={title} // Bind input value to state
            onChange={(e) => setTitle(e.target.value)} // Update state on input change
          />
        </div>
        <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddToDo;
