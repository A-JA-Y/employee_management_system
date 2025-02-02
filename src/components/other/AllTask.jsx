import React from 'react'

const AllTask = () => {
    return (
        <div className="min-h-screen bg-gray-100 px-4 py-8 flex flex-col items-center">
            <div className="max-w-4xl w-full">
                <h2 className="text-3xl font-light mb-6 text-center">All Tasks</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-semibold mb-1">Ajay</h3>
                        <p>make a page</p>
                        <p className="text-sm text-gray-600 mt-2">Status: In Progress</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-semibold mb-1">Neha</h3>
                        <p>design a form</p>
                        <p className="text-sm text-gray-600 mt-2">Status: Pending</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-semibold mb-1">Raju</h3>
                        <p>write tests</p>
                        <p className="text-sm text-gray-600 mt-2">Status: Completed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllTask
