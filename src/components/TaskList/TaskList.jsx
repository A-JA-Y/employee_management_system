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
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`${task.bgColor} rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-white p-5`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{task.priority}</h3>
              <h4 className="text-sm">{task.due}</h4>
            </div>
            <h2 className="text-2xl font-bold mb-2">{task.title}</h2>
            <p className="text-base">{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
