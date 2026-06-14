import React from 'react';

const CaptainAmerica = () => {
  return (
    <div className='p-8 flex flex-col justify-between items-center'>
      <div className='h-72 w-72  rounded-2xl '>
        <img
          className='object-center object-cover rounded-2xl hover:scale-110 transition-transform duration-300'
          src="https://www.hollywoodreporter.com/wp-content/uploads/2016/08/civilwar571feeb0a53cd-h_2016.jpg?w=1296&h=730&crop=1" alt="" />
      </div>


      <div className='px-25 w-full py-15'>
        <h1 className='text-blue-600 font-sans text-6xl font-bold text-center mb-3'>Captain America: The First Avenger</h1>
        <p className='text-white font-sans text-base '>Captain America is one of the most respected superheroes in the Marvel Universe. Created by Joe Simon and Jack Kirby, he first appeared in Captain America Comics #1 in 1941.
          <br />

          Captain America's real name is Steve Rogers. Before becoming a hero, he was a young man who wanted to serve his country despite being physically weak. He volunteered for a special experiment known as the Super-Soldier Program, which transformed him into a strong, agile, and highly skilled soldier.
          <br />

          Known for his iconic vibranium shield, Captain America uses his strength, intelligence, and leadership skills to protect innocent people and fight for justice. Unlike many superheroes, his greatest power is his unwavering moral character and dedication to doing what is right.
          <br />

          Captain America is a founding member of the Avengers and often serves as the team's leader. He inspires others through his courage, honesty, and selflessness.
          <br />

          As a symbol of hope, freedom, and perseverance, Captain America remains one of the most iconic and admired superheroes of all time.</p>

      </div>

    </div>
  );
}

export default CaptainAmerica;
