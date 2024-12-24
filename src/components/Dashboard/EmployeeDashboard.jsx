import React from 'react'

const EmployeeDashboard = () => {
  return (
    <>
        <div className="container mx-auto p-4 text-black">
            <h1 className="login-title text-3xl font-bold mb-4 text-center">
            Employee Dashboard
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Employee Information</h2>
                <p>
                <strong>Name:</strong> John Doe
                </p>
                <p>
                <strong>Email:</strong>
                <a href="mailto:mailtoajay@gmail.com">mailtoajay</a>
                </p>
                <p>
                <strong>Phone:</strong> 1234567890
                </p>
            </div>
            <button className="btn btn-primary w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">   
                View Profile
            </button>
            </div>
        </div>

    </>
  )
}

export default EmployeeDashboard
