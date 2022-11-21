import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../Context/AuthContext';

const MyAppoinments = () => {
    const { user } = useContext(UserContext)

    const { data: appoinments } = useQuery({
        queryKey: ['myAppoinmets', user?.emal],
        queryFn: () => fetch(`http://localhost:5000/myAppoinmets/?email=${user.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
    })
  
    return (
        <div>

            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Treatment</th>
                        <th>Date </th>
                        <th>Time </th>
                        <th>Payment </th>
                    </tr>
                </thead>
                <tbody>
                    {appoinments?.map((appoinment, i) => <tr key={appoinment._id}>
                        <th>{i + 1}</th>
                        <td>{appoinment.name}</td>
                        <td>{appoinment.treatment}</td>
                        <td>{appoinment.appointmentDate}</td>
                        <td>{appoinment.slot}</td>
                        <td>
                            
                            {appoinment.price
                            && !appoinment.paid &&
                             <Link to={`/dashboard/payment/${appoinment._id}`}>
                                <button className='btn btn-primary'>Pay</button>
                             </Link>
                            }
                            {
                                appoinment.price && appoinment.paid && <span className='text-primary'>Paid</span>
                            }

                              </td>
                    </tr>)}

                </tbody>
            </table>
        </div>

    );
};

export default MyAppoinments;