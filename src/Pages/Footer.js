import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-black text-white">
                <div className="grid grid-flow-col gap-4">
                    <a href="/" className="link link-hover">About us</a>
                    <a href="/" className="link link-hover">Contact</a>
                    <a href="/" className="link link-hover">Jobs</a>
                </div>
                <div>
                    <p>Copyright © 2022 - All right reserved by Travel Service</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;