import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { UserContext } from '../../../Context/AuthContext';

const DisplayError = () => { 
    const {  logOut} = useContext(UserContext)
const handleLogout = () => {
  logOut()
  .then(() => {})
   .catch(err => console.log(err))
} 
    const error = useRouteError()
    return (
        <div>
            <p className='text-error'>Something went wrong</p>
            <p className='text-error'>{error.statusText || error.message}</p>
            <h1>Please <button onClick={handleLogout}>Logout</button> and login back</h1>
        </div>
    );
};

export default DisplayError;