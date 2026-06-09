import React from 'react'

const Card = ({ name, email }) => {
  return (
    <div className='w-full bg-emerald-600 px-10 py-5 rounded-2xl'>
      <div className='flex items-center justify-between'>
        <h2 className='text-white font-semibold'>{name}</h2>
        <h2 className='text-white font-semibold'>{email}</h2>
      </div>
    </div>
  )
}

export default Card