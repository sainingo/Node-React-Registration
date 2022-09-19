import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='bg-blue-500 flex justify-between p-4'>
        <p className='text-2xl'>Login System</p>
        <ul className='flex gap-4 mr-4'>
            <li><Link to="/register">Sign Up</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>
  )
}

export default Header