import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Lottie from "lottie-react";
import lottieLoad from '../Assets/load.json'


const PrivateRoute = ({ children }) => {


    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='h-[500px] w-[500px] mx-auto'>
            <Lottie animationData={lottieLoad} loop={true} />
            <p className='text-center text-3xl font-bold text-[#10a37f]'>Please Wait...</p>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;