import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Cards = (props) => {
    return (
        <div className='bg-gray-600 shadow-2xl h-[30vh] w-[50%] rounded-2xl flex items-center justify-between px-3'>

            <div
                className='h-[88%] w-[35%] bg-cover bg-center rounded-2xl'
                style={{ backgroundImage: `url(${props.image})` }}
            ></div>

            <div className='flex items-center justify-between h-[88%] w-[60%]  rounded-2xl'>

                <div className=' h-full w-[60%] rounded-2xl flex  justify-between flex-col px-1 py-3'>
                    <div className='flex flex-col justify-between h-[50%] w-full'>
                        <h2 className='text-white font-bold font-sans text-2xl'>{props.name}</h2>
                        <p className='text-white font-sans '>{props.description}</p>
                    </div>
                    <div className='text-blue-500 font-sans text-3xl'>${props.rate}</div>
                </div>

                <div className=' h-full w-[40%] rounded-2xl flex items-center justify-between flex-col px-1 py-3'>
                    <button className='text-emerald-400 bg-transparent border font-sans font-light text-2xl px-2 py-1 rounded-2xl'>In Stock: {props.stock}</button>
                    <button className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">
                        <HiOutlineShoppingBag className="text-white text-3xl" />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Cards
