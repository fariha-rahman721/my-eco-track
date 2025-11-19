import React from 'react';
import Home from '../Pages/Home/Home';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const PublicLayout = () => {
    return (
        <div>
            <Navbar>

            </Navbar>
            <Outlet>

            </Outlet>
            
            
        </div>
    );
};

export default PublicLayout;