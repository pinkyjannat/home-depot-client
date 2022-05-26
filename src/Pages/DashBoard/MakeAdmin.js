import React from 'react';
import { toast } from 'react-toastify';

const MakeAdmin = ({user, refetch, index}) => {
    const {email, role} = user;
    const makeAdmin = () =>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>{
            if(res.status === 403){
                toast.error('failed to make admin')
            }
            return res.json()})
        .then(data=>{
          if(data.modifiedCount > 0){
            refetch();
            toast.success(`Successfully made an admin`)   
          }
        })
    }
    return (
        <tr>
            <th>{index +1 }</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn border-0 text-white bg-green-500 btn-xs">Make Admin</button>}</td>
            <td><button className="btn border-0 text-white bg-red-500 btn-xs">Remove user</button></td>
        </tr>
    );
};

export default MakeAdmin;