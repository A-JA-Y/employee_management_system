import React from "react";

const TaskListNumbers = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 mt-10 gap-5 p-8">
      <div className="h-40 bg-gray-200 border border-gray-200 rounded-lg p-6 shadow-lg hover:bg-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 transition duration-200 text-gray-900 dark:text-white">
        <h2 className="text-2xl">Total Tasks: 10</h2>
        <h3 className="text-lg">Completed Tasks: 5</h3>
      </div>
      <div className="h-40 bg-red-200 border border-red-200 rounded-lg p-6 shadow-lg hover:bg-red-300 dark:bg-red-800 dark:border-red-600 dark:hover:bg-red-700 transition duration-200 text-gray-900 dark:text-white">
        <h2 className="text-2xl">Total Tasks: 10</h2>
        <h3 className="text-lg">Completed Tasks: 5</h3>
      </div>
      <div className="h-40 bg-yellow-200 border border-yellow-200 rounded-lg p-6 shadow-lg hover:bg-yellow-300 dark:bg-yellow-800 dark:border-yellow-600 dark:hover:bg-yellow-700 transition duration-200 text-gray-900 dark:text-white">
        <h2 className="text-2xl">Total Tasks: 10</h2>
        <h3 className="text-lg">Completed Tasks: 5</h3>
      </div>
      <div className="h-40 bg-blue-200 border border-blue-200 rounded-lg p-6 shadow-lg hover:bg-blue-300 dark:bg-blue-800 dark:border-blue-600 dark:hover:bg-blue-700 transition duration-200 text-gray-900 dark:text-white">
        <h2 className="text-2xl">Total Tasks: 10</h2>
        <h3 className="text-lg">Completed Tasks: 5</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
