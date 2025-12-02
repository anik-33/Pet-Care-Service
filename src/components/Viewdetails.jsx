import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Viewdetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const convertid = parseInt(id);
  const singleData = data.find(pet => pet.serviceId === convertid);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    toast.success("You successfully submitted the form!");
    setFormData({ name: '', email: '' }); // Clear form
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mt-17 space-y-10 bg-amber-50">
      {/*  Details Section */}
      <div className="flex flex-col md:flex-row items-start gap-8 bg-purple-100 rounded-xl p-6 shadow-lg">
        <img
          src={singleData.image}
          alt={singleData.serviceName}
          className="w-full md:w-1/2 h-80 md:h-auto object-cover rounded-lg"
        />
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
              {singleData.serviceName}
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
              {singleData.description}
            </p>
          </div>
          <div className="space-y-3 text-gray-800">
            <p><span className="font-semibold">Category:</span> {singleData.category}</p>
            <p><span className="font-semibold">Price:</span> ${singleData.price}</p>
            <p><span className="font-semibold">Rating:</span> ⭐ {singleData.rating}</p>
            <p><span className="font-semibold">Available Slot:</span> {singleData.slotsAvailable}</p>
          </div>
        </div>
      </div>

      {/* Book a service Form */}
      <div className="bg-base-200 rounded-xl p-6 shadow-md max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-500">
          Book Consultation
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="label font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="label font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-green text-white w-full mt-4 bg-purple-400 hover:bg-purple-800 transition duration-300"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>

      {/* ToastContainer */}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Viewdetails;
