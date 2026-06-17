import React from 'react';

const Section = (props) => {
    return (
        <div className='bg-blue-700 w-full flex-1 flex flex-col items-center justify-center'>
            <h1 className='font-sans text-2xl text-white font-semibold'>Heloooo From Section</h1>
            {props.children}
            
        </div>
    );
}

export default Section;
