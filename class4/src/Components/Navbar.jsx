import React from 'react'

const Navbar = (props) => {
  return (
    <div style={{backgroundColor:props.color}} className='h-15 w-full flex items-center justify-between px-2 py-2 mb-2.5 gap-2.5'>
        
        <h1>{props.name}</h1>

        <div className='flex gap-10'>
            {
                props.links.map(function(elem, idx){
                    return <h4 key={idx}>{elem}</h4>
                })
            }
        </div>
      
    </div>
  )
}

export default Navbar
