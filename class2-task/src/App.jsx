import React from 'react'
import Nav from './components/Nav'
import Content from './components/Content'
import About from './components/About'
import BelowAbout from './components/BelowAbout'

const App = () => {
  return (
    <div className='p-2.5'>
      <Nav/>
      <Content/>
      <About />
      <BelowAbout />
    </div>
  )
}

export default App
