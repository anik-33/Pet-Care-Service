import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Pages/Header';
import Footer from '../Pages/Footer';

const HomeLayout = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;