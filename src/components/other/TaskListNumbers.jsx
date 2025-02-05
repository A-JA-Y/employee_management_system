import React from "react";

const TaskListNumbers = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold text-gray-800">Total Tasks: 10</h2>
          <h3 className="text-lg text-green-600">Completed Tasks: 5</h3>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold text-gray-800">Total Tasks: 10</h2>
          <h3 className="text-lg text-green-600">Completed Tasks: 5</h3>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold text-gray-800">Total Tasks: 10</h2>
          <h3 className="text-lg text-green-600">Completed Tasks: 5</h3>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold text-gray-800">Total Tasks: 10</h2>
          <h3 className="text-lg text-green-600">Completed Tasks: 5</h3>
        </div>
      </div>
    </div>
  );
};

export default TaskListNumbers;
