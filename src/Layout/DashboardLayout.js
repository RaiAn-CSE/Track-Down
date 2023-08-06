import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Navbar from '../Pages/Navbar';
import Lottie from "lottie-react";
import Load from '../Assets/load.json'
import DashboardCss from '../Pages/Dashboard.module.css'
import logo from "../Assets/Logo/track-down-logo.png"
import { MdDeveloperMode, MdOutlineLogout, MdSpaceDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { GrMoney, GrOverview } from "react-icons/gr";
import { BsFillPostcardFill } from 'react-icons/bs';
import { SiAltiumdesigner, SiGoogleanalytics, SiGooglemessages } from 'react-icons/si';
import { FiSettings } from 'react-icons/fi';
import { TbMessage2Check } from 'react-icons/tb';

const DashboardLayout = () => {
    const { loading } = useContext(AuthContext);

    let menus;

    menus = <>
        <li className='mt-10'><Link to="/dashboard/allPosts">All Posts</Link></li>
    </>

    if (loading) {
        return <div className='h-[500px] w-[500px] mx-auto'>
            <Lottie animationData={Load} loop={true} />
            <p className='text-center text-3xl font-bold text-sky-400'>Wait loading...</p>
        </div>
    }

    return (
        <div>

            {/* <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-4">
                    <label htmlFor="my-drawer-2" className="font-bold mb-5"><BiSidebar color='black' size={30} />Sidebar</label>
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side shadow-md mt-4">
                    <h1>Hi This is raian</h1>
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 md:w-80 bg-green-400 font-bold text-[#3e363f]">

                        <li className='absolute top-2 right-2 lg:hidden '><label htmlFor='my-drawer-2' className="btn btn-sm btn-circle bg-boldGreen text-white">✕</label></li>
                        {
                            menus
                        }
                    </ul>

                </div>
            </div> */}

            <Navbar></Navbar>
            <div className={`flex ${DashboardCss.dashboardSection}`}>

                <aside className={`basis-[10%] ${DashboardCss.sidebar}`}>
                    <div className={DashboardCss.logo}>
                        <img src={logo} alt="logo" />
                        <h2>Track Down</h2>
                    </div>
                    <ul className={`px-[10px] ${DashboardCss.links}`}>
                        <h4>Main Menu</h4>
                        <li>
                            <span><MdSpaceDashboard size={20} /></span>
                            <Link className='p-[10px] text-black font-semibold hidden hover:block' to='/dashboardLayout'>Dashboard</Link>
                        </li>
                        <li>
                            <span><BsFillPostcardFill size={20} /></span>
                            <Link className='p-[10px] text-black font-semibold hidden hover:block' to='/dashboardLayout/allPosts'>Posts</Link>
                        </li>
                        <li>
                            <span><GrMoney size={20} /></span>
                            <Link className='p-[10px] text-black font-semibold hidden hover:block' to='/dashboardLayout/allPosts'>Revenue</Link>
                        </li>
                        <li>
                            <span><TbReportAnalytics size={22} /></span>
                            <Link className='p-[10px] text-black font-semibold hidden hover:block' to='/#'>Reports</Link>
                        </li>
                        <hr />
                        <h4>Advanced</h4>
                        <li>
                            <span><SiAltiumdesigner size={22} /></span>
                            <Link className='p-[10px] text-black font-semibold hidden hover:block' to='/#'>Designer</Link>
                        </li>
                        <li>
                            <span><MdDeveloperMode size={22} /></span>
                            <Link className='p-[10px] text-black font-semibold hidden hover:block' to='/#'>Developer</Link>
                        </li>
                        <li>
                            <span><SiGoogleanalytics size={22} /></span>
                            <Link className='p-[10px] text-black font-semibold hidden hover:block' to='/#'>Analytic</Link>
                        </li>
                        <hr />
                        <h4>Account</h4>
                        <li>
                            <span><GrOverview size={22} /></span>
                            <Link className='p-[10px] text-black font-semibold hidden hover:block' to='/#'>Overview</Link>
                        </li>
                        <li>
                            <span><SiGooglemessages size={22} /></span>
                            <Link className='p-[10px] text-black font-semibold hidden hover:block' to='/#'>Message</Link>
                        </li>
                        <li>
                            <span><FiSettings size={22} /></span>
                            <Link className='p-[10px] text-black font-semibold hidden hover:block' to='/#'>Settings</Link>
                        </li>
                        <li className={DashboardCss.logoutLink}>
                            <span><MdOutlineLogout size={22} /></span>
                            <Link className='p-[10px] text-black font-semibold hidden hover:block' to='/#'>Logout</Link>
                        </li>

                    </ul>
                </aside>

                <div className='basis-[90%] relative right-0'>
                    <Outlet></Outlet>
                </div>

            </div>

        </div>
    );
};

export default DashboardLayout;