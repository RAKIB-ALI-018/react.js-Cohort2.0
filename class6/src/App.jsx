import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState("");

  function submitHandler(e) {
    e.preventDefault()
    if (name.trim() === "") {
      console.log("You didn't give an input")
    } else {
      console.log("Form Submitted!", name.trim())
      setName("")
    }
  }

  return (
    <div className='px-10 py-10'>
      <form className=' flex gap-3' onSubmit={submitHandler}>
        <input type="text" placeholder='Enter Your Name'
          className='px-3 py-4 border-2 border-black rounded-3xl text-2xl font-sans outline-none'
          value={name}
          onChange={(e) => setName(e.target.value)} />
        <button className='bg-emerald-500 rounded-2xl text-2xl font-sans font-semibold text-white px-4 py-2'>Submit</button>
      </form>

    </div>
  )
}

export default App
