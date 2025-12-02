import React, { use, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Authcontext } from '../provider/Authprovider';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const Login = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const {logIn} = use(Authcontext);
    const [showPass,setShowpass] =useState(false);
    const toggleshow =()=>{
        setShowpass(!showPass)
    }
    const emailRef = useRef();
    const location = useLocation();
    const navigate =useNavigate();
    // const handleForgetPass =()=>{
    //     const email = emailRef.current.value;
    //     forgetPass(email)
    //     .then(()=>{
            
    //         toast.success('please check your mail')
    //     })
    //     .catch()
    // }
    const handlelogin =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        logIn(email,password)
        .then((result)=>{
            const user = result.user;
            console.log(user)
            form.reset();
            navigate(location.state || '/');
            toast.success('successfully logged in')
        })
       .catch((error) => 
         {
           setErrorMsg(error.message)
           toast.error("Invalid Email or Password!")
         }
    )
        

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div><Toaster/></div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='text-center p-5 text-2xl font-bold'>Log in In your account!!</h1>
               <form onSubmit={handlelogin}>  <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input ref={emailRef} type="email" name='email' className="input" placeholder="Email" />
                          <label className="label">Password</label>
                        <div className='relative'>
                        <input type={
                            showPass? 'text':'password'
                        } className="input" name='password' placeholder="Password" />
                        <button onClick={toggleshow}  type="button"  className='btn btn-sm border-0 absolute top-1 right-5 '> {(showPass? <FaEye /> : <FaEyeSlash />)}</button>
                        </div>
                        <div><Link to={'/auth/forgetpass'}><a className="link link-hover text-red-400" >Forgot password?</a></Link></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p className='text-sm font-semibold p-2 text-center'>Don't have any account <span className='text-red-500'><Link to="/auth/register">Sign Up</Link></span></p>
                        <p className="text-red-500 text-sm text-center">{errorMsg}</p>
                    </fieldset>
                </div></form>
            </div>
        </div>

    );
};

export default Login;
