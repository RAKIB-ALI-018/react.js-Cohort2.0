import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import Card from './Components/Card'

const App = () => {
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');
  
  const localData = JSON.parse(localStorage.getItem('all-users')) || []

  const [allUsers, setAllUsers] = useState(localData)


  const submitHandler = (e) => {
    e.preventDefault();

    const oldUsers = [...allUsers];

    oldUsers.push({ name, role, description, imageURL })

    setAllUsers(oldUsers)
    localStorage.setItem('all-users',JSON.stringify(oldUsers))
    setName('')
    setImageURL('')
    setRole('')
    setDescription('')
  }

  const deleteUser = (idx) => {
    const copyUsers = [...allUsers]

    const conf = confirm('Are you really want to delete this element?')

    if(conf){
      copyUsers.splice(idx, 1)
    }else{
      alert('element Not Deleted')
    }

    setAllUsers(copyUsers)
    localStorage.setItem('all-users',JSON.stringify(copyUsers))
  }

  return (
    <div className='bg-zinc-800 min-h-screen p-4 ' >

      <div className='p-4 sticky top-0 z-10 bg-zinc-800'>
        <div className='flex items-center justify-center gap-3 mb-2'>
          <FaUser className="text-blue-500 text-3xl" />
          <h3 className='text-2xl text-white font-sans font-bold'>Add New User</h3>
        </div>

        <form onSubmit={(e) => { submitHandler(e) }} className='flex gap-3 flex-wrap items-center justify-center p-6'>
          <input value={name} onChange={(e) => setName(e.target.value)} required type="text" placeholder='Enter Employee Name' className='w-[49%] bg-zinc-700 px-5 py-3 rounded text-white font-sans outline-none' />
          <input value={imageURL} onChange={(e) => setImageURL(e.target.value)} required type="text" placeholder='Enter Image URL' className='w-[49%] bg-zinc-700 px-5 py-3 rounded text-white font-sans outline-none' />
          <input value={role} onChange={(e) => setRole(e.target.value)} required type="text" placeholder='Enter Employee Role' className='w-[49%] bg-zinc-700 px-5 py-3 rounded text-white font-sans outline-none' />
          <input value={description} onChange={(e) => setDescription(e.target.value)} required type="text" placeholder='Enter his/her Description' className='w-[49%] bg-zinc-700 px-5 py-3 rounded text-white font-sans outline-none' />
          <button className='px-5 py-3 bg-emerald-500 w-[99%] rounded text-2xl text-white font-sans active:scale-99'>Submit</button>
        </form>
      </div>

      <div className='px-11 flex gap-10 flex-wrap '>
        {allUsers.map((elem, idx) => (
          <Card key={idx} elem={elem} idx={idx} deleteHandler={deleteUser} />
        ))}
      </div>

    </div>
  )
}

export default App