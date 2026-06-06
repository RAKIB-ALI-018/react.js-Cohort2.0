import React from 'react'

const Button = (props) => {
    return (
        <div>

            <button className='bg-emerald-400 px-4 py-2 text-white font-bold font-sans border-0 m-3 rounded-3xl text-3xl'>

                {props.user}

            </button>

        </div>
    )
}

export default Button
