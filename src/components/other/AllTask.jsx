import React from 'react'

const AllTask = () => {
    return (
        <div className="px-10 py-5 w-full min-h-screen bg-gray-200 flex flex-col items-center">
            <h2 className="text-4xl font-thin mb-4">All Tasks</h2>
            <div className="mb-4 p-4 bg-gray-200 rounded-xl shadow-inner">
                <h3 className="text-xl font-semibold mb-2">Ajay</h3>
                <p className="mb-1">make a page</p>
                <p className="text-sm text-gray-600">Status: In Progress</p>
            </div>
            <div className="mb-4 p-4 bg-gray-200 rounded-xl shadow-inner">
                <h3 className="text-xl font-semibold mb-2">Neha</h3>
                <p className="mb-1">design a form</p>
                <p className="text-sm text-gray-600">Status: Pending</p>
            </div>
            <div className="mb-4 p-4 bg-gray-200 rounded-xl shadow-inner">
                <h3 className="text-xl font-semibold mb-2">Raju</h3>
                <p className="mb-1">write tests</p>
                <p className="text-sm text-gray-600">Status: Completed</p>
            </div>
        </div>
    )
}

export default AllTask
