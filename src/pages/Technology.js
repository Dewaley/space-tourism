import React, { useState } from 'react';
import img_0 from '../images/technology/image-launch-vehicle-portrait.jpg';
import img_1 from '../images/technology/image-spaceport-portrait.jpg';
import img_2 from '../images/technology/image-space-capsule-portrait.jpg';

const Technology = ({ technology }) => {
 const [index, setIndex] = useState(0);
 const imageIndex = (index) => {
   switch (index) {
     case 1:
       return img_1;
     case 2:
       return img_2;
     default:
       return img_0;
   }
 };
 const goToTop = () => {
   window.scrollTo({
     top: 0,
     behavior: 'smooth',
   });
 };
  return (
    <div className='text-white tech-container min-h-screen overflow-x-hidden md:flex md:justify-center md:items-center'>
      <div className='pt-28 px-[5vw]'>
        <h1 className='tracking-widest pb-8'>
          <span className='text-gray-600'>02</span>&nbsp; MEET YOUR technology
        </h1>
        <div className='flex flex-col md:flex-row md:items-center'>
          <div className='order-2 my-4 text-center md:text-left md:w-7/12 flex flex-col md:flex-row md:order-1'>
            <div className='order-2'>
              <h1 className='text-gray-600 uppercase text-2xl md-text-3xl'>
                The technology...
              </h1>
              <h1 className='text-3xl uppercase md:text-4xl my-4'>
                {technology[index].name}
              </h1>
              <p className='text-gray-500 md:max-w-md md:text-left text-center'>
                {technology[index].description}
              </p>
            </div>
            <div className='flex md:flex-col justify-center items-center gap-x-8 md:gap-y-4 my-4 order-1 md:mr-4'>
              <span
                onClick={() => {
                  goToTop();
                  setIndex(0);
                }}
                className={`cursor-pointer text-3xl flex justify-center items-center h-12 w-12 border-2 rounded-full ${
                  index === 0 && 'bg-white text-black'
                }`}
              >1</span>
              <span
                onClick={() => {
                  goToTop();
                  setIndex(1);
                }}
                className={`cursor-pointer text-3xl flex justify-center items-center h-12 w-12 border-2 rounded-full ${
                  index === 1 && 'bg-white text-black'
                }`}
              >2</span>
              <span
                onClick={() => {
                  goToTop();
                  setIndex(2);
                }}
                className={`cursor-pointer text-3xl flex justify-center items-center h-12 w-12 border-2 rounded-full ${
                  index === 2 && 'bg-white text-black'
                }`}
              >
                3
              </span>
            </div>
          </div>
          <div className='order-1 md:w-5/12 md:order-2 flex justify-center items-center overflow-hidden'>
            <img src={imageIndex(index)} alt='' className='max-w-xs' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
