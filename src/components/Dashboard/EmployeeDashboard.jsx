import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <>
        <div className='w-full h-full p-8 bg-gray-800 '>

            <Header />
            <TaskListNumbers />
            <TaskList/>
        </div>

    </>
  )
}

export default EmployeeDashboard
