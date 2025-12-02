import React, { useEffect } from 'react';
import Swipe from '../components/Swipe';
import Card from '../components/Card';
import { useLoaderData } from 'react-router';
import Experts from '../components/experts';
import Wintercare from '../components/Wintercare';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Whyus from '../components/Whyus';


const Home = () => {
    const data = useLoaderData();

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true, 
        });
    }, []);

    return (
        <div   data-aos="fade-up">
            <Swipe></Swipe>
            <Card data={data}></Card>
            <Wintercare></Wintercare>
            <Experts></Experts>
            <Whyus></Whyus>
        </div>
    );
};

export default Home;