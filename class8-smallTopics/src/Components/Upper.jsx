import React from 'react'

const Upper = (props) => {
  return (
    <div>
      <div className=' w-full h-48 rounded-t-2xl'>
        <img className='object-center object-cover h-48 w-full rounded-t-2xl' src={props.cardDetails1.imageURL} alt="" />
      </div>
      
    </div>
  )
}

export default Upper
