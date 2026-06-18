import React, { useContext } from 'react';
import { ThemeDataContext } from '../Context/ThemeContext';

const Section2 = () => {
    const [theme, setTheme] = useContext(ThemeDataContext);
    return (
        <div className='bg-blue-400 h-20 flex items-center justify-center'>
            <button onClick={() => {
                if (theme === 'Light') {
                    setTheme('Dark')
                } else if (theme === 'Dark') {
                    setTheme('Light')
                }
            }}
                className='py-3 px-5 rounded-2xl  bg-transparent border border-blue-50 text-white font-sans font-light active:scale-98'>Theme Change</button>
        </div >
    );
}

export default Section2;
