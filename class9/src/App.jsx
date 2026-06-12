// App.jsx
import React, { useState } from 'react'
import axios from 'axios'
import Card from './Components/Card';

const App = () => {
  const [allUsers, setAllUsers] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    console.log(response.data)

    setAllUsers(response.data)
  }

  return (
    <div className='bg-zinc-600 p-4 min-h-screen flex flex-col items-center'>

      <button
        onClick={getData}
        className='bg-emerald-700 px-5 py-2 font-sans text-white text-2xl font-bold rounded-2xl active:scale-98 mb-4 '>
        click Me!
      </button>

      <div className='flex flex-wrap w-full gap-3 p-4'>
        {allUsers.map((elem, idx) => {
          return (<div key={idx}>
            <Card elem={elem}/>
          </div>)
        })}
      </div>

    </div>
  )
}

export default App