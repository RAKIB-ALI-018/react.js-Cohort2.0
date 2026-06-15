import React, {useState} from 'react';
import Navbar from './Components/Navbar';


const App = () => {
  const [theme, setTheme] = useState('Light');

  const changeTheme = (newTheme)=>{
    setTheme(newTheme)
    
  }
  return (
    <div>
      <h1>Current Theme Is {theme}</h1>
      <Navbar changeTheme={changeTheme}/>
      
    </div>
  );
}

export default App;
