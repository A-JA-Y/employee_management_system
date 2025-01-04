import React from "react";

const TaskListNumbers = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 mt-10 gap-5 p-8">
      <div className="h-40 bg-gray-800/30 backdrop-blur-md border border-gray-200/20 rounded-lg p-6 shadow-lg hover:bg-gray-800/50 transition duration-200">
        <h2 className="text-white text-2xl">Total Tasks: 10</h2>
        <h3 className="text-white text-lg">Completed Tasks: 5</h3>
      </div>
      <div className="h-40 bg-red-800/30 backdrop-blur-md border border-gray-200/20 rounded-lg p-6 shadow-lg hover:bg-red-800/50 transition duration-200">
        <h2 className="text-white text-2xl">Total Tasks: 10</h2>
        <h3 className="text-white text-lg">Completed Tasks: 5</h3>
      </div>
      <div className="h-40 bg-yellow-800/30 backdrop-blur-md border border-gray-200/20 rounded-lg p-6 shadow-lg hover:bg-yellow-800/50 transition duration-200">
        <h2 className="text-white text-2xl">Total Tasks: 10</h2>
        <h3 className="text-white text-lg">Completed Tasks: 5</h3>
      </div>
      <div className="h-40 bg-blue-800/30 backdrop-blur-md border border-gray-200/20 rounded-lg p-6 shadow-lg hover:bg-blue-800/50 transition duration-200">
        <h2 className="text-white text-2xl">Total Tasks: 10</h2>
        <h3 className="text-white text-lg">Completed Tasks: 5</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
