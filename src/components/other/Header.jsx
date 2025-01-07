import React from 'react'

const Header = () => {
return (
    <div className="p-8 w-full flex justify-between items-center   ">
        <h1 className="text-white text-4xl font-thin">
            Hello! <br/> Ajay 👋
        </h1>
        <button className="mt-2 bg-red-500 text-white py-2 px-4 rounded hover:shadow-md hover:shadow-red-500/50 transition duration-300">
            Log Out
        </button>
    </div>
)
}

export default Header
