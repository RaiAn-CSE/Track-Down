import React from 'react';
import SignUpCSS from './SignUp.module.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className={SignUpCSS.formSection}>
            <div className={SignUpCSS.formBox}>

                <form action="">
                    <h2 className={SignUpCSS.formTitle}>Create your account</h2>


                    <div className={SignUpCSS.formGroup}>
                        <input type="text" autoFocus id='' name='' required />
                        <label className='' htmlFor="email">Name</label>
                    </div>

                    <div className={SignUpCSS.formGroup}>
                        <input type="text" id='email' name='' required />
                        <label className='' htmlFor="email">Email address</label>
                    </div>

                    <div className={SignUpCSS.formGroup}>
                        <input type="password" id='password' name='' required />
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

                    <div>
                        <button className={SignUpCSS.signInBtn}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png" alt="" />Continue with Google</button>
                    </div>
                    <div>
                        <button className={SignUpCSS.signInBtn}><img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" />Continue with Google</button>
                    </div>

                </form>

            </div >
        </div >
    );
};

export default SignUp;