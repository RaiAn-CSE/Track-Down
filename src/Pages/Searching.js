import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { BsArrowBarRight } from 'react-icons/bs';
import { AiFillDelete, AiOutlineCloudUpload, AiOutlineFileSearch } from 'react-icons/ai';
import { FaCloudUploadAlt } from 'react-icons/fa';
import axios from 'axios';
import SearchPostCard from './AllCards/SearchPostCard';
import * as faceapi from 'face-api.js';
// import picture1 from '../Assets/images/id-card.png';
// import picture2 from '../Assets/images/selfie.webp';


const Searching = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    const [imageUpload, setImageUpload] = useState(null);
    const [imageSearch, setImageSearch] = useState(null);
    const [fileName, setFileName] = useState("No selected file")
    const [fileSize, setFileSize] = useState(0);
    const [posts, setPosts] = useState(null);
    const [allPostImg, setAllPostImg] = useState(null);
    const [processingStarted, setProcessingStarted] = useState(false);
    const [findImage, setFindImage] = useState(null);


    // console.log(findImage);

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

    useEffect(() => {
        if (posts) {
            const images = posts.map((post) => post.image);
            setAllPostImg(images);
        }
    }, [posts]);


    const handleImageItem = (data) => {
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
                console.log(error);
                toast.error("Image upload failed", {
                    duration: 4000,
                    position: 'top-center'
                })
            })
        setLoading(false)
    }


    const handleImageChange = (event) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setImageUpload(URL.createObjectURL(files[0]));
            setFileName(files[0].name);
            setFileSize(files[0].size);
        }
    };


    // Image Processing Start=============================================================================== :
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

    // console.log(imageSearch);

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


                allPostImg.forEach(async (imageURL) => {
                    const selfieImageElement = new Image();
                    selfieImageElement.crossOrigin = "anonymous";
                    selfieImageElement.src = imageURL;

                    // Detect a single face from the ID card image
                    const idCardFacedetection = await faceapi.detectSingleFace(idCardImageElement,
                        new faceapi.TinyFaceDetectorOptions())
                        .withFaceLandmarks()
                        .withFaceDescriptor();

                    // Detect a single face from the selfie image
                    const selfieFacedetection = await faceapi.detectSingleFace(selfieImageElement,
                        new faceapi.TinyFaceDetectorOptions())
                        .withFaceLandmarks()
                        .withFaceDescriptor();

                    // Render the detected face from the ID card image
                    if (idCardFacedetection) {
                        const { x, y, width, height } = idCardFacedetection.detection.box;
                        renderFace(idCardImageElement, x, y, width, height);
                    }

                    // Render the detected face from the selfie image
                    if (selfieFacedetection) {
                        const { x, y, width, height } = selfieFacedetection.detection.box;
                        renderFace(selfieImageElement, x, y, width, height);
                    }

                    // Perform face comparison if faces were detected
                    if (idCardFacedetection && selfieFacedetection) {
                        const distance = faceapi.euclideanDistance(
                            idCardFacedetection.descriptor,
                            selfieFacedetection.descriptor
                        );
                        console.log(imageURL);
                        console.log(distance);
                        if (distance < 0.55) {
                            setFindImage((prevFindImage) => {
                                if (Array.isArray(prevFindImage)) {
                                    return [...prevFindImage, imageURL];
                                }
                                return [imageURL];
                            });
                        }
                    }
                })

            })();
        }
    }, [processingStarted, allPostImg, imageSearch?.image]);
    // Image Processing End =================================== ....


    const handleStartProcessing = () => {
        setProcessingStarted(true);
    };


    if (loading) {
        return 'Loading'
    }

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
                        </>
                    }
                </div>


                <div onClick={handleStartProcessing} className='flex justify-center self-start lg:sticky lg:top-[84px]'>
                    <button className="flex items-center bg-emerald-500 hover:bg-emerald-600 focus:ring focus:ring-emerald-200 text-white font-medium py-2 px-4 rounded-lg">
                        <AiOutlineFileSearch size={20} />
                        Search
                        <BsArrowBarRight size={20} />
                    </button>
                </div>
            </div>


            <div className='basis-[70%] ml-2 grid grid-cols-1 lg:grid-cols-2 gap-4 duration-300 ease-in-out hover:gap-2'>

                {
                    findImage && findImage.map((findImg, idx) => <SearchPostCard key={idx} findImg={findImg} />)
                }

            </div>
        </div >
    );
};

export default Searching;