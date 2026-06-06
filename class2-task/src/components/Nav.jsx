import React from 'react'

const Nav = () => {
    return (
        <div className='h-[12vh] w-full flex p-2.5 items-center justify-between '>
            <div className="courtName">
                <h1 className='font-sans text-4xl'>Horizon Courts</h1>
            </div>
            <div className="options flex w-[40%] items-center justify-between">
                <i className='font-sans not-italic cursor-pointer'>Abouts Us</i>
                <i className='font-sans not-italic cursor-pointer'>Services</i>
                <i className='font-sans not-italic cursor-pointer'>Coaches</i>
                <i className='font-sans not-italic cursor-pointer'>Events</i>
                <i className='font-sans not-italic cursor-pointer'>Contacts</i>
            </div>
            <div className="booknow">
                <button className="bg-blue-700 px-4 py-3 text-white rounded-3xl border border-blue-700 hover:bg-white hover:text-blue-700 cursor-pointer">
                    Book Now
                </button>
            </div>
        </div>
    )
}

export default Nav
