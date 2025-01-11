import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <>
        <div className='w-full h-screen p-8  '>

            <Header />
            <TaskListNumbers />
            <TaskList/>
        </div>

    </>
  )
}

export default EmployeeDashboard
