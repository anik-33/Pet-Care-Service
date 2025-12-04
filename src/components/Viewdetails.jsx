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
    e.preventDefault();
    toast.success("You successfully submitted the form!");
    setFormData({ name: '', email: '' });
  };

  return (
    <div className="max-w-11/12 mx-auto p-6 mt-17 space-y-12">

      {/* ✅ Main Details Section */}
      <div className="flex flex-col md:flex-row gap-8 bg-purple-100 rounded-xl p-6 shadow-lg">
        <img
          src={singleData.image}
          alt={singleData.serviceName}
          className="w-full md:w-1/2 h-80 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-purple-700 mb-4">
            {singleData.serviceName}
          </h1>

          <p className="text-gray-700 mb-6 whitespace-pre-line">
            {singleData.description}
          </p>

          <div className="grid grid-cols-2 gap-4 text-gray-800">
            <p><strong>Category:</strong> {singleData.category}</p>
            <p><strong>Price:</strong> ${singleData.price}</p>
            <p><strong>Rating:</strong> ⭐ {singleData.rating}</p>
            <p><strong>Slots:</strong> {singleData.slotsAvailable}</p>
          </div>
        </div>
      </div>

      {/* ✅ Service Highlights */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">Service Highlights</h2>
        <ul className="grid md:grid-cols-2 gap-3 list-disc pl-6 text-gray-700">
          <li>Certified professionals</li>
          <li>100% Pet-safe handling</li>
          <li>Emergency support available</li>
          <li>Affordable & transparent pricing</li>
        </ul>
      </div>

      {/* ✅ What's Included */}
      <div className="bg-purple-50 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">What's Included</h2>
        <ul className="space-y-2 text-gray-700">
          <li>✔ Full health check</li>
          <li>✔ Grooming & cleaning</li>
          <li>✔ Nutrition guidance</li>
          <li>✔ After-service follow-up</li>
        </ul>
      </div>

      {/* ✅ Provider Information */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">Service Provider</h2>
        <div className="flex items-center gap-4">
          <img
            src="https://i.ibb.co/Y7hZ4Nt/doctor.png"
            className="w-16 h-16 rounded-full object-cover"
            alt="provider"
          />
          <div>
            <h3 className="font-semibold text-lg">Dr. Sarah Ahmed</h3>
            <p className="text-sm text-gray-600">Certified Pet Specialist - 8+ Years Experience</p>
          </div>
        </div>
      </div>

      {/* ✅ Customer Reviews */}
      <div className="bg-purple-100 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow">
            ⭐⭐⭐⭐⭐ <br />
            "Amazing service! My cat loved it." – <strong>Rahim</strong>
          </div>
          <div className="bg-white p-4 rounded shadow">
            ⭐⭐⭐⭐☆ <br />
            "Professional and friendly staff!" – <strong>Nusrat</strong>
          </div>
        </div>
      </div>

      {/* ✅ FAQ Section */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3 text-gray-700">
          <p><strong>Q:</strong> Is home service available?<br />✅ Yes, within city limits.</p>
          <p><strong>Q:</strong> Is this safe for kittens?<br />✅ 100% safe and vet-approved.</p>
        </div>
      </div>

      {/* ✅ Booking Form */}
      <div className="bg-base-200 rounded-xl p-6 shadow-md max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-500">
          Book Consultation
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />

            <button
              type="submit"
              className="btn btn-green text-white w-full mt-4 bg-purple-400 hover:bg-purple-800"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>

      {/* ✅ Toast Message */}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Viewdetails;
