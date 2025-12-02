import React from 'react';
import error from '../img/error-404.png'
import { Link } from 'react-router';
import Header from '../Pages/Header';
import Footer from '../Pages/Footer';
const Errorpage = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <div className='max-w-screen-xl mx-auto flex flex-col justify-center items-center'>
            <div className=''>
                <img src={error} alt="" />

                <h1 className='font-bold text-5xl text-center'>Oops, page not found!</h1>
                <p className='text-center mt-4'>The page you are looking for is not available.</p>
            <div className='flex justify-center items-center mt-5 mb-3'>
                <Link to={'/'}><button className='w-[150px] btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-center'>Go Back!</button></Link>
            </div>
            </div>
        </div>
        
        </div>
    );
};

export default Errorpage;