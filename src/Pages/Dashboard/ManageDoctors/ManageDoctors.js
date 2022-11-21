import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const ManageDoctors = () => {
    const [ deletingDoctor, setDeletingDoctor] = useState(null)
    const CloseModal = () => {
        setDeletingDoctor(null)
    }
    const { data: doctors, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/doctors', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })
    const handleDltUserBtn = doctor => {
        console.log(doctor._id)
        const id = doctor._id

        fetch(`http://localhost:5000/doctors/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount  > 0){
                     refetch()
                    toast.success('User Deleted Successfully')
                    }
            })



    }

    console.log(doctors)
    return (
        <div>
            <h1>Manage Doctors : {doctors?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <th><div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                                        <img src={doctor.image} alt="img" />
                                    </div>
                                </div></th>

                                <td>{doctor.name}</td>
                                <td>{doctor.speciality}</td>
                                <td>
{/*                                     
                                    <label onClick={() => handleDltUserBtn(doctor._id)} htmlFor="ConfirmationModal" className='btn btn-error btn-sm'>open modal</label> */}
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="ConfirmationModal" className='btn btn-error btn-sm'>Delete</label>

                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {deletingDoctor
            && 
            <ConfirmationModal
            title = 'Are you sure you want to delete?' 
            message={`If you delete ${deletingDoctor.name}.It can't be undone`}
            handleDltUserBtn = {handleDltUserBtn} 
            modalData = {deletingDoctor}
            CloseModal = {CloseModal}
            successbtnName = {'Delete'}

            ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;