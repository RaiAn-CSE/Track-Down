import React, { useEffect, useState } from 'react';
import * as faceapi from 'face-api.js';
// import picture1 from '../Assets/images/user-1.png';
// import picture2 from '../Assets/images/user-1.png';

const ImageComparison = () => {

    const [processingStarted, setProcessingStarted] = useState(false);
    const picture1 = 'https://i.ibb.co/VQ4n9Cc/img-5.jpg';
    const picture2 = [
        'https://i.ibb.co/VQ4n9Cc/img-5.jpg',
        'https://i.ibb.co/pJHbys4/sharukh-khan.webp',
        'https://i.ibb.co/VQ4n9Cc/img-5.jpg',
        'https://i.ibb.co/pJHbys4/sharukh-khan.webp',
        'https://i.ibb.co/VQ4n9Cc/img-5.jpg',
    ];

    console.log(picture2);

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


                // const img = new Image();
                // img.crossOrigin = "anonymous";
                // img.src = url;

                // const idCardImageElement = document.createElement('img');
                // idCardImageElement.crossOrigin = 'anonymous';
                // idCardImageElement.src = picture1;

                const idCardImageElement = new Image();
                idCardImageElement.crossOrigin = "anonymous";
                idCardImageElement.src = picture1;

                // const selfieImageElement = document.createElement('img');
                // selfieImageElement.crossOrigin = 'anonymous';
                // selfieImageElement.src = picture2;

                picture2.forEach(async (imageURL) => {
                    const selfieImageElement = new Image();
                    selfieImageElement.crossOrigin = "anonymous";
                    selfieImageElement.src = imageURL;

                    console.log(imageURL);

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
                        console.log(distance);
                    }
                })
            })();
        }
    }, [processingStarted, picture2]);

    const handleStartProcessing = () => {
        setProcessingStarted(true);
    };

    return (
        <>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod quas accusantium voluptas accusamus. Quos optio magnam sapiente accusantium deleniti quae. Quasi suscipit eius eveniet possimus, quod dolorum reiciendis at inventore.</p>
            <div className="gallery">
                <img src={picture1} alt="ID card" height="auto" />
            </div>
            <div className="gallery">
                <img src={picture2} alt="Selfie" height="auto" />
            </div>
            <button onClick={handleStartProcessing}>Start Image Processing</button>
        </>
    );
};

export default ImageComparison;