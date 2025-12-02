import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Allservices = () => {
    const data = useLoaderData();
    return (
        <div>
            <div className=''>
                <h1 className='font-semibold text-center  text-4xl mt-6'>All Pet Care Services</h1>
                <p className='px-6'>Total Services ({data.length})</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-3 mt-7">{data.map(pet => (

                    <div key={pet.serviceId} className=" text-black shadow-sm mx-auto " style={{ width: '450px' }}>
                        <figure>
                            <img
                                src={pet.image}
                                alt={pet.title}
                                className="h-80   w-full"
                            />
                        </figure>
                        <div className="p-4">
                            <h2 className="card-title">{pet.serviceName}</h2>
                            <div className="card-actions flex justify-between">
                                <p>{pet.price}$</p>
                                <p>{pet.rating}⭐</p>
                            </div>
                            <Link to={`/viewdetails/${pet.serviceId}`} className="btn mt-4 w-full bg-purple-800 btn-primary text-white text-center">
                                View Details
                            </Link>
                        </div>
                    </div>


                ))}</div>

            </div>
        </div>
    );
};

export default Allservices;