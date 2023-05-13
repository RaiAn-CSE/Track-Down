import React from 'react';
import '../Pages/CssFiles/Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-section'>
            <div className='form-box'>

                <form action="">
                    <h2 className='font-semibold form-title'>Welcome back</h2>

                    <div className='form-group'>
                        <input type="email" id='email' name='' required />
                        <label className='email-label' htmlFor="email">Email address</label>
                    </div>

                    <div className='form-group'>
                        <input type="password" id='password' name='' required />
                        <label className='email-label' htmlFor="password">Password</label>
                    </div>

                    <div className='mb-5'>
                        <p>Don't have an account? <span className='form-span'><Link to='/signup'>Sign up</Link></span></p>
                    </div>

                    <div><button className='form-btn'>Continue</button></div>

                    <div
                        className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                        <p className="text-center font-semibold mx-4 mb-0">OR</p>
                    </div>

                    <div>
                        <button className='signin-btn text-center w-full card flex-row h-11 items-center'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png" alt="" />Continue with Google</button>
                    </div>
                    <div>
                        <button className='signin-btn text-center w-full card flex-row h-11 items-center'><img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" />Continue with Google</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;