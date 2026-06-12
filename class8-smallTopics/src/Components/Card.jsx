import React from 'react'
import Upper from './Upper'
import Lower from './Lower'

const Card = (props) => {
  return (
    <div className='bg-zinc-600 h-96 w-96 rounded-2xl m-3 '> 
    <Upper cardDetails1={props.cardDetails1}/>
    <Lower cardDetails1={props.cardDetails1}/>    
    </div>
  )
}

export default Card
