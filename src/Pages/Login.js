import React, { useContext, useState } from 'react';
import LoginCSS from './Login.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import LoginLottie from '../Assets/login2.json'
import { useForm } from "react-hook-form";
import { AuthContext } from '../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('');
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const submitLogin = data => {
        console.log(data);

        setLoginError('');
        signIn(data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                navigate(from, { replace: true });
                toast('User Login Successfully...')
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ... 
                console.log(errorCode);
                console.log(errorMessage);

                setLoginError(errorMessage);
            });
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen w-full'>
            <div className='grid justify-center lg:justify-end'>
                <div className='h-[250px] lg:h-[500px] w-[250px] lg:w-[500px]'>
                    <Lottie animationData={LoginLottie} loop={true} />
                </div>
            </div>

            <div className='flex justify-center lg:justify-start'>

                <form onSubmit={handleSubmit(submitLogin)}>
                    <h2 className='text-[32px] text-center text-[#4e4e4e]'>Welcome back</h2>

                    <div className={LoginCSS.formGroup}>
                        <input type="text" autoFocus id='email' name='' {...register("email")} required />
                        <label className='' htmlFor="email">Email address</label>
                    </div>

                    <div className={LoginCSS.formGroup}>
                        <input type="password" id='password' name='' {...register("password", {
                            minLength: 6
                        })} required />
                        <label className='email-label' htmlFor="password">Password</label>
                    </div>

                    <div className={LoginCSS.formSwitch}>
                        <p className='test-xs'>Don't have an account? <span className={LoginCSS.formSpan}><Link to='/signup'>Sign up</Link></span></p>
                    </div>

                    <div><button className={LoginCSS.formBtn}>Continue</button></div>

                    {/* Error Message  */}
                    <div>
                        {loginError && <p className='text-red-500'>{loginError}</p>}
                    </div>

                    <div
                        className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                        <p className="text-center font-semibold mx-4 mb-0">OR</p>
                    </div>

                    <div>
                        <button className={LoginCSS.signInBtn}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png" alt="" />Continue with Google</button>
                    </div>
                    <div>
                        <button className={LoginCSS.signInBtn}><img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" />Continue with Google</button>
                    </div>
                </form>

            </div >
        </div >
    );
};

export default Login;