import React from 'react'

const Card = ({ elem, idx, deleteHandler }) => {
  return (
    <div className='bg-zinc-600 h-120 w-[31%] border border-zinc-600 rounded-2xl px-6 py-4 flex flex-col items-center justify-between'>
      <img className='h-40 w-40 rounded-full object-cover object-center' src={elem.imageURL} />
      <div className='flex gap-2 flex-col'>
        <h1 className='text-center font-sans text-blue-500 text-5xl font-bold'>{elem.name}</h1>
        <h3 className='text-center font-sans text-white text-2xl'>{elem.role}</h3>
        <p className='text-center font-sans text-white text-sm'>{elem.description}</p>
      </div>
      <button onClick={() => deleteHandler(idx)} className='bg-red-600 text-white font-sans px-3 py-2 rounded active:scale-99'>Remove</button>
    </div>
  )
}

export default Card