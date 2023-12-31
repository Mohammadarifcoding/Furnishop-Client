import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar.tsx';

const Layout = () => {
    return (
        <div className='overflow-hidden'>
           <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;