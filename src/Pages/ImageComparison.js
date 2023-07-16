import React, { useEffect, useRef, useState } from 'react';
import { detectAllFaces, computeFaceDescriptor, loadFaceDetectionModel, loadFaceLandmarkModel, loadFaceRecognitionModel } from 'face-api.js';
import image1 from '../Assets/images/user-1.png'
import image2 from '../Assets/images/user-2.png'

const ImageComparison = () => {

    const [similarity, setSimilarity] = useState(null);

    useEffect(() => {
        if (image1 && image2) {
            const detectAndCompare = () => {
                // Load the face detection, face landmark, and face recognition models
                loadFaceDetectionModel()
                loadFaceLandmarkModel()
                loadFaceRecognitionModel()

                // Detect faces, landmarks, and compute face descriptors
                const detections1 = detectAllFaces(image1.current)?.withFaceLandmarks()?.withFaceDescriptors();
                const detections2 = detectAllFaces(image2.current)?.withFaceLandmarks()?.withFaceDescriptors();

                console.log(detections1);

                // Extract the face descriptors
                const faceDescriptor1 = detections1[0]?.descriptor;
                const faceDescriptor2 = detections2[0]?.descriptor;

                // Compare the face descriptors using a threshold
                const distance = faceDescriptor1?.distanceTo(faceDescriptor2);
                console.log(distance);
                const threshold = 0.6; // You can adjust this value

                // Set the similarity based on the comparison result
                setSimilarity(distance <= threshold);
            };

            detectAndCompare();
        }
    }, [image1, image2]);

    return (
        <div>

            {image1 && image2 && similarity !== null && (
                <div>
                    <img src={image1} alt="Pic 1" crossOrigin="anonymous" />
                    <img src={image2} alt="Pic 2" crossOrigin="anonymous" />
                    <div>Similarity: {similarity ? 'Yes' : 'No'}</div>
                </div>
            )}
        </div>
    );
};

export default ImageComparison;
