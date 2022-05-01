import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/shared/logo.svg'

const Nav = () => {
  return (
    <header className='flex items-center fixed w-full text-white'>
      <div className='w-2/4 flex items-center relative'>
        <img src={logo} alt='' className='w-8' />
        <hr className='w-11/12 absolute -right-10 z-50' />
      </div>
      <nav className='w-2/4  backdrop-blur-md bg-[#111827]/20 opacity-80	h-fit'>
        <ul className='flex items-center justify-center h-fit'>
          <li className='my-5'>
            <Link to='/' className='opacity-70 mr-2 py-5'>
              <strong>00</strong>&nbsp; Home
            </Link>
          </li>
          <li>
            <Link to='/' className='opacity-70 mx-2 py-5'>
              <strong>01</strong>&nbsp; Destination
            </Link>
          </li>
          <li>
            <Link to='/' className='opacity-70 mx-2 py-5'>
              <strong>02</strong>&nbsp; Crew
            </Link>
          </li>
          <li>
            <Link to='/' className='opacity-70 mx-2 py-5'>
              <strong>03</strong>&nbsp; Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav