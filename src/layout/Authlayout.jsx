import React from 'react';
import Login from '../components/Login';
import Navber from '../components/Navber';
import { Outlet } from 'react-router';
import Footer from '../Pages/Footer';

const Authlayout = () => {
    return (
        <div>
           <header>
            <Navber></Navber>
           </header>
           <main>
            <Outlet></Outlet>
           </main>
           <Footer></Footer>
        </div>
    );
};

export default Authlayout;