import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='flex items-center justify-center bg-zinc-700 h-screen'>
            <button onClick={()=>{
                navigate('/products')
            }} 
            className='bg-emerald-600 font-sans text-white text-2xl px-4 py-2 rounded active:scale-95 '
            >Explore Products</button>
        </div>
    );
}

export default Home;
