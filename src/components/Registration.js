import React from 'react'

const Registration = () => {
  return (
    <div>
        <form>
           <div className='p-4 w-[50%] mx-auto my-2 bg-gray-100'>
           <div className='m-2'>
            <input type="text" name="firstname" placeholder="Enter your firstname" className='w-full p-4 border border-gray-300 rounded'/>
            </div>
            <div className='m-2'>
            <input type="text" name="lastname" placeholder="Enter your lastname" className='w-full p-4 border border-gray-300 rounded'/>
            </div>
            <div className='m-2'>
            <input type="text" name="email" placeholder="Enter your email" className='w-full p-4 border border-gray-300 rounded'/>
            </div>
            <div className='m-2'>
            <input type="password" name="password" placeholder="Enter your password" className='w-full p-4 border border-gray-300 rounded'/>
            </div>
            <div>
                <button className='bg-blue-500 py-2 px-4 m-2 text-xl rounded'>Register</button>
            </div>
           </div>
        </form>
    </div>
  )
}

export default Registration