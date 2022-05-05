import React, { useState } from 'react';
import img_0 from '../images/crew/image-douglas-hurley.png';
import img_1 from '../images/crew/image-mark-shuttleworth.png';
import img_2 from '../images/crew/image-victor-glover.png';
import img_3 from '../images/crew/image-anousheh-ansari.png';

const Crew = ({ crew }) => {
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
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='text-white crew-container min-h-screen overflow-x-hidden md:flex md:justify-center md:items-center'>
      <div className='pt-28 px-[5vw]'>
        <h1 className='tracking-widest pb-8'>
          <span className='text-gray-600'>02</span>&nbsp; MEET YOUR CREW
        </h1>
        <div className='flex flex-col md:flex-row md:items-center'>
          <div className='order-2 my-4 text-center md:text-left md:w-2/4 md:order-1'>
            <h1 className='text-gray-600 uppercase text-2xl md-text-3xl'>
              {crew[index].role}
            </h1>
            <h1 className='text-3xl uppercase md:text-4xl my-4'>
              {crew[index].name}
            </h1>
            <p className='text-gray-500 md:max-w-md md:text-left text-center'>{crew[index].bio}</p>
            <div className='flex justify-center items-center gap-x-8 mt-8'>
              <span
                onClick={() => {
                  goToTop();
                  setIndex(0);
                }}
                className={`cursor-pointer h-4 w-4 border-2 rounded-full ${index === 0 && 'bg-white'}`}
              ></span>
              <span
                onClick={() => {
                  goToTop();
                  setIndex(1);
                }}
                className={`cursor-pointer h-4 w-4 border-2 rounded-full ${index === 1 && 'bg-white'}`}
              ></span>
              <span
                onClick={() => {
                  goToTop();
                  setIndex(2);
                }}
                className={`cursor-pointer h-4 w-4 border-2 rounded-full ${index === 2 && 'bg-white'}`}
              ></span>
              <span
                onClick={() => {
                  goToTop();
                  setIndex(3);
                }}
                className={`cursor-pointer h-4 w-4 border-2 rounded-full ${index === 3 && 'bg-white'}`}
              ></span>
            </div>
          </div>
          <div className='order-1 md:w-2/4 md:order-2 flex justify-center items-center overflow-y-hidden'>
            <img src={imageIndex(index)} alt='' className='max-w-xs' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
