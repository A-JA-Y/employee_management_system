import React from 'react'

const AllTask = () => {
return (
    <div className="px-10 py-5 w-full">
        <h2 className="text-4xl font-thin mb-4">All Tasks</h2>
        <div className="mb-4 p-2 bg-white shadow-sm rounded">
            <h3 className="text-xl font-semibold">Ajay</h3>
            <p>make a page</p>
            <p className="text-sm text-gray-500">Status: In Progress</p>
        </div>
        <div className="mb-4 p-2 bg-white shadow-sm rounded">
            <h3 className="text-xl font-semibold">Neha</h3>
            <p>design a form</p>
            <p className="text-sm text-gray-500">Status: Pending</p>
        </div>
        <div className="mb-4 p-2 bg-white shadow-sm rounded">
            <h3 className="text-xl font-semibold">Raju</h3>
            <p>write tests</p>
            <p className="text-sm text-gray-500">Status: Completed</p>
        </div>
    </div>
)
}

export default AllTask
