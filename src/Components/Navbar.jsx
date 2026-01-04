import React, { use } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = use(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => toast.success("Successfully logged out"))
            .catch((error) => toast.error(error.message));
    };

    const links = (
        <>
            <NavLink
                className={({ isActive }) =>
                    isActive
                        ? "font-bold text-green-300"
                        : "hover:text-green-200 transition"
                }
                to="/"
            >
                Home
            </NavLink>

            <NavLink
                className={({ isActive }) =>
                    isActive
                        ? "font-bold text-green-300"
                        : "hover:text-green-200 transition"
                }
                to="/challenges"
            >
                Challenges
            </NavLink>

            <NavLink
                className={({ isActive }) =>
                    isActive
                        ? "font-bold text-green-300"
                        : "hover:text-green-200 transition"
                }
                to="/myActivities"
            >
                My Activities
            </NavLink>

            <NavLink
                className={({ isActive }) =>
                    isActive
                        ? "font-bold text-green-300"
                        : "hover:text-green-200 transition"
                }
                to="/addNewChallenge"
            >
                Add Challenge
            </NavLink>
            {
                user && <>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? "font-bold text-green-300"
                                : "hover:text-green-200 transition"
                        }
                        to="/dashboard/totalParticipants"
                    >
                        Total Participants
                    </NavLink>
                </>
            }
        </>
        
    );

    return (

        <div
            className="sticky p-6 top-0 z-50 navbar bg-emerald-900 text-white"
            style={{
                width: "100vw",
                maxWidth: "100vw",
                marginLeft: "calc(-50vw + 50%)",
                backgroundColor: "#064e3b", 
            }}
        >


            {/* LEFT SIDE */}
            <div className="navbar-start">
                {/* Mobile Menu Button */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>

                    <ul
                        tabIndex={0}
                        className="menu dropdown-content mt-3 p-4 shadow bg-emerald-800 rounded-box w-56 gap-4"
                    >
                        {links}
                    </ul>
                </div>

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="/logo.jpeg" className="w-10 h-10 rounded-full" alt="logo" />
                    <span className="font-bold text-xl hidden sm:block">
                        Eco-Track
                    </span>
                </div>
            </div>

            {/* CENTER - Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-8 text-[16px]">
                    {links}
                </ul>
            </div>

            {/* RIGHT SIDE */}
            <div className="navbar-end">

                {user ? (
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full ring ring-green-400 ring-offset-2">
                                <img
                                    src={user.photoURL || "/default-user.png"}
                                    alt="user"
                                />
                            </div>
                        </label>

                        <ul
                            tabIndex={0}
                            className="menu dropdown-content mt-3 p-4 shadow bg-emerald-800 rounded-box w-56 gap-2"
                        >
                            <li>
                                <NavLink to="/myActivities">
                                    My Activities
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
                    <NavLink
                        to="/auth/login"
                        className="btn bg-green-700 hover:bg-green-600 border-none text-white px-6"
                    >
                        Login
                    </NavLink>
                )}

            </div>
        </div>

    );
};

export default Navbar;

