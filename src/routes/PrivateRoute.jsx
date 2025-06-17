import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading';
import { AuthContext } from '../context/AuthContext/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <Loading/>
    }

    if(!user){
        return <Navigate to="/auth/login" state={location.pathname}></Navigate>
    }

    return children;
};

export default PrivateRoute;