import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config'
import { toast } from 'react-hot-toast';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

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
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;