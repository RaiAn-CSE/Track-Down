import React from 'react';
import logo from "../Assets/Logo/track-down-logo.png"
import { Link } from 'react-router-dom';
import DashboardCss from './Dashboard.module.css'
import { MdOutlineLogout, MdSpaceDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";

const Dashboard = () => {
    return (

        <div className={DashboardCss.DashboardSection}>
            <aside className={DashboardCss.sidebar}>
                <div className={DashboardCss.logo}>
                    <img src={logo} alt="logo" />
                    <h2>Track Down</h2>
                </div>
                <ul className={DashboardCss.links}>
                    <h4>Main Menu</h4>
                    <li>
                        <span><MdSpaceDashboard size={20} /></span>
                        <Link className='p-[10px] text-black font-semibold hidden hover:block' to='/dashboardHome'>Dashboard</Link>
                    </li>
                    <li>
                        <span><GrMoney size={20} /></span>
                        <Link className='p-[10px] text-black font-semibold hidden hover:block' t0='/#'>Revenue</Link>
                    </li>
                    <li>
                        <span><TbReportAnalytics size={22} /></span>
                        <Link className='p-[10px] text-black font-semibold hidden hover:block' t0='/#'>Reports</Link>
                    </li>
                    <hr />
                    <h4>Advanced</h4>
                    <li>
                        <span><MdSpaceDashboard></MdSpaceDashboard></span>
                        <a href="#">Designer</a>
                    </li>
                    <li>
                        <span><MdSpaceDashboard></MdSpaceDashboard></span>
                        <a href="#">Developer </a>
                    </li>
                    <li>
                        <span><MdSpaceDashboard></MdSpaceDashboard></span>
                        <a href="#">Magic Build</a>
                    </li>
                    <li>
                        <span><MdSpaceDashboard></MdSpaceDashboard></span>
                        <a href="#">Theme Maker</a>
                    </li>
                    <li>
                        <span><MdSpaceDashboard></MdSpaceDashboard></span>
                        <a href="#">Analytic</a>
                    </li>
                    <hr />
                    <h4>Account</h4>
                    <li>
                        <span><MdSpaceDashboard></MdSpaceDashboard></span>
                        <a href="#">Overview</a>
                    </li>
                    <li>
                        <span><MdSpaceDashboard></MdSpaceDashboard></span>
                        <a href="#">Message</a>
                    </li>
                    <li>
                        <span><MdSpaceDashboard></MdSpaceDashboard></span>
                        <a href="#">Settings</a>
                    </li>
                    <li className="logout-link">
                        <span><MdOutlineLogout size={20}></MdOutlineLogout></span>
                        <a href="#">Logout</a>
                    </li>
                </ul>
            </aside>

        </div>
    );
};

export default Dashboard;