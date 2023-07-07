import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Navbar from '../Pages/Navbar';
import Lottie from "lottie-react";
import Load from '../Assets/load.json'
import { BiSidebar } from 'react-icons/bi';


const DashboardLayout = () => {
    const { loading } = useContext(AuthContext)

    let menus;

    menus = <>
        <li className='mt-7'><Link to="/dashboard/allPosts">All Posts</Link></li>
    </>

    if (loading) {
        return <div className='h-[500px] w-[500px] mx-auto'>
            <Lottie animationData={Load} loop={true} />
            <p className='text-center text-3xl font-bold text-sky-400'>Wait loading...</p>
        </div>
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-4">
                    {/* <!-- Page content here --> */}
                    <label htmlFor="my-drawer-2" className="font-bold lg:hidden mb-5"><BiSidebar color='black' size={30} />Sidebar</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side shadow-md mt-4">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-full md:w-80 bg-green-400 font-bold text-[#3e363f]">
                        {/* <!-- Sidebar content here --> */}
                        <li className='absolute top-2 right-2 lg:hidden '><label htmlFor='my-drawer-2' className="btn btn-sm btn-circle bg-boldGreen text-white">✕</label></li>
                        {
                            menus
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;