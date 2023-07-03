import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { BsArrowBarRight } from 'react-icons/bs';
import { AiFillDelete, AiOutlineCloudUpload, AiOutlineFileSearch } from 'react-icons/ai';
import { FaCloudUploadAlt } from 'react-icons/fa';
import axios from 'axios';
import SearchPostCard from './AllCards/SearchPostCard';
import ImageComparison from './ImageComparison';

const Searching = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    const [imageUpload, setImageUpload] = useState(null);
    const [imageSearch, setImageSearch] = useState(null);
    const [fileName, setFileName] = useState("No selected file")
    const [fileSize, setFileSize] = useState(0);
    const [posts, setPosts] = useState(null);
    // const [allPostImg, setAllPostImg] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/posts')
            .then(response => {
                const data = response.data;
                setPosts(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [])

    // console.log(posts);


    const handleImageItem = (data) => {
        console.log(data);
        const img = data.image[0]

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
                        image: imgData.data.url,
                        userEmail: user.email,
                    }
                    setImageSearch(itemInfo);
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


    const handleImageChange = (event) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setImageUpload(URL.createObjectURL(files[0]));
            setFileName(files[0].name);
            setFileSize(files[0].size);
        }
    };

    // console.log(imageSearch);

    return (
        <div className=' bg-gray-100 text-gray-600 min-h-screen block lg:flex items-center justify-between py-[5px] lg:py-[10px] px-[3%] lg:px-[6%]'>

            <div className='basis-full lg:basis-[30%] self-start lg:sticky lg:top-[84px]'>
                <form onSubmit={handleSubmit(handleImageItem)}>

                    <div className='flex flex-col justify-center items-center border-amber-600 h-auto w-auto cursor-pointer border-2 rounded-lg ' onClick={() => document.querySelector(".input-field").click()}>
                        <label onChange={handleImageChange}>
                            <input type="file" accept='image/*' className='input-field' hidden
                                {...register("image")} required
                            />
                        </label>


                        {imageUpload ?
                            <img className='rounded-lg w-auto h-auto max-h-full' src={imageUpload} alt={fileName} />
                            :
                            <>
                                <AiOutlineCloudUpload color='#1475cf' size={70} />
                                <p>Browse Files to upload</p>
                            </>
                        }
                    </div>

                    <p>File Name : {fileName} <br /> File Size : {fileSize} bytes</p>

                    <div className='flex mb-4'>
                        <button onClick={() => {
                            setFileName("No selected file");
                            setImageUpload(null);
                            setFileSize("0 bytes");
                        }}
                            className='flex items-center bg-red-500 hover:bg-red-600 focus:ring focus:ring-red-200 text-white font-medium py-2 px-4 rounded-lg'>
                            <AiFillDelete size={20} />
                            Discard
                        </button>

                        <button type='submit' className="flex items-center bg-emerald-500 hover:bg-emerald-600 focus:ring focus:ring-emerald-200 text-white font-medium py-2 px-4 ml-2 rounded-lg">
                            <FaCloudUploadAlt size={20} />
                            <span className='ml-1'>Upload</span>
                        </button>
                    </div>
                </form>


                <div className='my-2'>
                    {
                        imageSearch &&
                        <>
                            <img className='rounded-lg w-auto h-auto max-h-full' src={imageSearch.image} alt={fileName} />
                            <ImageComparison imageS={imageSearch.image}></ImageComparison>
                        </>
                    }
                </div>


                <div className='flex justify-center self-start lg:sticky lg:top-[84px]'>
                    <button className="flex items-center bg-emerald-500 hover:bg-emerald-600 focus:ring focus:ring-emerald-200 text-white font-medium py-2 px-4 rounded-lg">
                        <AiOutlineFileSearch size={20} />
                        Search
                        <BsArrowBarRight size={20} />
                    </button>
                </div>
            </div>


            <div className='basis-[70%] ml-2 grid grid-cols-1 lg:grid-cols-2 gap-4 duration-300 ease-in-out hover:gap-2'>

                {
                    posts && posts.map((post, idx) => <SearchPostCard post={post} key={idx} />)
                }

            </div>

            {/* <div>
                {
                    posts && posts.map((post, idx) => <ImageComparison post={post} key={idx} />)
                }
            </div> */}
        </div >
    );
};

export default Searching;