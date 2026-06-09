import React, { useState } from 'react'
import Card from './Components/Card';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted!", name.trim(), email.trim());
    
    setUsers([...users, { name: name.trim(), email: email.trim() }]);
    setName('')
    setEmail('')
  }


  return (
    <div>
      <form
        onSubmit={submitHandler}
        className='bg-gray-800 flex items-center justify-center py-5 gap-5'>

        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder='Enter Your Name'
          className='w-80 border bg-white border-black px-10 py-4 outline-none rounded-2xl text-black font-sans font-semibold'
        />

        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder='Enter Your Email'
          className='w-80 border border-black bg-white px-10 py-4 outline-none rounded-2xl text-black font-sans font-semibold'
        />

        <button className='bg-emerald-500 border-none px-7 py-4  rounded-2xl text-white font-sans font-semibold active:scale-90 transition-transform duration-150'
        >Submit</button>

      </form>

       <div className='flex flex-col gap-3 p-5'>
        {users.map((e, index) => (
          <Card key={index} name={e.name} email={e.email} />
        ))}
      </div>
    </div>
  )
}

export default App
