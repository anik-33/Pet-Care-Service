import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Authcontext } from '../provider/Authprovider';
import { toast, ToastContainer } from 'react-toastify';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const SignUp = () => {
    const navigate = useNavigate();
    const { createUser, setUser, updateUserProfile, signInWithGoogle } = use(Authcontext);

     const [showPass,setShowpass] =useState(false);
        const toggleshow =()=>{
            setShowpass(!showPass)
        }

    // Mail/password registration
    const handleregister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                toast.success('🎉 Account created successfully!');

                updateUserProfile({
                    displayName: name,
                    photoURL: photo,
                }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: photo });
                });

                setTimeout(() => {
                    navigate('/');
                }, 1600);
            })
            .catch(() => {
                
                toast.error("You already have an account login please!")
            });
    };

    // Google login
    const handleGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
                toast.success('Logged in with Google!');
                navigate('/');
            })
            .catch((error) => {
                console.error(error);
                toast.error('Google login failed!');
            });
    };

    return (
        <div className="hero bg-green-50 min-h-screen">
            <div className="card bg-green-50 w-full max-w-sm shadow-2xl">
                <h1 className="text-center p-5 text-2xl font-bold text-purple-700">
                    Register your account now!!
                </h1>
                <form onSubmit={handleregister}>
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name="name" className="input" placeholder="Enter your name" />

                            <label className="label">Photo Url</label>
                            <input required type="url" name="photo" className="input" placeholder="Photo url" />

                            <label className="label">Email</label>
                            <input required type="email" name="email" className="input" placeholder="Email" />

                            <label className="label">Password</label>

                                <div className='relative'>
                                                    <input type={
                                                        showPass? 'text':'password'
                                                    } className="input" name='password' placeholder="Password" />
                                                    <button onClick={toggleshow}  type="button"  className='btn btn-sm border-0 absolute top-1 right-5 '> {(showPass? <FaEye /> : <FaEyeSlash />)}</button>
                                                    </div>
                            

                            <button type="submit" className="btn bg-purple-800 mt-4 text-white">Register</button>
                        </fieldset>
                    </div>
                </form>

                 {/* Google Login Button  */}
                <div className="card-body">
                    <button type="button" onClick={handleGoogle} className="btn w-full">
                        Sign in with Google
                    </button>
                </div>

                <p className="text-sm font-semibold p-2 text-center">
                    Already have an account?{' '}
                    <span className="text-red-500">
                        <Link to="/auth/login">Log in</Link>
                    </span>
                </p>
            </div>
            <ToastContainer position="top-center" autoClose={2000} />
        </div>
    );
};

export default SignUp;
