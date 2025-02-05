import React from "react";

const tasks = [
  {
    id: 1,
    priority: "High",
    due: "20 Feb 2025",
    title: "Make video",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, odio eget tincidunt.",
    bgColor: "bg-red-500",
  },
  {
    id: 2,
    priority: "Medium",
    due: "22 Feb 2025",
    title: "Design UI",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, odio eget tincidunt.",
    bgColor: "bg-green-500",
  },
  {
    id: 3,
    priority: "Low",
    due: "25 Feb 2025",
    title: "Update docs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, odio eget tincidunt.",
    bgColor: "bg-yellow-500",
  },
  {
    id: 4,
    priority: "High",
    due: "27 Feb 2025",
    title: "Test features",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, odio eget tincidunt.",
    bgColor: "bg-blue-500",
  },
];

const TaskList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {task.priority}
              </h3>
              <span
                className={`text-white text-xs px-2 py-1 rounded ${task.bgColor}`}
              >
                {task.priority}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">
              {task.title}
            </h2>
            <p className="text-gray-600 flex-grow">{task.description}</p>
            <h4 className="mt-4 text-sm text-gray-500">{task.due}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
