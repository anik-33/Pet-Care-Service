import React, { useContext, useRef } from 'react';
import { Authcontext } from '../provider/Authprovider';
import toast, { Toaster } from 'react-hot-toast';

const Forgetpass = () => {
  const { forgetPass } = useContext(Authcontext);
  const emailRef = useRef();

  const handleForgetPass = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    if (!email) return toast.error('Please enter your email');

    forgetPass(email)
      .then(() => toast.success('Please check your mail'))
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Toaster />
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className='text-center p-5 text-2xl font-bold'>Recover Your Password!!</h1>
        <form onSubmit={handleForgetPass}>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input ref={emailRef} type="email" name='email' className="input" placeholder="Email" />
              <button type='submit' className="btn btn-neutral mt-4">Reset Password</button>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgetpass;
