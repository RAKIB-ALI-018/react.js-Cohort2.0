import React from 'react'

const Nav = () => {
  return (
    <div className='nav'>
        <div className="courtName">
            <h1>Horizon Courts</h1>
        </div>
        <div className="options">
            <i>About Us</i>
            <i>Services</i>
            <i>Coaches</i>
            <i>Events</i>
            <i>Contacts</i>
        </div>
        <div className="bookNow">
            <button>Book Now</button>
        </div>
      
    </div>
  )
}

export default Nav
