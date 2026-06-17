import React, { useContext } from 'react';
import { UserDataContext } from '../Context/UserContext';

const Navbar = () => {
    const data = useContext(UserDataContext)
    console.log(data);
    


    return (
        <div className='bg-emerald-600 w-screen h-20 flex items-center justify-center'>
            <h1 className='font-sans text-2xl text-white font-semibold'>Heloooo From Navbar</h1>
            {data}
        </div>
    );
}

export default Navbar;
