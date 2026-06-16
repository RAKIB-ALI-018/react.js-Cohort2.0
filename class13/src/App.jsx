import React from 'react';
import Navbar from './Components/Navbar';
import Section from './Components/Section';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <Section >
        <div>
          <h1>Halku re</h1>
          <h2>Batman re</h2>
        </div>
      </Section>
      <Footer />
    </div>
  );
}

export default App;
