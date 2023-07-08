import React from 'react';
import { BiTrendingUp } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import trackDownLogo from '../../Assets/Logo/track-down-logo.png';


const RightSidebar = () => {
    return (
        <div className='basis-full lg:basis-1/4 self-start relative lg:sticky top-0 lg:top-[84px]'>
            <div className="bg-white p-4">
                <div className='flex justify-between items-center mb-4'>
                    <h3 className="text-base font-semibold text-gray-700">Trending News</h3>
                    <BiTrendingUp color='#10a37f' size={30} />
                </div>

                <Link to='#' className="block text-xs font-semibold mt-2">High demand for skilled manpower</Link>
                <span className="text-xs">1d ago &middot; 10,934 readers</span>

                <Link to='#' className="block text-xs font-semibold mt-2">Careers growing horizontally too</Link>
                <span className="text-xs">19h ago &middot; 1,934 readers</span>

                <Link to="#" className="block text-xs font-semibold mt-2">Less work visa for US, more for UK</Link>
                <span className="text-xs">1d ago &middot; 27,934 readers</span>

                <Link to="#" className="block text-xs font-semibold mt-2">More hiring = higher confidence?</Link>
                <span className="text-xs">18h ago &middot; 8,934 readers</span>

                <Link to="#" className="block text-xs font-semibold mt-2">Gautam Adani is the world's third richest</Link>
                <span className="text-xs">12h ago &middot; 4,334 readers</span> <br />

                {/* <Link to="#" className="text-[#10a37f] inline-block py-1 font-thin text-sm underline mt-4">
                        Read More
                    </Link> */}
                <Link to='#' className="inline-block text-xs text-[#10a37f] border border-[#10a37f] rounded-full py-1 px-4 mt-3 font-medium hover:underline">
                    Read More
                </Link>
            </div>

            <div className="text-center p-4">
                <Link to='#' className="inline-block mx-2 my-1 text-sm">
                    About
                </Link>
                <Link to='#' className="inline-block mx-2 my-1 text-sm">
                    Accessibility
                </Link>
                <Link to='#' className="inline-block mx-2 my-1 text-sm">
                    Help Center
                </Link>
                <Link to='#' className="inline-block mx-2 my-1 text-sm">
                    Privacy Policy
                </Link>
                <Link to='#' className="inline-block mx-2 my-1 text-sm">
                    Advertising
                </Link>
                <Link to='#' className="inline-block mx-2 my-1 text-sm">
                    Get the App
                </Link>
                <Link to='#' className="inline-block mx-2 my-1 text-sm">
                    More
                </Link>

                <div className="flex items-center justify-center text-xs font-medium mt-4">
                    <img src={trackDownLogo} alt="logo" className="w-6 mr-1" />
                    <p>Linked-Up &#169; 2023. All rights reserved</p>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;