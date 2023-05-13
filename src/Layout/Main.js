import React from 'react';
import Navbar from '../Pages/Navbar.js';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer.js';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;