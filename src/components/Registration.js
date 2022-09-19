import React, { useState } from 'react'

const Registration = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value.trim()})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
    setData({firstname: "", lastname: "", email: "", password: ""})
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
           <div className='p-4 w-[50%] mx-auto my-2 bg-gray-100'>
           <div className='m-2'>
            <input 
            type="text" 
            name="firstname" 
            value={data.firstname}
            onChange={handleChange}
            placeholder="Enter your firstname" 
            className='w-full p-4 border border-gray-300 rounded'/>
            </div>
            <div className='m-2'>
            <input
             type="text"
             name="lastname" 
             value={data.lastname}
             onChange={handleChange}
             placeholder="Enter your lastname"
              className='w-full p-4 border border-gray-300 rounded'/>
            </div>
            <div className='m-2'>
            <input 
            type="text" 
            name="email" 
            value={data.email}
            onChange={handleChange}
            placeholder="Enter your email" 
            className='w-full p-4 border border-gray-300 rounded'/>
            </div>
            <div className='m-2'>
            <input 
            type="password" 
            name="password" 
            value={data.password}
            onChange={handleChange}
            placeholder="Enter your password" 
            className='w-full p-4 border border-gray-300 rounded'/>
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