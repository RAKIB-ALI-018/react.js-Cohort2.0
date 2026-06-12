import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-zinc-800 h-60 w-55 p-2 rounded flex flex-col items-center justify-between'>
        <img 
        className='h-50 w-50 rounded object-center object-cover'
        src={ props.elem.download_url} alt="" 
        />

        <h1 className='text-white font-sans text-2xl'>{props.elem.author}</h1>
      
    </div>
  )
}

export default Card
