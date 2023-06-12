import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Navbar = () => {


    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
                console.log(error);
            });
    }

    const navItem = <React.Fragment>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400">
            <Link to='/'><button type="button" className="lg:mx-1 focus:outline-none text-white bg-emerald-500 hover:bg-emerald-600 focus:ring focus:ring-emerald-200 rounded text-sm font-semibold px-5 py-2.5 mr-2 mb-2 lg:mb-0">Home</button></Link>

            <Link to='/'><button type="button" className="lg:mx-1 focus:outline-none text-white bg-emerald-500 hover:bg-emerald-600 focus:ring focus:ring-emerald-200 rounded text-sm font-semibold px-5 py-2.5 mr-2">Add Post</button></Link>

            <Link to='/contactUs'><button type="button" className="lg:mx-1 focus:outline-none text-white bg-emerald-500 hover:bg-emerald-600 focus:ring focus:ring-emerald-200 rounded text-sm font-semibold px-5 py-2.5 mr-2">Contact Us</button></Link>
        </nav>
    </React.Fragment>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-center">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>


                <Link to='/' className="flex title-font font-medium items-center text-gray-900 ml-2 lg:ml-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">Track-Down</span>
                </Link>

            </div>

            <div className="navbar-start hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>

            <div className="navbar-end">
                {user?.uid ?
                    <>
                        <Link to='/Dashboard'><button type="button" className="focus:outline-none text-white bg-emerald-500 hover:bg-emerald-600 focus:ring focus:ring-emerald-200 rounded text-sm font-semibold px-5 py-2.5 mr-2">Dashboard</button></Link>

                        <button onClick={handleLogOut} type="button" className="focus:outline-none text-white bg-emerald-500 hover:bg-emerald-600 focus:ring focus:ring-emerald-200 rounded text-sm font-semibold px-5 py-2.5 mr-2">Log Out</button>
                    </>
                    :
                    <Link to='/login'><button type="button" className="focus:outline-none text-white bg-emerald-500 hover:bg-emerald-600 focus:ring focus:ring-emerald-200 rounded text-sm font-semibold px-5 py-2.5 mr-2">Log in</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;