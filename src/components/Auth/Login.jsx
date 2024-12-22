import React from 'react'

const Login = () => {
    const submitHandler = (e) => {
        e.preventDefault()


        alert('Login form submitted')

    }
return (
    <>
        <div className='container mx-auto p-4'>
            <h1 className='login-title text-3xl font-bold mb-4 text-center'>Login</h1>
            <form onSubmit={()=>{
                submitHandler()
            }} className='login-form bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto'>
                <div className='form-group mb-4'>
                    <label htmlFor='email' className='form-label block text-sm font-medium text-gray-700'>Email address</label>
                    <input type='email' className='form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' id='email' />
                </div>
                <div className='form-group mb-4'>
                    <label htmlFor='password' className='form-label block text-sm font-medium text-gray-700'>Password</label>
                    <input type='password' className='form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' id='password' />
                </div>
                <button  type='submit' className='btn btn-primary w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Login</button>
            </form>
        </div>
    </>
)
}

export default Login
