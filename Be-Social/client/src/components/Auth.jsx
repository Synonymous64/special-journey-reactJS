import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import axios, { all } from 'axios'
import SignInImage from '../assets/signup.jpg'
const cookies = new Cookies();
const initialState = {
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    avatarURL: ""
}
const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [form, setForm] = useState(initialState);
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        // console.log(form);
    }
    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(form);
        const { username, password, phoneNumber, avatarURL } = form;
        const URL = 'https://my-social-app-puce.vercel.app/auth';
        const { data: { token, userId, hashedPassword, fullName } } = await axios.post(`${URL}/${isSignUp ? 'signup' : 'login'}`, {
            username, password, fullName: form.fullName, phoneNumber, avatarURL
        })
        cookies.set('token', token);
        cookies.set('username', username);
        cookies.set('fullName', fullName);
        cookies.set('userId', userId);
        if (isSignUp) {
            cookies.set('phoneNumber', phoneNumber);
            cookies.set('avatarURL', avatarURL);
            cookies.set('hashedPassword', hashedPassword);
        }
        window.location.reload();
    }
    return (
        <div className='auth__form-container'>
            <div className='auth__form-container_fields'>
                <div className="auth__form-container_fields-content">
                    <p>
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                        <form onSubmit={handleSubmit}>
                            {isSignUp && (
                                <div className='auth__form-container_fields-content_input'>
                                    <label htmlFor='fullName'> Full Name </label>
                                    <input
                                        name='fullName'
                                        type='text'
                                        placeholder='Full Name'
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                            )}
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor='userName'> Username </label>
                                <input
                                    name='username'
                                    type='text'
                                    placeholder='Username'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {isSignUp && (
                                <div className='auth__form-container_fields-content_input'>
                                    <label htmlFor='phoneNumber'> Phone Number </label>
                                    <input
                                        name='phoneNumber'
                                        type='number'
                                        placeholder='Phone Number'
                                        onChange={handleChange}
                                        required
                                    >
                                    </input>
                                </div>
                            )}
                            {isSignUp && (
                                <div className='auth__form-container_fields-content_input'>
                                    <label htmlFor='avatarURL'> Avatar </label>
                                    <input
                                        name='avatarURL'
                                        type='text'
                                        placeholder='Avatar URL'
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            )}
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor='password'> Password </label>
                                <input
                                    name='password'
                                    type='password'
                                    placeholder='Password'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {isSignUp && (
                                <div className='auth__form-container_fields-content_input'>
                                    <label htmlFor='confirmPassword'> Confirm Password </label>
                                    <input
                                        name='confirmPassword'
                                        type='password'
                                        placeholder='Confirm Password'
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            )}
                            <div className='auth__form-container_fields-content_button'>
                                <button>
                                    {isSignUp ? "Sign up" : "Sign in"}
                                </button>
                            </div>
                        </form>
                        <div className='auth__form-container_fields-account'>
                            <p style={isSignUp ? { color: 'green' } : { color: 'red' }}>
                                {isSignUp ? "Already have an account" : "Don't have an account"}
                                <span onClick={switchMode}>
                                    {" "}{isSignUp ? 'Sign In' : 'Sign Up'}
                                </span>
                            </p>
                        </div>
                    </p>
                </div>
            </div>
            <div className='auth__form-container_image'>
                <img src={SignInImage} alt='img' />
            </div>
        </div>
    )
}

export default Auth
