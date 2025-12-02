import React, { Children, use } from 'react';
import { Navigate, useLocation} from 'react-router';
import { Authcontext } from '../provider/Authprovider';


const Privateroute = ({children}) => {
    const {user,loading} = use(Authcontext)
    
    const location = useLocation();

    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }
    if(user)
    {
        return children;
    }

    return <Navigate state={location?.pathname} to="/auth/login"></Navigate>;
};

export default Privateroute;