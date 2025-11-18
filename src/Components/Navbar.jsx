import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <NavLink className={({ isActive }) =>
            isActive ? "text-green-900 font-extrabold" : "hover:text-green-700 hover:font-extrabold"
        } to='/'>Home</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "text-green-900 font-extrabold" : "hover:text-green-700 hover:font-extrabold"
        } to='/challenges'>Challenges</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "text-green-900 font-extrabold" : "hover:text-green-700 hover:font-extrabold"
        } to='/myActivities'>My Activities</NavLink>

    </>
    return (


        <div className="navbar bg-base-100 shadow-sm w-11/12 md:w-11/12 lg:w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 gap-4 shadow cursor-pointer">


                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Eco-track</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 cursor-pointer gap-6">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>


    );
};

export default Navbar;