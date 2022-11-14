import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppoinmentOptions from './AppoinmentOptions';
import Modal from '../Modal/Modal';


const AvailableAppoinmets = ({selectedNewDate}) => {
    const [availableAppoinments , setAvailableAppoinments] = useState([])
    const [treatment , setTreatment] = useState(null)
    useEffect(() => {
        fetch('AppoinmentsOptions.json')
        .then(res => res.json())
        .then(data => setAvailableAppoinments(data))
    },[])

    return (
        <div className='mt-5'>
           <p className='text-secondary text-xl font-bold text-center'> Available Appointments on {format(selectedNewDate , 'PP')}</p>
             <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
               
             {availableAppoinments.map(options => <AppoinmentOptions
               key={options._id}
               availableAppoinments = {options}
               setTreatment = {setTreatment}
             ></AppoinmentOptions>)}
             {treatment &&  <Modal 
              treatment = {treatment}
              selectedNewDate = {selectedNewDate}
              setTreatment = {setTreatment}
              ></Modal>}
             </div>
        </div>
    );
};

export default AvailableAppoinmets;