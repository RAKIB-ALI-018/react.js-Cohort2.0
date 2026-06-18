import React, {useContext} from 'react';
import { ThemeDataContext } from '../Context/ThemeContext';

const Section1 = () => {
    const [theme, setTheme] = useContext(ThemeDataContext);
    return (
        <div className='bg-blue-600 h-20 flex items-center justify-center'>
            <h1 className='text-white font-sans text-2xl font-semibold'>Theme is {theme}</h1>
        </div>
    );
}

export default Section1;
