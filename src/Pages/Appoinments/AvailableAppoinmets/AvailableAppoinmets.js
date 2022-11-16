import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppoinmentOptions from './AppoinmentOptions';
import Modal from '../Modal/Modal';
import { useQuery , data , isLoading } from '@tanstack/react-query';
import Loader from '../../Shared/Loader/Loader';


const AvailableAppoinmets = ({selectedNewDate}) => {
    // const [availableAppoinments , setAvailableAppoinments] = useState([])
    const [treatment , setTreatment] = useState(null)
    const date = format(selectedNewDate , 'PP ')
    console.log(date)

    
// const {query , data:availableAppoinments = []  , isLoading} = useQuery({queryKey : ['todos'] , queryFn : () =>  fetch('http://localhost:5000/appoinmentsOptions')
// .then(res => res.json())})

const {query , data:availableAppoinments=[] ,  refetch , isLoading  } = useQuery({
  queryKey : ['appoinmentsOptions' , date , ] , queryFn : () => fetch(`http://localhost:5000/appoinmentsOptions?date=${date}`) 
  .then(res => res.json())
})   
if(isLoading) {
  return <Loader></Loader>
}
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
              refetch={refetch}
              ></Modal>}
             </div>
        </div>
    );
};

export default AvailableAppoinmets;