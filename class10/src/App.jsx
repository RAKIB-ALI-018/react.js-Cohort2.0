import {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [num, setNum] = useState(0)
  const [userName, setUserName] = useState('')

  const getData = async ()=>{
    const response = await axios.get('https://randomuser.me/api/')   
    setUserName((response.data.results[0].name.first)+" "+(response.data.results[0].name.last))
  }

  useEffect(()=>{
    getData();
  },[num])
  
  return (
    <div>
      <h1>{userName}</h1>
      <h3>{num}</h3>
      <button  className='bg-emerald-400 px-4 py-2 font-sans text-white font-bold rounded-2xl active:scale-98'
      onClick={()=>{
        setNum(num+1);
      }}>change</button>

    </div>
  )
}

export default App
