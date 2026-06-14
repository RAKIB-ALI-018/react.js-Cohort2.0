import React from 'react';
import IronMan from './Pages/IronMan';
import CaptainAmerica from './Pages/CaptainAmerica';
import Thor from './Pages/Thor';
import Cards from './Components/Cards';

import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='bg-zinc-700 h-screen'>
      <Routes>

        <Route path = '/' element={<Cards />}></Route>
        <Route path = '/IronMan' element={<IronMan />}></Route>
        <Route path = '/CaptainAmerica' element={<CaptainAmerica />}></Route>
        <Route path = '/Thor' element={<Thor />}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
