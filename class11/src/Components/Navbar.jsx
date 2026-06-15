import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-zinc-600 w-full h-20 flex items-center justify-center gap-35'>
      <NavLink
        to='/'
        className={({isActive}) =>
          `font-sans font-semibold text-2xl ${isActive ? 'text-blue-400' : 'text-white'}`
        }
      >Home</NavLink>
      <NavLink
        to='/about'
        className={({isActive}) =>
          `font-sans font-semibold text-2xl ${isActive ? 'text-blue-400' : 'text-white'}`
        }
      >About</NavLink>
      <NavLink
        to='/contact'
        className={({isActive}) =>
          `font-sans font-semibold text-2xl ${isActive ? 'text-blue-400' : 'text-white'}`
        }
      >Contact</NavLink>
      <NavLink
        to='/product'
        className={({isActive}) =>
          `font-sans font-semibold text-2xl ${isActive ? 'text-blue-400' : 'text-white'}`
        }
      >Product</NavLink>
    </div>
  )
}

export default Navbar