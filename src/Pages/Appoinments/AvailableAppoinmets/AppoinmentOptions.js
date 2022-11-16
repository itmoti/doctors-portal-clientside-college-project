import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../Context/AuthContext';

const AppoinmentOptions = ({ availableAppoinments  , setTreatment }) => {
const navigate = useNavigate();

  const { name, slots } = availableAppoinments
  const {user } = useContext(UserContext)
  const handleBook = (availableAppoinments)=> {
  
  
    if(!user?.email) {
      navigate('/login')
    }
    setTreatment(availableAppoinments)
 
  }
  return (
    <div>
      <div className="card w-96 bg-base-100  text-center shadow-xl">
        <div className="card-body ">
          <h2 className="card-title block text-secondary text-center">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
          <p>{slots.length} {slots.length > 0 ? 'spaces' : 'space'} available</p>
          <div className="card-actions justify-center ">

            <label
            disabled = {slots.length  ===0}
         
            onClick={() => { handleBook( availableAppoinments) 
             }
              } htmlFor="booking-modal" className="btn btn-secondary text-white">Book Appoinments</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentOptions;