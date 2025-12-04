import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { Authcontext } from '../provider/Authprovider';
import toast, { Toaster } from 'react-hot-toast';

const Navber = () => {
    const activeStyle = "text-[#632EE3] font-semibold border-b-2 border-[#632EE3]";
    const normalStyle = "text-gray-700 hover:text-[#632EE3] transition";
    const nevigate = useNavigate();
    const { user, LogOut } = use(Authcontext);
    const handlelogout = () => {
        LogOut().then(() => {
            
            toast.success('successfully log out')
            nevigate('/auth/login')
        })
            .catch((error) => {
                console.log(error);
            })
    }
    const links = <>
        <NavLink className={({ isActive }) => (isActive ? activeStyle : normalStyle)} to='/'><li>Home</li></NavLink>
        <NavLink className={({ isActive }) => (isActive ? activeStyle : normalStyle)} to='/services'><li className=''>Services</li></NavLink>
        {
            user &&
            <NavLink className={({ isActive }) => (isActive ? activeStyle : normalStyle)} to='/myprofile'><li>My Profile</li></NavLink>
        }
    </>

    return (
        <div className=" max-w-11/12 mx-auto navbar fixed top-0  w-full bg-transparent backdrop-blur-md p-3 shadow-sm z-50">
            <div><Toaster/></div>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
               <Link to='/'> <a  className="text-2xl font-bold">Pet<span className="text-purple-700">Care</span></a></Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal flex gap-3 px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end">
                {user ? (
                    <div className="flex items-center">
                        <div className="dropdown dropdown-bottom dropdown-end">
                            {/* Trigger: user avatar */}
                            <div tabIndex={0} className="avatar cursor-pointer">
                                <img
                                    src={user.photoURL || "/default-avatar.png"}
                                    className="rounded-full border-2 h-12 w-12"
                                    alt={user.displayName || "User"}
                                />
                            </div>

                            {/* Dropdown content */}
                            <ul
                                tabIndex={-1}
                                className="dropdown-content menu bg-white rounded-box w-48 shadow-lg p-2 mt-2"
                            >
                                <li className='ml-2 text-lg font-bold'>
                                    {user.displayName}
                                </li>
                                <li>
                                    <button
                                        onClick={handlelogout}
                                        className="w-full text-left"
                                    >
                                        Log Out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className="flex gap-3">
                        <Link to="/auth/login" className="btn">
                            Log in
                        </Link>
                        <Link to="/auth/register" className="btn bg-purple-700 text-white">
                            Register Now
                        </Link>
                    </div>
                )}
            </div>
            

        </div>
    );
};

export default Navber;