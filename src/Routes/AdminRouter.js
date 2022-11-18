import React, { useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../Context/AuthContext';
import useAdmin from '../Hooks/useAdmin';
import Loader from '../Pages/Shared/Loader/Loader'

const AdminRouter = ({children}) => {
    const location = useLocation();
    const {user , loading} = useContext(UserContext)
    const [isAdmin , isAdminLoading] = useAdmin(user?.email)
    console.log(loading)
    if(loading || isAdminLoading){
        return <Loader></Loader>
    }
   if(user && isAdmin) {
   
   return children; 

     
   }
   return <Navigate to='/login' state={{from : location}} replace />
};

export default AdminRouter;