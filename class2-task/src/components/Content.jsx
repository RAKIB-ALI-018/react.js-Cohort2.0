import React from 'react'
import ContentTop from './ContentTop'
import ContentBottom from './ContentBottom'

const Content = () => {
  return (
    <div className='h-[85vh] w-full relative bg-[url(https://images.pexels.com/photos/36231026/pexels-photo-36231026.jpeg)] bg-cover
    bg-center
    bg-no-repeat
    object-cover
    rounded-3xl'>
        <ContentTop />
        <ContentBottom />
      
    </div>
  )
}

export default Content
