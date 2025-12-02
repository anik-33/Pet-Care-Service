import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
// import { RouterProvider } from "react-router/dom";
import {  RouterProvider } from "react-router-dom";

import HomeLayout from './layout/HomeLayout.jsx';
import Home from './Pages/Home.jsx';

import Viewdetails from './components/Viewdetails.jsx';
import Authlayout from './layout/Authlayout.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import Authprovider from './provider/Authprovider.jsx';
import MyProfile from './components/MyProfile.jsx';
import Privateroute from './router/Privateroute.jsx';
import { Toaster } from 'react-hot-toast';
import Allservices from './components/Allservices.jsx';
import Errorpage from './components/Errorpage.jsx';
import Forgetpass from './components/Forgetpass.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <Errorpage></Errorpage>,
    
    children:[
      {
      //  path:'/',
        index:true,
       Component:Home,
       
        loader: ()=> fetch('/Petcareinfo.json'),
        
      },
    {
      path:'/services',
      Component:Allservices,
      loader: ()=> fetch('/Petcareinfo.json'),
    },
    {
      path:'/viewdetails/:id',
      element:<Privateroute><Viewdetails></Viewdetails></Privateroute>,
      errorElement:<Errorpage></Errorpage>,
      loader: ()=> fetch('/Petcareinfo.json'),
    },
    {
      path:'/myprofile',
      Component:MyProfile,
    }
  ]
  
  },
  {
    path: "/auth",
    Component:Authlayout,
    children:[
      {
        path:"/auth/login",
        Component:Login,
      },
      {
        path:"/auth/register",
        Component:SignUp,
      },
      {
        path:"/auth/forgetpass",
        Component:Forgetpass
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />,
        
    </Authprovider>
  </StrictMode>,
)
