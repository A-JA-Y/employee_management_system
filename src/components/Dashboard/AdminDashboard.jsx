import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = () => {
  return (
    <div className="min-h-screen w-full   text-zinc-600">
      <Header />
      <div >
        <CreateTask />
        <AllTask />
      </div>
    </div>
  )
}

export default AdminDashboard;
