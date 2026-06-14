import React from 'react';

const Thor = () => {
  return (
    <div className='p-8 flex flex-col justify-between items-center'>
      <div className='h-72 w-72  rounded-2xl '>
        <img
          className='object-center object-cover rounded-2xl hover:scale-110 transition-transform duration-300'
          src="https://www.syfy.com/sites/syfy/files/2019/07/chris-hemsworth-as-thor-in-avengers-endgame.jpg" alt="" />
      </div>


      <div className='px-25 w-full py-15'>
        <h1 className='text-blue-600 font-sans text-6xl font-bold text-center mb-3'>Thor: The God of Thunder</h1>
        <p className='text-white font-sans text-base '>Thor is one of the most powerful superheroes in the Marvel Universe. He is based on the Norse God of Thunder and was created by Stan Lee, Larry Lieber, and Jack Kirby. Thor first appeared in Journey into Mystery #83 in 1962.
          <br />

          Thor is the prince of Asgard, a mystical realm ruled by his father, Odin. He possesses incredible strength, durability, and control over lightning and thunder. His magical hammer, Mjolnir, allows him to fly, summon storms, and protect both Asgard and Earth from powerful enemies.
          <br />

          Although Thor is a mighty warrior, he also learns important lessons about humility, responsibility, and leadership throughout his journey. His bravery and willingness to sacrifice himself for others make him a true hero.
          <br />

          As a member of the Avengers, Thor has fought alongside many heroes to save the world from dangerous threats. His combination of strength, honor, and compassion has made him one of Marvel's most beloved characters.
          <br />

          Thor inspires people to be courageous, loyal, and determined, even in the face of great challenges.</p>

      </div>

    </div>
  );
}

export default Thor;
