import React from 'react';

const IronMan = () => {
  return (
    <div className='p-8 flex flex-col justify-between items-center'>
      <div className='h-72 w-72  rounded-2xl '>
        <img
          className='object-center object-cover rounded-2xl hover:scale-110 transition-transform duration-300'
          src="https://www.turtlewings.co.in/cdn/shop/files/luvdaddy_RM_of_BTS_as_Iron_Man_realistic_shooting_shot_on_Leica_6ec27528-fd56-4976-b9fb-3facff0efb25.jpg?crop=center&height=800&v=1748146374&width=800" alt="" />
      </div>


      <div className='px-25 w-full py-15'>
        <h1 className='text-blue-600 font-sans text-6xl font-bold text-center mb-3'>Iron Man: The Genius Hero of Marvel</h1>
        <p className='text-white font-sans text-base '>Iron Man is one of the most popular superheroes in the Marvel Universe. He was created by writer Stan Lee, along with Larry Lieber, Don Heck, and Jack Kirby, and first appeared in Tales of Suspense #39 in 1963. <br />

          Iron Man's real name is Tony Stark, a brilliant inventor, engineer, and businessman. After being seriously injured and captured by enemies, Tony built a powerful armored suit to save his life and escape. He later improved the suit and used it to fight crime and protect the world. <br />

          Unlike many superheroes, Iron Man does not possess any natural superpowers. Instead, he relies on his intelligence, advanced technology, and powerful armor. His suit gives him abilities such as flight, super strength, energy blasts, and advanced defense systems.
          <br />

          Iron Man became a founding member of the Avengers, a team of Earth's mightiest heroes. Throughout his journey, he has faced numerous challenges, made sacrifices, and played a crucial role in defending humanity from powerful threats.
          <br />

          Iron Man is admired for his courage, innovation, leadership, and determination. His famous line, "I am Iron Man," has become one of the most iconic quotes in superhero history. Today, Iron Man remains a symbol of how intelligence and hard work can be used to make a positive impact on the world.</p>

      </div>

    </div>
  );
}

export default IronMan;
