import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Experts = () => {
    const [experts, setExperts] = useState([]);

    useEffect(() => {
        fetch("/Expert.json")
            .then(res => res.json())
            .then(data => setExperts(data));
    }, []);


    useEffect(() => {
        AOS.init({
            duration: 2000, 
            once: true, 
        });
    }, []);

    return (
        <div  data-aos="fade-up" className='p-4'>
            <section className='mt-10'>
                <h2 className='text-4xl font-semibold text-center mb-8'>Meet Our Expert Vets</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {experts.map(expert => (
                        <div key={expert.id} className='bg-green-50 shadow-md max-w-[450px] mx-auto rounded-lg p-4 text-center'>
                            <img
                                src={expert.image}
                                alt={expert.name}
                                className='w-32 h-32 mx-auto rounded-full object-cover mb-4'
                            />
                            <h3 className='text-xl font-bold'>{expert.name}</h3>
                            <p className='text-green-700 font-medium'>{expert.specialization}</p>
                            <p className='text-gray-600 mt-2 text-sm'>{expert.bio}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Experts;