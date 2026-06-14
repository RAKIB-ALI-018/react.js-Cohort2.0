import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-zinc-600 w-full h-20 flex items-center justify-center gap-35'>
       <Link 
       className='text-white font-sans font-semibold text-2xl' 
       to='/'>Home</Link>
       <Link className='text-white font-sans font-semibold text-2xl' to='/about'>About</Link>
       <Link className='text-white font-sans font-semibold text-2xl' to='/contact'>Contact</Link>
       <Link className='text-white font-sans font-semibold text-2xl' to='/product'>Product</Link>
    </div>
  )
}

export default Navbar
