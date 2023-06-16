import React, { useContext, useState } from 'react';
import homeCSS from './Home.module.css'
import { AuthContext } from '../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import imgUser from "../Assets/images/user-1.png"
import { BsCameraVideoFill, BsEmojiHeartEyes, BsFillCalendarEventFill, BsFillCameraFill, BsSend, BsSendCheck } from 'react-icons/bs';
import { AiFillDelete, AiOutlineCloudUpload } from 'react-icons/ai';


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
        <div className={`{homeCSS.middle} bg-[#f0f2f5]`}>

            <div className={homeCSS.createPost}>
                <form onSubmit={handleSubmit(handleItem)}>
                    <div className={homeCSS.createPostInput}>
                        <img src={imgUser} alt="user" />
                        <textarea rows="2" placeholder="write a post" {...register("description")} required></textarea>
                    </div>
                    <div className={homeCSS.createPostLinks}>
                        <li>
                            <label htmlFor="dropzone-file" className="flex items-center justify-center w-full h-full  cursor-pointer hover:bg-gray-100">
                                <BsFillCameraFill size={20} />
                                <span className='ml-2'>Photo</span>
                                <input id="dropzone-file" type="file" className="hidden" {...register("image")} required />
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
                        <li>
                            <BsFillCalendarEventFill size={18} />
                            <span className='ml-2'>Event</span>
                        </li>
                        <li>
                            <button><BsSendCheck size={20} /></button>
                        </li>
                    </div>
                </form>
            </div>

            <div className={homeCSS.sortBy}>
                <hr />
            </div>

            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                            <br className="hidden lg:inline-block" />readymade gluten
                        </h1>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                        </div>
                    </div>
                </div>
            </section>



            <div className='bg-green-500'>
                <form className='flex flex-col justify-center items-center border-amber-600 h-[300px] w-[500px] cursor-pointer border-2 rounded-lg ' onClick={() => document.querySelector(".input-field").click()}>
                    <input type="file" accept='image/*' className='input-field' hidden
                        onChange={({ target: { files } }) => {
                            console.log(files);
                            if (files) {
                                setImage(URL.createObjectURL(files[0]))
                                setFileName(files[0].name)
                                setFileSize(files[0].size)
                            }
                        }}
                    />

                    {image ?
                        <img src={image} width={150} height={150} alt={fileName} />
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



            <div onClick={() => document.querySelector("#input-field").click()} className='bg-green-500 '>
                <form className='flex flex-col justify-center items-center border-amber-600 h-[300px] w-[500px] cursor-pointer border-2 rounded-lg '>

                    <input type="file" id='input-field' hidden
                        onChange={({ target: { files } }) => {
                            console.log(files);
                            if (files) {
                                setImage(URL.createObjectURL(files[0]))
                                setFileName(files[0].name)
                                setFileSize(files[0].size)
                            }
                        }}
                    />
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
            {image ?
                <img src={image} width={150} height={150} alt={fileName} />
                :
                <>
                    <AiOutlineCloudUpload color='#1475cf' size={70} />
                    <p>Browse Files to upload</p>
                </>
            }


            {/* {
                            image ?
                                <>
                                    <div className='flex'>
                                        <img src={image} width={150} height={150} alt={fileName} />
                                        <p>File Name : {fileName} File Size : {fileSize}</p>
                                    </div>
                                </>
                                :
                                <>
                                </>
                        } */}
        </div>
    );
};

export default Searching;