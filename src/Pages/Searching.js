import React, { useContext, useState } from 'react';
import homeCSS from './Home.module.css'
import { AuthContext } from '../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import userImage from "../Assets/images/user-1.png"
import { BsArrowBarRight, BsCameraVideoFill, BsEmojiHeartEyes, BsFillCalendarEventFill, BsFillCameraFill, BsSend, BsSendCheck } from 'react-icons/bs';
import { AiFillDelete, AiOutlineCloudUpload, AiOutlineFileSearch } from 'react-icons/ai';
import { BiCommentDetail, BiLike } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';


const Searching = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm()

    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No selected file")
    const [fileSize, setFileSize] = useState(0)


    const handleItem = (data) => {
        console.log(data);
        const img = data.image[0]
        const { name, price, description } = data;

        const uri = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgBBkey}`

        const formData = new FormData()
        formData.append('image', img)

        setLoading(true)
        fetch(uri, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {

                console.log(imgData);
                console.log(imgData.status);

                if (imgData.status === 200) {

                    console.log(imgData);

                    const itemInfo = {
                        description,
                        image: imgData.data.url,
                        userEmail: user.email,
                        userName: user.name,
                    }

                    console.log(itemInfo);


                    fetch(`http://localhost:5000/posts`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `Bearer ${localStorage.getItem('phone-token')}`
                        },
                        body: JSON.stringify(itemInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success("Post added successfully", {
                                    duration: 4000,
                                    position: 'top-center'
                                })

                                // navigate('/dashboard/allItems')
                            } else {
                                toast.error("Failed to add data", {
                                    duration: 4000,
                                    position: 'top-center'
                                })
                            }
                        })
                        .catch(error => {
                            toast.error("Failed to store the postt info", {
                                duration: 4000,
                                position: 'top-center'
                            })
                        })
                }
            })
            .catch(error => {
                toast.error("Image upload failed", {
                    duration: 4000,
                    position: 'top-center'
                })
            })


        setLoading(false)

        if (loading) {
            return "Loading"
        }
    }


    return (
        <div className=' bg-gray-100 text-gray-600 min-h-screen block lg:flex items-center justify-between py-[5px] lg:py-[10px] px-[3%] lg:px-[6%]'>
            <div className='basis-full lg:basis-[30%] self-start lg:sticky lg:top-[84px]'>
                <form className='flex flex-col justify-center items-center border-amber-600 h-auto w-auto cursor-pointer border-2 rounded-lg ' onClick={() => document.querySelector(".input-field").click()}>
                    <input type="file" accept='image/*' className='input-field' hidden
                        onChange={({ target: { files } }) => {
                            if (files) {
                                setImage(URL.createObjectURL(files[0]))
                                setFileName(files[0].name)
                                setFileSize(files[0].size)
                            }
                        }}
                    />

                    {image ?
                        <img className='rounded-lg w-auto h-auto max-h-full' src={image} alt={fileName} />
                        :
                        <>
                            <AiOutlineCloudUpload color='#1475cf' size={70} />
                            <p>Browse Files to upload</p>
                        </>
                    }
                </form>
                <p>File Name : {fileName} File Size : {fileSize}</p>
                <AiFillDelete
                    onClick={() => {
                        setFileName("No selected file");
                        setImage(null);
                        setFileSize("0 bytes");
                    }}
                />
            </div>

            <div className='basis-[20%] flex justify-center self-start lg:sticky lg:top-[84px]'>
                <button class="flex items-center bg-emerald-500 hover:bg-emerald-600 focus:ring focus:ring-emerald-200 text-white font-medium py-2 px-4 rounded-lg">
                    <AiOutlineFileSearch size={20} />
                    Search
                    <BsArrowBarRight size={20} />
                </button>
            </div>



            <div className='basis-[50%] grid grid-cols-1 lg:grid-cols-2 gap-4 duration-300 ease-in-out hover:gap-2'>


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

                    <p className='text-sm mb-[14px]'>description</p>
                    <img className='mb-3' src={userImage} alt="post image" width="100%" />


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

                    <p className='text-sm mb-[14px]'>description</p>
                    <img className='mb-3' src={userImage} alt="post image" width="100%" />


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

                    <p className='text-sm mb-[14px]'>description</p>
                    <img className='mb-3' src={userImage} alt="post image" width="100%" />


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

                    <p className='text-sm mb-[14px]'>description</p>
                    <img className='mb-3' src={userImage} alt="post image" width="100%" />


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

            </div>
        </div>
    );
};

export default Searching;