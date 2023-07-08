import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config'
import { toast } from 'react-hot-toast';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [imageUpload, setImageUpload] = useState(null);

    // create user with email and password 
    const createUser = (email, password, name) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, name)
    }

    // Google sign in 
    const loginInWithGoogle = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // logIn into the website using this 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Update User 
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    // SignOut 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Current User Find 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unSubscribe();
    }, [])


    // Image Upload :
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
                    setImageUpload(itemInfo);
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


    // send information in every route 
    const authInfo = {
        createUser,
        signIn,
        logOut,
        user,
        updateUser,
        loading,
        setLoading,
        loginInWithGoogle,
        handleImageItem,
        imageUpload,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;