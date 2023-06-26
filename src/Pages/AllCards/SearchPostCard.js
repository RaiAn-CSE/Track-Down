import React from 'react';
import { BiCommentDetail, BiLike } from 'react-icons/bi';
import { BsEmojiHeartEyes, BsSend } from 'react-icons/bs';
import { RiShareForwardLine } from 'react-icons/ri';
import userImage from "../../Assets/images/user-1.png"

const SearchPostCard = ({ imageSearch, post: { image, description } }) => {

    // console.log(imageSearch);
    // console.log(image);


    return (
        <div className='pt-5 px-5 rounded-md bg-[#fff]'>
            <div className='flex items-start mb-[20px]'>
                <img className='w-[40px] rounded-full mr-[10px]' src={userImage} alt="user" />
                <div>
                    <h1 className='text-lg leading-none font-semibold text-black'>Raian</h1>
                    <small className='text-xs block'>Founder and CEO at Gellelio group | Angel Investor</small>
                    <small className='text-xs block'>userEmail</small>
                    <small className='text-xs block'>21 hours ago</small>
                </div>
            </div>

            <p className='text-sm mb-[14px]'>{description}</p>
            <img className='mb-3' src={image} alt="post image" width="100%" />


            <div className='flex justify-between items-center flex-wrap border-b border-gray-300 text-xs pb-[6px]'>
                <div className='flex items-center'>
                    <BiLike />
                    <BsEmojiHeartEyes />
                    <span className='block ml-1'>Abhinav Mishra and 75 others</span>
                </div>
                <div className='flex items-center'>
                    <span>22 comments &middot; 40 shares</span>
                </div>
            </div>

            <div className='flex items-center justify-around py-[15px]'>
                <div className='flex items-center'>
                    <BiLike size={18} /><span className='text-sm ml-1'>Like</span>
                </div>
                <div className='flex items-center'>
                    <BiCommentDetail size={17} /><span className='text-sm ml-1'>Comment</span>
                </div>
                <div className='flex items-center'>
                    <RiShareForwardLine size={20} /><span className='text-sm ml-1'>Share</span>
                </div>
                <div className='flex items-center'>
                    <BsSend /><span className='text-sm ml-1'>Send</span>
                </div>
            </div>
        </div>
    );
};

export default SearchPostCard;