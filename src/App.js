import React from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Kanban Board</h1>
        <p className="text-sm text-gray-500 text-center">Organize your tasks efficiently</p>
      </header>

      {/* Board */}
      <Board />
    </div>
  );
}

export default App;
