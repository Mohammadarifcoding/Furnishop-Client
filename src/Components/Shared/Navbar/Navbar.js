
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from '../Container/Container';


const Navbar = () => {

    const link = <>
    <NavLink to={'/'} className='border-b-[2px] hover:border-b-[2px] hover:border-[#3AA39F] px-2 pb-1 font-semibold'>Home</NavLink>
    <NavLink to={'/Shop'} className='border-b-[2px] hover:border-b-[2px] hover:border-[#3AA39F] px-2 pb-1 font-semibold'>Shop</NavLink>
    <NavLink to={'/Blog'} className='border-b-[2px] hover:border-b-[2px] hover:border-[#3AA39F] px-2 pb-1 font-semibold'>Blog</NavLink>
    <NavLink to={'/contact'} className='border-b-[2px] hover:border-b-[2px] hover:border-[#3AA39F] px-2 pb-1 font-semibold'>Contact</NavLink>
    <NavLink to={'/providers'} className='border-b-[2px] hover:border-b-[2px] hover:border-[#3AA39F] px-2 pb-1 font-semibold'>Providers</NavLink>
    </>

    const  DropLink =  <>
    <Link>Home</Link>
    <Link>Home</Link>
    <Link>Home</Link>
    <Link>Home</Link>
    <Link>Home</Link>
    </>



    return (
        <Container>
        <div className="navbar flex justify-between">
<div className="">
  <div className="dropdown">
    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </div>
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {DropLink}
    </ul>
  </div>
  <div>
      <img src="/Asset/logo.png" className='w-[50px] h-[50px]  ' alt="" />
  </div>
</div>
<div className=" hidden lg:flex gap-5">
  <ul className="menu menu-horizontal px-1 flex gap-5 text-lg menuItemData">
  {link}
  </ul>
  <div className='flex gap-5'>
     <button className='btn rounded-full bg-[#3AA39F] text-white hover:bg-[#28706e]'>Log In</button>
     <button className='btn rounded-full bg-white text-[#3AA39F] hover:border-[#3AA39F] border-[#3AA39F] border  hover:bg-gray-200'>Get Started</button>
  </div>
</div>
{/* <div className="navbar-end">
  <button className='btn'>button</button>
</div> */}
</div>
      </Container>
    );
};

export default Navbar;