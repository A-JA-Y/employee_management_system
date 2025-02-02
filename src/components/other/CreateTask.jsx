import React from 'react'

const CreateTask = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-8 px-4 sm:px-6 lg:px-8 space-y-6">
      <h2 className="text-2xl font-bold text-center mb-4">Create a Task</h2>
      <div className="space-y-4">
        <label className="block text-lg font-semibold">Task Title</label>
        <input
          type="text"
          placeholder="Enter Task Title"
          className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="block text-lg font-semibold">Task Description</label>
        <textarea
          placeholder="Enter Task Description"
          className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
        <label className="block text-lg font-semibold">Date</label>
        <input
          type="date"
          className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="block text-lg font-semibold">Assign to</label>
        <input
          type="text"
          placeholder="Enter user email"
          className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="block text-lg font-semibold">Task Category (design/dev/marketing)</label>
        <input
          type="text"
          placeholder="Enter Task Category"
          className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 w-full text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Create Task
        </button>
      </div>
    </div>
  )
}

export default CreateTask
