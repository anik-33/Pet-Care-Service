import React, { useEffect } from 'react';
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Crad = ({ data }) => {

    
    useEffect(() => {
        AOS.init({
            duration: 2000, 
            once: true, 
        });
    }, []);
    return (
        <div  data-aos="fade-up" className='p-3'>
            <h1 className='font-semibold text-center text-4xl mt-6 '>Our Top Rated Pet Care Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {data.map(pet => (
                    <div 
                        key={pet.serviceId} 
                        className=" text-black my-5 shadow-lg mx-auto  w-full max-w-[450px]"
                    >
                        <figure>
                            <img
                                src={pet.image}
                                alt={pet.title}
                                className="h-70 w-full  object-cover"
                            />
                        </figure>
                        <div className="p-4">
                            <h2 className="">{pet.serviceName}</h2>
                            <div className="card-actions flex justify-between">
                                <p>{pet.price}$</p>
                                <p>{pet.rating}🌟</p>
                            </div>
                            <Link 
                                to={`/viewdetails/${pet.serviceId}`} 
                                className="btn mt-4 w-full bg-purple-800 btn-primary text-white text-center"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Crad;
