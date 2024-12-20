import React, { useContext, useEffect, useState } from 'react';
import homeCSS from './Home.module.css'
import { BsCameraVideoFill, BsFillCameraFill, BsSendCheck } from "react-icons/bs";
import { AiFillCaretDown, AiFillDelete } from "react-icons/ai";
import { FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../contexts/AuthProvider';
import { useForm } from 'react-hook-form';
import PostCard from './AllCards/PostCard';
import Lottie from "lottie-react"
import Load from "../Assets/load.json"
import LeftSidebar from './HomeSidebar/LeftSidebar';
import RightSidebar from './HomeSidebar/RightSidebar';


const Home = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, loading, setLoading } = useContext(AuthContext);

    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No selected file")
    const [postInfo, setPostInfo] = useState([]);
    const [isPosting, setIsPosting] = useState(false);



    useEffect(() => {
        fetch('https://track-down-server.vercel.app/posts')
            .then(res => res.json())
            .then(data => {
                setPostInfo(data)
            })
    }, []);

    // user info get 
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        fetch('https://track-down-server.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setUserInfo(data)
            })
    }, []);

    // add item button 
    const handleItem = (data) => {
        setIsPosting(true);
        const img = data.image[0]
        const { description } = data;

        const uri = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgBBkey}`

        const formData = new FormData()
        formData.append('image', img)


        fetch(uri, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {

                if (imgData.status === 200) {

                    // Post Time
                    const currentTime = Date.now();
                    const date = new Date(currentTime);

                    const year = date.getFullYear();
                    const month = (date.getMonth() + 1).toString().padStart(2, '0');
                    const day = date.getDate().toString().padStart(2, '0');

                    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
                    const formattedTime = date.toLocaleString('en-US', options);

                    const formattedDateTime = `${year}-${month}-${day} ${formattedTime}`;
                    console.log(formattedDateTime);
                    // Post Time End

                    const itemInfo = {
                        description,
                        image: imgData.data.url,
                        userEmail: user.email,
                        profileImg: user.photoURL,
                        userName: user.displayName,
                        postTime: formattedDateTime,
                    }

                    fetch(`https://track-down-server.vercel.app/posts`, {
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
                                setIsPosting(false);
                                window.location.reload()
                            }
                            else {
                                toast.error("Failed to add data", {
                                    duration: 4000,
                                    position: 'top-center'
                                })
                                setIsPosting(false);
                            }
                        })
                        .catch(error => {
                            toast.error("Failed to store the post info", {
                                duration: 4000,
                                position: 'top-center'
                            })
                            setIsPosting(false);
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
            <LeftSidebar />

            {/* <!-- middle  --> */}
            <div className='basis-full lg:basis-[47%]'>

                <div className='bg-white'>
                    <form onSubmit={handleSubmit(handleItem)}>
                        <div className={homeCSS.createPostInput}>
                            {
                                user?.photoURL ?
                                    <>
                                        <img className='w-[35px] rounded-full mr-[10px] border-2 p-1' src={user?.photoURL} alt="user" />
                                    </>
                                    :
                                    <>
                                        <FaUserCircle className='w-[35px] rounded-full mr-[10px] border-2' color="#10a37f" size={30} />
                                    </>
                            }

                            {
                                image ?
                                    <>
                                        <textarea rows="5" placeholder="write a post" {...register("description")} required></textarea>
                                        <div className='flex items-center ml-2'>
                                            <img src={image} className='w-36 lg:w-44 rounded-lg' alt={fileName} />
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

                            {isPosting ? (
                                <div className='basis-[25%] flex justify-center items-center h-[40px]'>
                                    <Lottie animationData={Load} loop={true} />
                                </div>
                            ) : (
                                <button
                                    className='basis-[25%] flex justify-center items-center h-[40px] bg-[#10a37f] text-[white] hover:bg-[#108d6d]'
                                    type='submit'
                                >
                                    <BsSendCheck size={20} />
                                </button>
                            )}

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
            <RightSidebar />

        </div >
    );
};

export default Home;