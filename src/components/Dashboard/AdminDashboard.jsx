import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = () => {
  return (
    <div className="min-h-screen w-full px-4 py-8  text-zinc-600">
      <Header />
      <div className="grid w-full max-w-7xl mx-auto grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
        <CreateTask />
        <AllTask />
      </div>
    </div>
  )
}

export default AdminDashboard
