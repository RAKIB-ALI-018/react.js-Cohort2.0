import React from 'react'
import Card from './Components/Card'

const App = () => {
  const cardDetails1 = {
    name: "Andy Rose",
    email: "rose@gamil.com",
    description: "Senior Developer with 8+ years of Experience",
    imageURL: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVufGVufDB8fDB8fHww"
  }

  
  return (
    <div className='min-h-screen bg-zinc-800 p-4'>
      <Card cardDetails1={cardDetails1} />

    </div>
  )
}

export default App
