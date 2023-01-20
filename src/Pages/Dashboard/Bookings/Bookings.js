import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const Bookings = () => {
    const {data : allBookings , refetch} = useQuery({
        queryKey: ['bookings'] , 
        queryFn : async () => {
            const res = await fetch('http://localhost:5000/allBookings')
            const data = res.json();
            return data;
        }
    })
  const handleDeleteBooking =(id) => {
      fetch(`http://localhost:5000/allBookings/${id}` , 
      {
        method: 'DELETE' ,
        headers : {
            authorization : `bearer ${localStorage.getItem('token')}`
          }
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0) {
            toast.success('deleted succesfully')
            refetch()
        }
       
      })
  }
    return (
        <div>
        <div className="overflow-x-auto ">
<table className="table w-full">
  
  <thead>
    <tr>
      <th></th>
      <th>Patient Name</th>
      <th>Email </th>
      <th>Number </th>
      <th>Treatment </th>
      <th>Appointment Date </th>
      <th>Slot</th>
      <th>Delete </th>
      
    </tr>
  </thead>
  <tbody>
    {
        allBookings?.map((bookings , i) => 
            <tr key={bookings._id}>
                <td>{i}</td>
              <td>{bookings.patient}</td>
              <td>{bookings.email}</td>
              <td>{bookings.number}</td>
              <td>{bookings.treatment}</td>
              <td>{bookings.appointmentDate}</td>
              <td>{bookings.slot}</td>
              <td><button onClick={()=>handleDeleteBooking(bookings._id)} className='btn btn-xs btn-error'>Delete</button></td>
    


            </tr>
            )
    }
  </tbody>
</table>
</div>
      </div>
    );
};

export default Bookings;