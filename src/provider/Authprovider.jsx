import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../layout/GoogleSignup';
import { signInWithEmailAndPassword } from 'firebase/auth/cordova';
 // ✅ make sure firebase.js exports app

// Create context
export const Authcontext = createContext();

// Initialize Firebase Auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const Authprovider = ({ children }) => {


  const [user, setUser] = useState(null);
  const[loading,setLoading] = useState(true)
  // Signup function
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
 
  const logIn =(email,password)=>{
      return signInWithEmailAndPassword(auth,email,password);
  }
   const LogOut = ()=>{
    return signOut(auth);
  }
  const updateUserProfile =(updatedData)=>{
    return updateProfile(auth.currentUser,updatedData);
  }
  const forgetPass =(email)=>{
    return sendPasswordResetEmail(auth,email)
  }
   const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false)
    });
    return ()=>{
          unsubscribe()
    }
  },[])
  // Everything you want to share globally
  const authData = {
    loading,
    user,
    setUser,
    createUser,
    LogOut,
    logIn,
    updateUserProfile,
    forgetPass,
    signInWithGoogle
  };

  // Return the provider
  return (
    <Authcontext.Provider value={authData}>
      {children}
    </Authcontext.Provider>
  );
};

export default Authprovider;
