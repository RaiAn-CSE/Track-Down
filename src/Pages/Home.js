import React, { useContext, useEffect, useState } from 'react';
import homeCSS from './Home.module.css'
import imgUser from "../Assets/images/user-1.png"
import imgTrend from "../Assets/images/more.png"
import imgCover from "../Assets/images/cover-pic.png"
import { BsCameraVideoFill, BsFillCameraFill, BsSendCheck } from "react-icons/bs";
import { AiFillCaretDown, AiFillDelete } from "react-icons/ai";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { useForm } from 'react-hook-form';
import PostCard from './AllCards/PostCard';


const Home = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, loading, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();

    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No selected file")
    const [fileSize, setFileSize] = useState(0)
    const [postInfo, setPostInfo] = useState([]);


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

                if (imgData.status === 200) {

                    const itemInfo = {
                        description,
                        image: imgData.data.url,
                        userEmail: user.email,
                        userName: user.name,
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
        return 'Loading'
    }

    return (
        <div className='flex justify-between flex-wrap bg-gray-100 text-gray-600 py-[15px] lg:py-[20px] px-[3%] lg:px-[6%] '>
            {/* <!-- left sidebar  --> */}
            <div className='basis-full lg:basis-1/4 self-start relative lg:sticky top-0 lg:top-[84px]'>
                <div className={homeCSS.sidebarProfileBox}>
                    <img src={imgCover} alt="cover" width="100%" />
                    <div className={homeCSS.sidebarProfileInfo}>
                        <img src={imgUser} alt="profile" />
                        <h1>John Smith</h1>
                        <h3>Web developer at Microsoft</h3>
                        <ul>
                            <li>Your profile views <span>52</span></li>
                            <li>Your post views <span>810</span></li>
                            <li>Your connections <span>205</span></li>
                        </ul>
                    </div>

                    <div className={homeCSS.sidebarProfileLink}>
                        <a href="#"><img src="./images/items.png" alt="" />My Items</a>
                        <a href="#"><img src="./images/premium.png" alt="" />Try premium</a>
                    </div>
                </div>

                <div className={homeCSS.sidebarActivity}>
                    <h3>RECENT</h3>
                    <a href="#"><img src="./images/recent.png" alt="pic" />Web Development</a>
                    <a href="#"><img src="./images/recent.png" alt="pic" />User Interface</a>
                    <a href="#"><img src="./images/recent.png" alt="pic" />Online Learning</a>
                    <a href="#"><img src="./images/recent.png" alt="pic" />Learn Online</a>
                    <a href="#"><img src="./images/recent.png" alt="pic" />Code Better</a>
                    <a href="#"><img src="./images/recent.png" alt="pic" />Group Learning</a>
                    <h3>GROUPS</h3>
                    <a href="#"><img src="./images/group.png" alt="pic" />Web Design Group</a>
                    <a href="#"><img src="./images/group.png" alt="pic" />HTML & CSS Learners</a>
                    <a href="#"><img src="./images/group.png" alt="pic" />Python & JavaScript Group</a>
                    <a href="#"><img src="./images/group.png" alt="pic" />Learn Coding Online</a>
                    <h3>HASHTAG</h3>
                    <a href="#"><img src="./images/hashtag.png" alt="hashtag" /> webdevelopment</a>
                    <a href="#"><img src="./images/hashtag.png" alt="hashtag" /> userinterface</a>
                    <a href="#"><img src="./images/hashtag.png" alt="hashtag" /> onlinelearning</a>

                    <div className={homeCSS.discoverMoreLink}>
                        <a href="#">Discover more</a>
                    </div>
                </div>

            </div>




            {/* <!-- middle  --> */}
            <div className='basis-full lg:basis-[47%]'>

                <div className={homeCSS.createPost}>
                    <form onSubmit={handleSubmit(handleItem)}>
                        <div className={homeCSS.createPostInput}>
                            <img className='w-[35px] rounded-full mr-[10px]' src={imgUser} alt="user" />

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
                                    setFileSize("0 bytes");
                                }}>
                                <AiFillDelete size={20} />
                                <span className='ml-2'>Delete</span>
                            </li>

                            <button className='basis-[25%] flex justify-center items-center h-[40px] bg-[#10a37f] text-[white] hover:bg-[#108d6d]' type='submit'><BsSendCheck size={20} /></button>

                        </div>
                    </form>
                </div>

                <div className={homeCSS.sortBy}>
                    <hr />
                    <p className='flex'>Sort by: <span className='flex items-center'>top <AiFillCaretDown className='ml-1' /></span></p>
                </div>

                {
                    postInfo.map(data => <PostCard key={data._id} data={data} userInfo={userInfo} />)
                }

            </div>



            {/* <!-- rightSidebar  --> */}
            <div className='basis-full lg:basis-1/4 self-start relative lg:sticky top-0 lg:top-[84px]'>
                <div className={homeCSS.sidebarNews}>
                    <img src={imgTrend} alt="more" className={homeCSS.moreInfoIcon} />
                    <h3>Trending News</h3>
                    <a href="#">High demand for skilled manpower</a>
                    <span>1d ago &middot; 10,934 readers</span>

                    <a href="#">Careers growing horizontally too</a>
                    <span>19h ago &middot; 1,934 readers</span>

                    <a href="#">Less work visa for US, more for UK</a>
                    <span>1d ago &middot; 27,934 readers</span>

                    <a href="#">More hiring = higher confidence?</a>
                    <span>18h ago &middot; 8,934 readers</span>

                    <a href="#">Gautam Adani is the world's third richest</a>
                    <span>12h ago &middot; 4,334 readers</span>

                    <a href="#" className={homeCSS.readMoreLink}>Read More</a>

                </div>

                <div className={homeCSS.sidebarAd}>
                    <small>Ad &middot; &middot; &middot;</small>
                    <p>Master the 5 principles of web design</p>
                    <div>
                        <img src="./images/user-1.png" alt="img" />
                        <img src="./images/mi-logo.png" alt="img" />
                    </div>
                    <b>Brand and Demand in Xiaomi</b>
                    <a href="#" className={homeCSS.adLink}>Learn More</a>
                </div>

                <div className={homeCSS.sidebarUsefulLinks}>
                    <a href="#">About</a>
                    <a href="#">Accessibility</a>
                    <a href="#">Help Center</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Advertising</a>
                    <a href="#">Get the App</a>
                    <a href="#">More</a>

                    <div className={homeCSS.copyrightMsg}>
                        <img src="./images/logo.png" alt="logo" />
                        <p>Linkedup &#169; 2023. All right reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;