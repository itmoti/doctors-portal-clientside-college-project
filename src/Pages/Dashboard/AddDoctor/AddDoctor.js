import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { json, useNavigate } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';

const AddDoctor = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm()
    const imageHostKey = process.env.REACT_APP_IMGBB_KEY;
    const {data:specialities , isLoading} = useQuery({
        queryKey : ['speciality'] , 
        queryFn : async () => {
          const res = await  fetch('http://localhost:5000/appointmentsOptions')
          const data = await res.json()
          return data

            
        }
        
    })

    const handleAddDoc = (data) => {
        
        const image = data.img[0];
       const formData = new FormData();
       formData.append('image' , image)
      const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

      fetch (url  , {
        method : 'POST' , 
        body : formData
      })
      .then(res => res.json())
      .then(imageData => {
        console.log(imageData)
        if(imageData.success) {
            console.log(imageData.data.url)
            console.log(imageData)
            const doctor = {
                name : data.name , 
                email : data.email ,
                image : imageData.data.url ,
                speciality : data.options
            }
            fetch('http://localhost:5000/doctors' , {
                method : "POST" , 
                headers : {
                    "content-type" : 'application/json' , 
                    authorization : `bearer ${localStorage.getItem('token')}`
                } , 
                body: JSON.stringify(doctor)
            })
            .then(res => res.json())
            .then(dataa => {console.log(dataa)
               toast.success(`${data.name} is added successfully `)
               navigate('/dashboard/managedoctors')
            })
        }
    })
    }
    if(isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='w-96 p-7'>
            <form onSubmit={handleSubmit(handleAddDoc)}

            >
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: "Name Missing"
                        })}
                    />
                    {errors.name && <p className='text-error'>Name Missing</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: "Email Missing"
                        })} />
                    {errors.email && <p className='text-error'>Email Missing</p>} </div>
             
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Speciality</span></label>
                    <select 
                    {...register('options' , {
                        required : 'Speciality is needed' 
                    })}
                    className="input input-bordered  w-full max-w-xs">
                        <option disabled selected>Pick a Speciality</option>
                        {specialities?.map(speciality =><option key={speciality._id} value={speciality.name}>{speciality.name}</option> )}
                        
                        
                    </select>
                    <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">File</span></label>
                    <input type='file' className="input input-bordered w-full max-w-xs"
                        {...register("img", {
                            required: "Image Missing"
                        })} />
                    {errors.img && <p className='text-error'>Email Missing</p>} </div>

                    {errors.password && <p className='text-error'>{errors.password.message}</p>}

                </div>
                <input className="btn btn-active mx-auto btn-wide mt-3" value={'Add Doctor'} type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;