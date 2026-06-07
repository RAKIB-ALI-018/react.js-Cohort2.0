import React from 'react'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>
       <Navbar name='Jon Snow' links={['products','purchase', 'Buy Now', 'Contacts']} color='red'/>
       <Navbar name='Peter Parker' links={['Home','purchase', 'Buy Now', ]} color='blue'/>
       <Navbar name='Chris Evans' links={['products','purchase', 'Buy Now', 'Contacts', 'click here']} color='green'/>
    </div>
  )
}

export default App
