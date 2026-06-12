import React from 'react'

const Lower = (props) => {
  return (
    <div>
      <div className='w-full h-48 text-white font font-sans flex flex-col items-center gap-2 px-2 py-4'>
        <h1 className='text-4xl font-bold text-emerald-700'>{props.cardDetails1.name}</h1>
        <h3 className='text-2xl'>{props.cardDetails1.email}</h3>
        <p>{props.cardDetails1.description}</p>
      </div>

    </div>
  )
}

export default Lower
