import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-4 sm:p-8">
      <Header />
      <div className="mt-4">
        <TaskListNumbers />
      </div>
      <div className="mt-4">
        <TaskList />
      </div>
    </div>
  )
}

export default EmployeeDashboard
