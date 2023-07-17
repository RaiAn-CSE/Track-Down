import React, { useContext } from 'react';
import { BsFillHouseCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import premiumImg from '../../Assets/Logo/premiumImg.png'
import { AuthContext } from '../../contexts/AuthProvider';
import imgCover from "../../Assets/images/Track-Down-Cover-Img.png"

const LeftSidebar = () => {

    const { user } = useContext(AuthContext);
    return (
        <div className='basis-full lg:basis-1/4 self-start relative lg:sticky top-0 lg:top-[84px]'>
            <div className='bg-white'>
                <img src={imgCover} alt="cover" width="100%" />
                <div className='px-5'>
                    <img className='w-20 bg-white rounded-full -mt-9 p-1' src={user?.photoURL} alt="profile" />
                    <h1 className='text-base font-semibold text-gray-700'>{user?.displayName}</h1>
                    <h3 className='text-sm font-medium text-gray-500 my-1'>Web developer at DoReDo Service</h3>
                    <div className="mt-5">
                        <ul className="list-none space-y-2">
                            <li className="w-full text-sm flex justify-between">
                                Your profile views
                                <span className="text-[#10a37f]">52</span>
                            </li>
                            <li className="w-full text-sm flex justify-between">
                                Your post views
                                <span className="text-[#10a37f]">810</span>
                            </li>
                            <li className="w-full text-sm flex justify-between">
                                Your connections
                                <span className="text-[#10a37f] mb-3">205</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-center border border-gray-300">
                    <Link to='' className="flex items-center justify-center py-4 px-2 text-sm w-1/2">
                        <BsFillHouseCheckFill className='mr-1' size={20} />
                        My Items
                    </Link>
                    <Link to='' className="flex items-center justify-center py-4 px-2 border-l border-gray-300 text-sm w-1/2">
                        {/* <MdOutlineWorkspacePremium className='mr-1' size={20} /> */}
                        <img width={23} className='mr-1' src={premiumImg} alt="" />
                        Try premium
                    </Link>
                </div>
            </div>

            <div className="bg-white p-4 my-4 text-center text-xs">
                <small className="float-right font-medium">Ad &middot; &middot; &middot;</small>
                <p className="mt-2 mb-2">Master the 5 principles of web design</p>
                <div className="flex justify-center">
                    <img src="https://classyprice.com.bd/images/Xiaomi-Mi-10-Ultra.jpg" alt="img" className="w-20 rounded-full m-1" />
                    <img src="https://raigadget.com/wp-content/uploads/2021/07/Untitled-design-2-51.png" alt="img" className="w-20 rounded-full m-1" />
                </div>
                <b className="block mt-2 font-medium">Brand and Demand in Xiaomi</b>
                <Link to='#' className="inline-block text-[#10a37f] border border-[#10a37f] rounded-full py-1 px-4 mt-3 font-medium hover:underline">
                    Learn More
                </Link>
            </div>

        </div>
    );
};

export default LeftSidebar;