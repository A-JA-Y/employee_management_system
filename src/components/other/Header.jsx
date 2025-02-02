import React from 'react';

const Header = () => {
    return (
        <div className="p-8 w-full flex flex-col md:flex-row justify-between items-center bg-gray-800">
            <h1 className="text-white text-3xl sm:text-4xl font-light text-center md:text-left">
                Hello! <br /> Ajay 👋
            </h1>
            <button className="mt-4 md:mt-0 bg-red-500 text-white py-2 px-6 rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition duration-300">
                Log Out
            </button>
        </div>
    )
}

export default Header;
