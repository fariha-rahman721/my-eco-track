import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <NavLink className={({ isActive }) =>
            isActive ? "text-shadow-white font-extrabold" : "hover:text-green-100 hover:font-bold"
        } to='/'>Home</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "text-shadow-white font-extrabold" : "hover:text-green-100 hover:font-bold"
        } to='/challenges'>Challenges</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "text-shadow-white font-extrabold" : "hover:text-green-100 hover:font-bold"
        } to='/myActivities'>My Activities</NavLink>

    </>
    return (


        <div className="navbar bg-green-900 shadow-sm w-11/12 md:w-11/12 lg:w-11/12 mx-auto text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-green-800 rounded-box z-1 mt-3 w-52 p-2 gap-4 shadow cursor-pointer font-bold">


                        {links}
                    </ul>
                </div>
                <img src="/logo.jpeg" className='w-13 h-13 rounded-full' alt="" />
                <a className="font-bold pl-2 text-xl text-white">Eco-track</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 cursor-pointer gap-6">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn text-green-900 font-semibold">Login</a>
            </div>
        </div>


    );
};

export default Navbar;