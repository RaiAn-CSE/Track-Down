import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    return (
        <div className='form-section'>
            <form action="" className='form-box'>
                <h2>Create your account</h2>
                <p>Please note that phone verification is required for signup.
                    <br /> Your number will only be used to verify your identity for
                    <br /> security purposes.</p>

                <div className='form-group'>
                    <input type="email" id='' name='' required />
                    <label htmlFor="email">Email</label>
                </div>

                <div className='form-group'>
                    <input type="password" id='' name='' required />
                    <label htmlFor="password">Password</label>
                </div>

            </form>
        </div>
    );
};

export default SignUp;