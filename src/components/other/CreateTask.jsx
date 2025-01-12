import React from 'react'

const CreateTask = () => {
  return (
    <div className="max-w-md mx-auto mt-8 space-y-4">
        <h3 className="text-lg font-semibold">Task Title</h3>
        <input
          type="text"
          placeholder="Enter Task Title"
          className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <h3 className="text-lg font-semibold">Task Description</h3>
        <textarea
          placeholder="Enter Task Description"
          className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <h3 className="text-lg font-semibold">Date</h3>
        <input
          type="date"
          className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <h3 className="text-lg font-semibold">Assign to</h3>
        <input
          type="text"
          placeholder="Enter user email"
          className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <h3 className="text-lg font-semibold">Task Category(design/dev/marketing)</h3>
        <input
          type="text"
          placeholder="Enter Task Category"
          className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Create Task
        </button>
      </div>
  )
}

export default CreateTask
