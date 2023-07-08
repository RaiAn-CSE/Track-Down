import React, { useContext, useEffect, useState } from 'react';
import homeCSS from './Home.module.css'
import trackDownLogo from "../Assets/Logo/track-down-logo.png"
import imgCover from "../Assets/images/cover-pic.png"
import { BsCameraVideoFill, BsFillCameraFill, BsFillHouseCheckFill, BsSendCheck } from "react-icons/bs";
import { AiFillCaretDown, AiFillDelete } from "react-icons/ai";
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { useForm } from 'react-hook-form';
import PostCard from './AllCards/PostCard';
import Lottie from "lottie-react"
import Load from "../Assets/load.json"
import premiumImg from '../Assets/Logo/premiumImg.png'
import { BiTrendingUp } from 'react-icons/bi';


const Home = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, loading, setLoading, handleImageItem, imageUpload } = useContext(AuthContext);
    const navigate = useNavigate();

    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No selected file")
    const [postInfo, setPostInfo] = useState([]);

    console.log(postInfo);

    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(res => res.json())
            .then(data => {
                setPostInfo(data)
            })
    }, []);

    // user info get 
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setUserInfo(data)
            })
    }, []);

    // add item button 
    const handleItem = (data) => {
        const img = data.image[0]
        const { description } = data;

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

                if (imgData.status === 200) {

                    const itemInfo = {
                        description,
                        image: imgData.data.url,
                        userEmail: user.email,
                        profileImg: user.photoURL,
                        userName: user.displayName,
                    }

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
                                window.location.reload()
                                // navigate('/dashboard/allItems')
                            }
                            else {
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
    }

    if (loading) {
        return <div className='h-[500px] w-[500px] mx-auto'>
            <Lottie animationData={Load} loop={true} />
            <p className='text-center text-3xl font-bold text-[#10a37f]'>Please Wait...</p>
        </div>
    }

    return (
        <div className='flex justify-between flex-wrap bg-gray-100 text-gray-600 py-[15px] lg:py-[20px] px-[3%] lg:px-[6%] '>
            {/* <!-- left sidebar  --> */}
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
                    <b className="block mt-4 font-medium">Brand and Demand in Xiaomi</b>
                    <Link to='#' className="inline-block text-[#10a37f] border border-[#10a37f] rounded-full py-1 px-4 mt-6 font-medium hover:underline">
                        Learn More
                    </Link>
                </div>

            </div>




            {/* <!-- middle  --> */}
            <div className='basis-full lg:basis-[47%]'>

                <div className='bg-white'>
                    <form onSubmit={handleSubmit(handleItem)}>
                        <div className={homeCSS.createPostInput}>
                            <img className='w-[35px] rounded-full mr-[10px]' src={user?.photoURL} alt="user" />

                            {
                                image ?
                                    <>
                                        <textarea rows="5" placeholder="write a post" {...register("description")} required></textarea>
                                        <div className='flex items-center ml-2'>
                                            <img src={image} className='h-auto max-w-full rounded-lg' alt={fileName} />
                                            {/* <p>File Name : {fileName} File Size : {fileSize} bytes</p> */}
                                        </div>
                                    </>
                                    :
                                    <>
                                        <textarea rows="2" placeholder="write a post" {...register("description")} required></textarea>
                                    </>
                            }

                        </div>
                        <div className={homeCSS.createPostLinks}>
                            <li>
                                <label htmlFor="dropzone-file" className="flex items-center justify-center w-full h-full  cursor-pointer hover:bg-gray-100"
                                    onChange={(event) => {
                                        const file = event.target.files[0];

                                        if (file) {
                                            const reader = new FileReader();
                                            // console.log(reader);
                                            reader.onload = () => {
                                                setImage(reader.result);
                                            };
                                            reader.readAsDataURL(file);
                                        }


                                        // if (file) {
                                        //     setImage(URL.createObjectURL(file))
                                        //     setFileName(file.name)
                                        //     setFileSize(file.size)
                                        // }
                                    }}>
                                    <BsFillCameraFill size={20} />
                                    <span className='ml-2'>Photo</span>
                                    <input id="dropzone-file" type="file" hidden {...register("image")} required />
                                </label>
                            </li>
                            <li>
                                <label htmlFor="dropzone-file" className="flex items-center justify-center w-full h-full  cursor-pointer hover:bg-gray-100">
                                    <BsCameraVideoFill size={20} />
                                    <span className='ml-2'>Video</span>
                                    {<input id="dropzone-file" type="file" className="hidden"
                                    /* {...register("video")} required */
                                    />}
                                </label>
                            </li>
                            <li className="flex items-center justify-center w-full h-full  cursor-pointer hover:bg-gray-100"
                                onClick={() => {
                                    setFileName("No selected file");
                                    setImage(null);
                                }}>
                                <AiFillDelete size={20} />
                                <span className='ml-2'>Delete</span>
                            </li>

                            <button className='basis-[25%] flex justify-center items-center h-[40px] bg-[#10a37f] text-[white] hover:bg-[#108d6d]' type='submit'><BsSendCheck size={20} /></button>

                        </div>
                    </form>
                </div>

                <div className="flex items-center my-3">
                    <hr className="h-[1.5px] bg-gray-300 flex-grow" />
                    <p className='flex text-sm ml-1'>Sort by: <span className='flex items-center font-semibold'>top <AiFillCaretDown className='ml-1' /></span></p>
                </div>

                {
                    postInfo.map(data => <PostCard key={data._id} data={data} userInfo={userInfo} />)
                }

            </div>



            {/* <!-- rightSidebar  --> */}
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
                        <p>LinkedUp &#169; 2023. All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;