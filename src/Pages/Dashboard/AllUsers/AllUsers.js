import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const {data:users = [] , refetch} = useQuery({
        queryKey : ['users'] , 
        queryFn  : async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json()
            return data ;
        }
    })
  
    const handleSetAdmin = (id) => {
      fetch(`http://localhost:5000/users/admin/${id}` , {
        method : "PUT" , 
        headers : {
          authorization : `bearer ${localStorage.getItem('token')}`
        }
      
      })
      .then(res => res.json())
      .then(data =>{
        if(data.modifiedCount > 0) {
          toast.success('Admin role added succesfully')
          refetch()
        }
        console.log(data)
      })
    }
    return (
        <div>
          <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>User</th>
        <th>Email</th>
        <th>Admin </th>
        <th>Delete </th>
      </tr>
    </thead>
    <tbody>
      {users.map((user , i) =>  <tr key={user._id}>
        <th>{i+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
         
          {user.role === 'admin' ? 
        <button className='btn btn-xs btn-primary btn-disabled'>Done</button>
      :
      <button onClick={() => handleSetAdmin(user._id)} className='btn btn-xs btn-primary'>Admin</button>
      }</td>
        <td><button className='btn btn-xs btn-error'>Delete</button></td>
      </tr> )}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;

