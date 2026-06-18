import React, {useContext} from 'react';
import { ThemeDataContext } from '../Context/ThemeContext';

const Navbar = () => {
    const [theme, setTheme] = useContext(ThemeDataContext);
    
    
  return (
    <div className='bg-emerald-600 h-20 flex items-center justify-center'>
        <h1 className='text-white font-sans text-2xl font-semibold'>Current Theme Is {theme}</h1>     
    </div>
  );
}

export default Navbar;
