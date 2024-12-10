import React from "react";
import Tasks from "./Tasks";

const Columns = ({ title, tasks, status }) => {
  return (
    <div className="flex flex-col flex-1 bg-white rounded-lg shadow-md p-4">
      {/* Column Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center border-b border-gray-200 pb-2">
        {title}
      </h2>

      {/* Tasks */}
      <div className="flex flex-col gap-4 overflow-y-auto">
        {tasks.length > 0 ? (
          tasks.map((task) => <Tasks key={task.id} task={task} />)
        ) : (
          <p className="text-sm text-gray-500 text-center">No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default Columns;
