import React, { use } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { UserIcon } from 'lucide-react';

const Navbar = () => {

    const { user, logOut } = use(AuthContext);
    const handleLogout = () => {
        logOut().then(() => {
            toast.success('successfully logged out')
        }).catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage)
        })
    }

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
        <NavLink className={({ isActive }) =>
            isActive ? "text-shadow-white font-extrabold" : "hover:text-green-100 hover:font-bold"
        } to='/addNewChallenge'>Add New Challenge</NavLink>
        
    </>
    return (


        <div className="navbar bg-emerald-900 shadow-sm w-11/12 md:w-11/12 lg:w-11/12 mx-auto text-white">
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
                <img src="/logo.jpeg" className='w-10 rounded-full' alt="" />
                <a className="font-bold pl-2 text-xl text-white">Eco-track</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 cursor-pointer gap-6">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL || '/default-user.png'} alt="user" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-green-800 rounded-box w-52 text-white"
                        >
                            <li>
                                <NavLink to="/myActivities" className="justify-between">
                                    My Activities
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/myChallenges" className="justify-between">
                                    My Challenges
                                </NavLink>
                            </li>
                            <li>
                                <button onClick={handleLogout} className="text-left">
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <NavLink to="/auth/login" className="btn bg-green-900 hover:bg-green-700 text-white cursor-pointer">
                        Login
                    </NavLink>
                )}
            </div>


        </div>


    );
};

export default Navbar;