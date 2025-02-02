import React from "react";

const TaskListNumbers = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6 mt-10">
      <div className="h-40 flex flex-col justify-center items-center cursor-pointer bg-gray-200 border border-gray-200 rounded-lg p-6 shadow-lg transition duration-200 transform hover:scale-105 hover:bg-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 text-gray-900 dark:text-white">
        <h2 className="text-3xl font-bold mb-2">Total Tasks: 10</h2>
        <h3 className="text-xl">Completed Tasks: 5</h3>
      </div>
      <div className="h-40 flex flex-col justify-center items-center cursor-pointer bg-red-200 border border-red-200 rounded-lg p-6 shadow-lg transition duration-200 transform hover:scale-105 hover:bg-red-300 dark:bg-red-800 dark:border-red-600 dark:hover:bg-red-700 text-gray-900 dark:text-white">
        <h2 className="text-3xl font-bold mb-2">Total Tasks: 10</h2>
        <h3 className="text-xl">Completed Tasks: 5</h3>
      </div>
      <div className="h-40 flex flex-col justify-center items-center cursor-pointer bg-yellow-200 border border-yellow-200 rounded-lg p-6 shadow-lg transition duration-200 transform hover:scale-105 hover:bg-yellow-300 dark:bg-yellow-800 dark:border-yellow-600 dark:hover:bg-yellow-700 text-gray-900 dark:text-white">
        <h2 className="text-3xl font-bold mb-2">Total Tasks: 10</h2>
        <h3 className="text-xl">Completed Tasks: 5</h3>
      </div>
      <div className="h-40 flex flex-col justify-center items-center cursor-pointer bg-blue-200 border border-blue-200 rounded-lg p-6 shadow-lg transition duration-200 transform hover:scale-105 hover:bg-blue-300 dark:bg-blue-800 dark:border-blue-600 dark:hover:bg-blue-700 text-gray-900 dark:text-white">
        <h2 className="text-3xl font-bold mb-2">Total Tasks: 10</h2>
        <h3 className="text-xl">Completed Tasks: 5</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
