import React, { use, useState } from 'react';
import { Authcontext } from '../provider/Authprovider';
import { toast, ToastContainer } from 'react-toastify';


const MyProfile = () => {
  const { user,updateUserProfile } = use(Authcontext)
  const [name, setName] = useState(user?.displayName || '');
  const [photo, setPhoto] = useState(user?.photoURL || '');
  const [isEditing, setIsEditing] = useState(false);
  const handlesaveChanges = ()=>{
    setIsEditing(true)
  }
const handleUpdate = (e) => {
    e.preventDefault();
     updateUserProfile({
        displayName: name,
        photoURL: photo,
      });
      toast.success('Profile updated successfully!')
     .catch ((error) =>{
      toast.error('Update failed: ' + error.message);
    })
  };
  const handleonfocus=()=>{
    setIsEditing(true);
  }
  return (
     <div className="flex flex-col gap-6 mt-6 mx-auto max-w-3xl p-4">
      <div className="flex items-center gap-6">
        <img
          className="w-32 h-32  border-2 border-gray-300 object-cover"
          src={user?.photoURL}
          alt="Profile"
        />
        <div>
          <h1 className="text-xl font-semibold">Name: {user?.displayName}</h1>
          <h3 className="text-gray-600">Email: {user?.email}</h3>

         
        </div>
      </div>

      
        <form
          onSubmit={handleUpdate}
          className="mt-5 p-4 bg-gray-100 border border-purple-400 rounded-lg shadow-md"
        >
          <h2 className="text-lg font-semibold mb-3 text-center">Edit Profile</h2>

          <div className="mb-3">
            <label className="block font-medium mb-1">New Name</label>
            <input
              type="text"
              onFocus={handleonfocus}
              // value={name}
               onChange={(e) => setName(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="mb-3">
            <label className="block font-medium mb-1">New Photo URL</label>
            <input
              type="text"
              // value={photo}
              onFocus={handleonfocus}
              onChange={(e) => setPhoto(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <button
            type="submit"
            onClick={handlesaveChanges}
            className="px-5  py-2 bg-purple-400 text-white rounded-md hover:bg-purple-800 transition"
          >{
           isEditing ? "Save":"Update Profile"
           }
          </button>
        </form>
      
      <ToastContainer/>
    </div>
  );
};

export default MyProfile;