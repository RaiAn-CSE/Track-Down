import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase.config'



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // create user with email and password 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // logIn into the website using this 
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // SignOut 
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unSubscribe();
    }, [])

    const authInfo = {
        createUser,
        signIn,
        logOut,
        user,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;