import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../Context/AuthContext';

const PrivateRouter = ({children}) => {
    const location = useLocation();
    const {user , loading} = useContext(UserContext)
    console.log(loading)
    if(loading){
        return <progress className="progress w-56"></progress>
    }
   if(!user?.uid) {
     return <Navigate to='/login' state={{from : location}} replace />
   }
   return children; 
};

export default PrivateRouter;