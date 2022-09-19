import React, { useState } from 'react'

const Registration = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  })

  //fetch api
  const url = 'http://localhost:5000/register'

  const fetchData = async () => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const result = await response.json()
    console.log(result)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData()
    setData({firstname: "", lastname: "", email: "", password: ""})
  }

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value.trim()})
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
            required 
            className='w-full p-4 border border-gray-300 rounded'/>
            </div>
            <div className='m-2'>
            <input
             type="text"
             name="lastname" 
             value={data.lastname}
             onChange={handleChange}
             placeholder="Enter your lastname"
             required
              className='w-full p-4 border border-gray-300 rounded'/>
            </div>
            <div className='m-2'>
            <input 
            type="text" 
            name="email" 
            value={data.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required 
            className='w-full p-4 border border-gray-300 rounded'/>
            </div>
            <div className='m-2'>
            <input 
            type="password" 
            name="password" 
            value={data.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required 
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