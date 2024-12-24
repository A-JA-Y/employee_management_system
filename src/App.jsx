import { useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'

function App() {

  return (
    <>
      <div className='flex items-center justify-center h-screen '>
      {/* <Login /> */}
      <EmployeeDashboard />
        
      </div>
    </>
  )
}

export default App
