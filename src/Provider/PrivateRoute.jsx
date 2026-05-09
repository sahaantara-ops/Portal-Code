import React, { useContext } from 'react';

import AuthContext from "../Provider/AuthContext";
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    console.log(user);
    if(user && user?.email){
         return  children;
    }
    return <Navigate to="/auth/login"></Navigate>
    
    ;
};

export default PrivateRoute;