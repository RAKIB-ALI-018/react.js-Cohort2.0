import React from 'react'

const BelowAbout = () => {
    return (
        <div className=' h-[45vh] w-full flex items-center justify-between px-2 py-2'>

            <div className='bg-blue-800 h-[90%] w-[31%] rounded-3xl px-3 py-3 flex items-center'>
                <h1 className='text-white font-medium font-sans text-3xl'>Professional hard courts
                    with tournament-grade
                    lighting & climate control —
                    play in perfect conditions,
                    in any season.</h1>
            </div>

            <div className='bg-blue-400 h-[90%] w-[31%] rounded-3xl bg-[url(https://images.pexels.com/photos/6292462/pexels-photo-6292462.jpeg)] bg-cover
            bg-center
            bg-no-repeat
            object-cover relative'>
                <button
                    className="
                        px-8 py-4
                        text-white text-2xl font-light
                        rounded-full
                        bg-white/20
                        backdrop-blur-md
                        border border-white/20
                        shadow-lg
                        hover:bg-white/30
                        transition-all duration-300
                        cursor-pointer absolute left-[15%] top-[20%]"  >
                    Private & Group Lessons
                </button>
            </div>


            <div className='bg-blue-100 h-[90%] w-[31%] rounded-3xl'></div>

        </div>
    )
}

export default BelowAbout
