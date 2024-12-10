import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faSpinner, faTornado } from "@fortawesome/free-solid-svg-icons";

const Tasks = ({ task }) => {
  return (
    <div
      key={task.id}
      className="task-container bg-white border border-gray-300 shadow-sm rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
    >
      {/* Task Header */}
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <p className="text-sm text-gray-500 font-medium">#{task.id}</p>
        <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
      </div>

      {/* Task Status */}
      <div className="mt-4 flex justify-center items-center">
        {task.status === "todo" && (
          <span className="flex items-center gap-2 text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
            <FontAwesomeIcon icon={faTornado} /> To DO
          </span>
        )}
        {task.status === "inprogress" && (
          <span className="flex items-center gap-2 text-sm font-medium text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
            <FontAwesomeIcon icon={faSpinner} spin /> In Progress
          </span>
        )}
        {task.status === "completed" && (
          <span className="flex items-center gap-2 text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
            <FontAwesomeIcon icon={faCheckCircle} /> Completed
          </span>
        )}
      </div>
    </div>
  );
};

export default Tasks;
