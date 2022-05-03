import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='text-white home-container min-h-screen overflow-x-hidden flex flex-col px-4 pt-20 items-center'>
      <div className='flex items-center justify-center flex-col py-4 mb-8'>
        <p className='uppercase tracking-[.2em] text-center'>So, you want to travel to</p>
        <h1 className='tracking-widest text-6xl my-4'>SPACE</h1>
        <p className='text-lg'>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div>
        <Link
          to='/'
          className='h-48 w-48 flex justify-center items-center bg-white text-black uppercase rounded-full'
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default Home;
