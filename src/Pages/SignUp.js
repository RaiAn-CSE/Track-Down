import React, { useContext } from 'react';
import SignUpCSS from './Login.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import SignUpLottie from '../Assets/registration.json'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import Load from "../Assets/load.json"
import { GoogleAuthProvider } from 'firebase/auth';

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { createUser, loginInWithGoogle, updateUser, logOut, loading, setLoading, } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const submitLogin = data => {
        console.log(data);
        const { name, email, password } = data;

        createUser(data.email, data.password, data.name)
            .then((userCredential) => {
                const user = userCredential.user;
                toast('User Created Successfully...')
                navigate(from, { replace: true });
                // ...
                console.log(user);

                const userInfo = {
                    displayName: data.name,
                    // photoURL: "https://example.com/jane-q-user/profile.jpg"
                }
                updateUser(userInfo)
                    .then(() => {
                        const userInfoMongoDb = {
                            name,
                            email,
                            password,
                        }

                        console.log(userInfoMongoDb);

                        fetch(`http://localhost:5000/users`, {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json',
                            },
                            body: JSON.stringify(userInfoMongoDb)
                        })
                            .then(res => res.json())
                            .then(data => {

                                if (data.acknowledged) {

                                    navigate('/login')


                                    logOut()
                                        .then(() => {

                                        })

                                    toast.success("User registered successfully. Please log in", {
                                        duration: 4000,
                                        position: 'top-center'
                                    })

                                }

                            })
                            .catch(error => {
                                toast.error("Errors happened during stored data in the database", {
                                    duration: 4000,
                                    position: 'top-center'
                                })
                            })
                            .catch(error => {
                                toast.error("Errors happened during update the profile", {
                                    duration: 4000,
                                    position: 'top-center'
                                })
                            })
                    })
                    .catch((error) => { console.log(error.message); });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorCode);
                console.log(errorMessage);
            });
        setLoading(false)
    }

    const googleSignIn = () => {
        loginInWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
                console.log(from)
            })
            .catch(error => {
                console.error(error)
            })
    }

    if (loading) {
        return <>
            <Lottie animationData={Load} loop={true} className="h-[600px]" />
        </>
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen w-full'>
            <div className='grid justify-center lg:justify-end'>
                <div className='h-[250px] lg:h-[500px] w-[250px] lg:w-[500px]'>
                    <Lottie animationData={SignUpLottie} loop={true} />
                </div>
            </div>

            <div >
                <div className='flex justify-center lg:justify-start'>
                    <form onSubmit={handleSubmit(submitLogin)}>
                        <h2 className='text-[32px] text-center text-[#4e4e4e]'>Create your account</h2>

                        <div className={SignUpCSS.formGroup}>
                            <input type="text" autoFocus id='' name='' {...register("name")} required />
                            <label className='' htmlFor="name">Name</label>
                        </div>

                        <div className={SignUpCSS.formGroup}>
                            <input type="text" id='email' name='' {...register("email")} required />
                            <label className='' htmlFor="email">Email address</label>
                        </div>

                        <div className={SignUpCSS.formGroup}>
                            <input type="password" id='password' name='' {...register("password")} required />
                            <label className='email-label' htmlFor="password">Password</label>
                        </div>

                        <div className={SignUpCSS.formSwitch}>
                            <p className='test-xs'>Already have an account? <span className={SignUpCSS.formSpan}><Link to='/login'>Log in</Link></span></p>
                        </div>

                        <div><button className={SignUpCSS.formBtn}>Continue</button></div>

                        <div
                            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                            <p className="text-center font-semibold mx-4 mb-0">OR</p>
                        </div>
                    </form>
                </div>
                <div className='flex flex-col justify-center items-center lg:items-start '>
                    <div>
                        <button onClick={googleSignIn} className='w-[300px] flex items-center border border-gray-400 h-12 text-black bg-white rounded-md mb-3 transition duration-200 ease-in-out hover:bg-gray-200'>
                            <img className="h-1/2 mx-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png" alt="" />Continue with Google</button>
                    </div>
                    <div>
                        <button className='w-[300px] flex items-center border border-gray-400 h-12 text-black bg-white rounded-md mb-3 transition duration-200 ease-in-out hover:bg-gray-200'>
                            <img className="h-1/2 mx-4" src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" />Continue with Facebook</button>
                    </div>
                </div>

            </div >
        </div >
    );
};

export default SignUp;