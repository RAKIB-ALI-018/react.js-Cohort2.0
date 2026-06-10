import React from 'react'

const Card = (props) => {
    return (
        <div className="w-[49%] bg-zinc-700 border border-zinc-600 rounded-2xl p-7 flex items-center justify-between gap-6 ">
            <img src={props.elem.imageURL}
                className='h-60 w-60 object-cover object-center rounded-[50%]' />

            <div className='flex flex-col  justify-around'>
                <h1 className='text-center text-4xl text-blue-500'>{props.elem.name}</h1>
                <h2 className='text-center text-3xl'>{props.elem.role}</h2>
                <p className='text-sm'>{props.elem.description}</p>
            </div>

        </div>
    )
}

export default Card
