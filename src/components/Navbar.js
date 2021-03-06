import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/shared/logo.svg';
import hamburger from '../images/shared/icon-hamburger.svg';
import close from '../images/shared/icon-close.svg';

const Nav = () => {
  const [open, setOpen] = useState('closed');
  return (
    <div className='relative z-50'>
      <header className='flex items-center fixed w-full text-white mt-5 justify-between overflow-x-hidden max-w-screen'>
        <div className='sm:w-2/4 flex items-center relative pl-8'>
          <Link to='/'>
            <img src={logo} alt='logo' className='w-8' />
          </Link>
          <hr className='w-10/12 -right-4 absolute z-50 hidden md:block' />
        </div>
        <nav className='sm:w-2/4  backdrop-blur-md bg-[#111827]/20 opacity-80 hidden sm:block'>
          <ul className='flex items-center pl-5 py-5'>
            <li>
              <Link to='/' className={`opacity-70 py-5 md:ml-1.5`}>
                <strong className='hidden md:inline-block'>00</strong>Home
              </Link>
            </li>
            <li>
              <Link to='/destination' className='opacity-70 mx-1.5 py-5'>
                <strong className='hidden md:inline-block'>01</strong>
                Destination
              </Link>
            </li>
            <li>
              <Link to='/crew' className='opacity-70 mx-1.5 py-5'>
                <strong className='hidden md:inline-block'>02</strong>Crew
              </Link>
            </li>
            <li>
              <Link to='/technology' className='opacity-70 mx-1.5 py-5'>
                <strong className='hidden md:inline-block'>03</strong>
                Technology
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className={`sm:hidden pr-8 cursor-pointer ${
            open === 'open' && 'hidden'
          }`}
        >
          <img
            src={hamburger}
            alt='hamburger'
            onClick={() => setOpen('open')}
          />
        </div>
      </header>
      <div
        className={`sm:hidden fixed top-0 h-screen backdrop-blur-md bg-[#111827]/20 opacity-80 right-0 z-40 transition-[width] duration-500 ${
          open === 'closed' ? 'w-0' : 'w-[60vw]'
        }`}
      >
        <ul className='pt-20 relative'>
          <div
            className={`absolute top-6  ${
              open === 'closed' ? 'hidden -right-8' : 'right-8 block'
            }}`}
          >
            <img
              src={close}
              alt='close'
              onClick={() => setOpen('closed')}
              className='cursor-pointer'
            />
          </div>
          <li className='my-4 pl-8 text-xl'>
            <Link to='/' onClick={() => setOpen('closed')}>
              <strong>00</strong>&nbsp;Home
            </Link>
          </li>
          <li className='my-4 pl-8 text-xl'>
            <Link to='/destination' onClick={() => setOpen('closed')}>
              <strong>01</strong>&nbsp;Destination
            </Link>
          </li>
          <li className='my-4 pl-8 text-xl'>
            <Link to='/crew' onClick={() => setOpen('closed')}>
              <strong>02</strong>&nbsp;Crew
            </Link>
          </li>
          <li className='my-4 pl-8 text-xl'>
            <Link to='/technology' onClick={() => setOpen('closed')}>
              <strong>03</strong>&nbsp;Technology
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
