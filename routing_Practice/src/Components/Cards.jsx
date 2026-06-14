import React from 'react';
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <div className='h-screen w-full bg-zinc-700 flex items-center justify-center gap-10'>
      <Link className='text-white text-4xl font-sans underline pr-7 border-r border-white'  to='/IronMan'>Iron Man</Link>
      <Link className='text-white text-4xl font-sans underline pr-7 border-r border-white'  to='/CaptainAmerica'>Captain America</Link>
      <Link  className='text-white text-4xl font-sans underline' to='/Thor'>Thor</Link>      
    </div>
  );
}

export default Cards;
