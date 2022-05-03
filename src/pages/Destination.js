import React, { useState,useEffect } from 'react';
import img_0 from '../images/destination/image-moon.png';
import img_1 from '../images/destination/image-mars.png';
import img_2 from '../images/destination/image-europa.png';
import img_3 from '../images/destination/image-titan.png';

const Destination = ({ destinations }) => {
  const [index, setIndex] = useState(0);
  const imageIndex = (index) => {
    switch (index) {
      case 1:
        return img_1;
      case 2:
        return img_2;
      case 3:
        return img_3;
      default:
        return img_0;
    }
  };
  
  
  return (
    <div className='text-white destination-container min-h-screen overflow-x-hidden flex justify-center items-center'>
      <div className='flex md:justify-end flex-col px-4 md:px-12 pt-28 w-full max-w-lg md:max-w-none'>
        <h1 className='tracking-widest'>
          <span>0{index + 1}</span>&nbsp; PICK YOUR DESTINATION
        </h1>
        <div className='flex flex-col items-center md:flex-row md:gap-x-2'>
          <div className='pt-10 md:w-2/4'>
            <img src={imageIndex(index)} alt='' />
          </div>
          <div className='flex items-center justify-center flex-col pt-10 text-lg md:w-2/4'>
            <div className='flex gap-x-4'>
              <button
                onClick={() => setIndex(0)}
                className={`py-2 hover:border-b-2 hover:border-b-white ${
                  index === 0 && 'border-b-2 border-b-white'
                }`}
              >
                Moon
              </button>
              <button
                onClick={() => setIndex(1)}
                className={`py-2 hover:border-b-2 hover:border-b-white ${
                  index === 1 && 'border-b-2 border-b-white'
                }`}
              >
                Mars
              </button>
              <button
                onClick={() => setIndex(2)}
                className={`py-2 hover:border-b-2 hover:border-b-white ${
                  index === 2 && 'border-b-2 border-b-white'
                }`}
              >
                Europa
              </button>
              <button
                onClick={() => setIndex(3)}
                className={`py-2 hover:border-b-2 hover:border-b-white ${
                  index === 3 && 'border-b-2 border-b-white'
                }`}
              >
                Titan
              </button>
            </div>
            <h1 className='text-6xl py-8'>{destinations[index].name}</h1>
            <p className='text-lg pb-12 border-b-2 border-b-white'>
              {destinations[index].description}
            </p>
            <div className='flex flex-col text-center md:flex-row md:gap-x-6'>
              <div className='pt-4'>
                <p className='font-thin'>AVG. DISTANCE</p>
                <p className='text-xl uppercase'>
                  {destinations[index].distance}
                </p>
              </div>
              <div className='pt-4'>
                <p className='font-thin'>EST. TRAVEL TIME</p>
                <p className='text-xl uppercase'>
                  {destinations[index].travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
