import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const DashBoardlayout = () => {
    return (
       <div>
            <header className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto'>
                <Outlet></Outlet>
            </main>
            
        </div>
    );
};

export default DashBoardlayout;