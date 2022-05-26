import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const MyOrders = () => {

    const [user] = useAuthState(auth)
    const navigate = useNavigate('')
    const [items, setitems] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken')
                    navigate('/login')
                }
                else if (res.status === 401) {
                    signOut(auth);
                    localStorage.removeItem('accessToken')
                    navigate('/login')
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                setitems(data)
            })
    }, [])

    // delete Item api call
    const deleteItem = (props) => {
        // console.log(props)
      
            fetch(`http://localhost:5000/orders/${props}`, {
                method: 'Delete',
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaing = items.filter(itme => itme._id !== props)
                        setitems(remaing)
                    }
                })
        
    }
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
                {items?.map(item => <div key={item?._id} class="card w-full lg:w-80 my-[35px] mx-auto bg-base-100 shadow-xl">
                    <figure><img src={item?.picture} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Product Name : {item?.name}
                            {
                                item?.paid === 'panding' ? <div class="badge badge-primary pb-[3px]">{item?.paid}</div> : <div class="badge badge-primary pb-[3px]">paid</div>
                            }
                        </h2>
                        <div class=" justify-start">
                            <p className='my-[6px] font-semibold'>Totul Price : {parseFloat(item?.price) * parseFloat(item.quantity)}</p>
                            <p className='my-[6px] font-semibold'>Quentity : {item?.quantity}</p>
                            <p className='my-[6px] font-semibold'>Reciver Name : {item?.reciverName}</p>
                            <small className='mb-[6px] font-semibold'>User-email:{item?.email}</small>
                            <p className='my-[6px] font-semibold'><small>Address: {item.Address}</small></p>
                            <p className='my-[6px] font-semibold'>Phone Number : <small>{item?.PhoneNumber}</small></p>

                            <div className='flex justify-between'>
                                <div>
                                    {
                                        item.paid === 'panding' && <Link to={'/payment/' + item?._id}><button className="btn bg-green-700 px-[40px] text-white " >Pay</button></Link>
                                    }
                                </div>
                                <label for="my-modal-3" class="btn modal-button bg-red-500 border-0 px-5">Delete</label>

                                <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                                <div class="modal">
                                    <div class="modal-box relative">
                                        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <h3 class="text-lg font-bold">Are sure You want to delete the order?</h3>
                                        <button className="btn bg-red-500 px-[40px] text-white " onClick={() => deleteItem(item?._id)}>Delete</button>
                                    </div>
                                </div>

                               
                            </div>

                        </div>
                    </div>
                </div>)}

            </div>
        </div >
    );
};

export default MyOrders;