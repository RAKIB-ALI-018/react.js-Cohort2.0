import React, { useState } from 'react'
import Card from './Components/Card';
import { FaUser } from "react-icons/fa";

const App = () => {
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');

  const [allUsers, setAllUsers] = useState([]);


  const submitHandler = (e) => {
    e.preventDefault();

    setAllUsers([...allUsers, { name, imageURL, role, description }])
    console.log("Form Submitted!", name, role, imageURL, description);


    setName('')
    setImageURL('')
    setRole('')
    setDescription('')
  }

  return (
    <div className='bg-zinc-800 text-white font-sans min-h-screen p-5'>
      <div >

        <div className='flex items-center justify-center gap-3 mb-2 '>
          <FaUser className="text-blue-500 text-3xl" />
          <h3 className=' text-2xl'> Add New User</h3>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) =>
            submitHandler(e)
          }
          className='flex flex-wrap  gap-3 items-center justify-center mb-4'>
          <input
            required
            value={name}
            onChange={(e) => { setName(e.target.value) }}
            type="text"
            placeholder='Enter Your Name'
            className='w-[48%] px-5 py-4 rounded bg-zinc-700 border border-zinc-600  outline-none required' />

          <input
            required
            value={imageURL}
            onChange={(e) => { setImageURL(e.target.value) }}
            type="text"
            placeholder='Image URL'
            className='w-[48%] px-5 py-4 rounded bg-zinc-700 border border-zinc-600 outline-none required' />

          <input
            required
            value={role}
            onChange={(e) => { setRole(e.target.value) }}
            type="text"
            placeholder='Enter Role'
            className='w-[48%] px-5 py-4 rounded bg-zinc-700 border border-zinc-600 outline-none required' />

          <input
            required
            value={description}
            onChange={(e) => { setDescription(e.target.value) }}
            type="text"
            placeholder='Enter Description'
            className='w-[48%] px-5 py-4 rounded bg-zinc-700 border border-zinc-600 outline-none required' />
          <button className='w-[97%] bg-zinc-700 active:scale-96 border border-zinc-600 px-5 py-4 rounded font-semibold text-2xl'>Create User</button>
        </form>

      </div>


      {/* Cards wrapper */}
      <div className='flex flex-wrap gap-3 justify-between p-7'>
        {allUsers.map((elem, idx) => (
          <Card key={idx} elem={elem} />
        ))}
      </div>


    </div>
  )
}

export default App
