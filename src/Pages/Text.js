import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { BsArrowBarRight } from 'react-icons/bs';
import { AiFillDelete, AiOutlineCloudUpload, AiOutlineFileSearch } from 'react-icons/ai';
import { FaCloudUploadAlt } from 'react-icons/fa';
import axios from 'axios';
import SearchPostCard from './AllCards/SearchPostCard';
import * as faceapi from 'face-api.js';

const Text = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    const [imageUpload, setImageUpload] = useState(null);
    const [imageSearch, setImageSearch] = useState(null);
    const [fileName, setFileName] = useState("No selected file");
    const [fileSize, setFileSize] = useState(0);
    const [posts, setPosts] = useState(null);
    const [allPostData, setAllPostData] = useState(null);
    const [processingStarted, setProcessingStarted] = useState(false);
    const [filteredPosts, setFilteredPosts] = useState(null);

    useEffect(() => {
        axios.get('https://track-down-server.vercel.app/posts')
            .then(response => {
                const data = response.data;
                setPosts(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    useEffect(() => {
        if (posts) {
            const postData = posts.map((post) => {
                return {
                    image: post.image,
                    description: post.description,
                    profileImg: post.profileImg,
                    userEmail: post.userEmail,
                    userName: post.userName
                };
            });
            setAllPostData(postData);
        }
    }, [posts]);

    const handleImageItem = (data) => {
        const img = data.image[0];

        const uri = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgBBkey}`;

        const formData = new FormData();
        formData.append('image', img);

        fetch(uri, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.status === 200) {
                    const itemInfo = {
                        image: imgData.data.url,
                        userEmail: user.email
                    };
                    setImageSearch(itemInfo);
                }
            })
            .catch(error => {
                console.log(error);
                toast.error("Image upload failed", {
                    duration: 4000,
                    position: 'top-center'
                });
            });
    };

    const handleImageChange = (event) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setImageUpload(URL.createObjectURL(files[0]));
            setFileName(files[0].name);
            setFileSize(files[0].size);
        }
    };

    const handleStartProcessing = () => {
        setProcessingStarted(true);
        setFilteredPosts([]); // Clear the filtered posts before processing starts
    };

    useEffect(() => {
        if (processingStarted) {
            (async () => {
                await Promise.all([
                    faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
                    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
                    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
                    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
                    faceapi.nets.faceExpressionNet.loadFromUri('/models')
                ]);

                const img1 = imageSearch.image;

                const idCardImageElement = document.createElement('img');
                idCardImageElement.crossOrigin = 'anonymous';
                idCardImageElement.src = img1;

                allPostData.forEach(async (postData) => {
                    const { image, description, userEmail, profileImg, userName } = postData;

                    const selfieImageElement = new Image();
                    selfieImageElement.crossOrigin = "anonymous";
                    selfieImageElement.src = image;

                    const idCardFaceDetection = await faceapi.detectSingleFace(idCardImageElement,
                        new faceapi.TinyFaceDetectorOptions())
                        .withFaceLandmarks()
                        .withFaceDescriptor();

                    const selfieFaceDetection = await faceapi.detectSingleFace(selfieImageElement,
                        new faceapi.TinyFaceDetectorOptions())
                        .withFaceLandmarks()
                        .withFaceDescriptor();

                    if (idCardFaceDetection) {
                        const { x, y, width, height } = idCardFaceDetection.detection.box;
                        renderFace(idCardImageElement, x, y, width, height);
                    }

                    if (selfieFaceDetection) {
                        const { x, y, width, height } = selfieFaceDetection.detection.box;
                        renderFace(selfieImageElement, x, y, width, height);
                    }

                    if (idCardFaceDetection && selfieFaceDetection) {
                        const distance = faceapi.euclideanDistance(
                            idCardFaceDetection.descriptor,
                            selfieFaceDetection.descriptor
                        );

                        if (distance < 0.55) {
                            const findImg = { image, description, userEmail, profileImg, userName };
                            const searchPostCard = <SearchPostCard key={image} findImg={findImg} />;
                            console.log("Raian");
                            console.log(findImg);
                            setFilteredPosts((prevFilteredPosts) => {
                                return prevFilteredPosts ? [...prevFilteredPosts, searchPostCard] : [searchPostCard];
                            });
                        }
                    }
                });
            })();
        }
    }, [processingStarted, allPostData, imageSearch?.image]);

    const renderFace = async (imageElement, x, y, width, height) => {
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");

        context?.drawImage(imageElement, x, y, width, height, 0, 0, width, height);
        canvas.toBlob((blob) => {
            imageElement.src = URL.createObjectURL(blob);
        }, "image/jpeg");
    };

    return (
        <div className='bg-gray-100 text-gray-600 min-h-screen block lg:flex items-center justify-between py-[5px] lg:py-[10px] px-[3%] lg:px-[6%]'>

            <div className='basis-full lg:basis-[30%] self-start lg:sticky lg:top-[84px]'>
                <form onSubmit={handleSubmit(handleImageItem)}>
                    <div className='flex flex-col justify-center items-center border-amber-600 h-auto w-auto cursor-pointer border-2 rounded-lg' onClick={() => document.querySelector(".input-field").click()}>
                        <label onChange={handleImageChange}>
                            <input type="file" accept='image/*' className='input-field' hidden
                                {...register("image")} required
                            />
                        </label>
                        {imageUpload ? (
                            <img className='rounded-lg w-auto h-auto max-h-full' src={imageUpload} alt={fileName} />
                        ) : (
                            <>
                                <AiOutlineCloudUpload color='#1475cf' size={70} />
                                <p>Browse Files to upload</p>
                            </>
                        )}
                    </div>
                    <p>
                        File Name : {fileName} <br /> File Size : {fileSize} bytes
                    </p>
                    <div className='flex mb-4'>
                        <button
                            onClick={() => {
                                setFileName("No selected file");
                                setImageUpload(null);
                                setFileSize("0 bytes");
                            }}
                            className='flex items-center bg-red-500 hover:bg-red-600 focus:ring focus:ring-red-200 text-white font-medium py-2 px-4 rounded-lg'
                        >
                            <AiFillDelete size={20} />
                            Discard
                        </button>
                        <button
                            type='submit'
                            className="flex items-center bg-emerald-500 hover:bg-emerald-600 focus:ring focus:ring-emerald-200 text-white font-medium py-2 px-4 ml-2 rounded-lg"
                        >
                            <FaCloudUploadAlt size={20} />
                            <span className='ml-1'>Upload</span>
                        </button>
                    </div>
                </form>
                <div className='my-2'>
                    {imageSearch && <img className='rounded-lg w-auto h-auto max-h-full' src={imageSearch.image} alt={fileName} />}
                </div>
                <div className='flex justify-center self-start lg:sticky lg:top-[84px]'>
                    {imageSearch && (
                        <button
                            onClick={handleStartProcessing}
                            className="flex items-center bg-emerald-500 hover:bg-emerald-600 focus:ring focus:ring-emerald-200 text-white font-medium py-2 px-4 rounded-lg"
                        >
                            <AiOutlineFileSearch size={20} />
                            Search
                            <BsArrowBarRight size={20} />
                        </button>
                    )}
                </div>
            </div>
            <div className='basis-[70%] ml-2 grid grid-cols-1 lg:grid-cols-2 gap-4 duration-300 ease-in-out hover:gap-2'>
                {filteredPosts}
            </div>
        </div>
    );
};

export default Text;
