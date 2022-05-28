import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from './Shared/Loading';


const Purchase = () => {
    const { id } = useParams()
    const [quantity, setQuantity] = useState()
    const [quantiyError, setQuantityError] = useState()

    const navigate = useNavigate('')

    const [user, loading] = useAuthState(auth)


    // react form
    const { register, handleSubmit, formState: { errors }, reset } = useForm()


    const { data, isLoading } = useQuery('services', () => fetch(`https://sleepy-thicket-67798.herokuapp.com/purchase/${id}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
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
    }))


console.log(data);

    if (isLoading || loading) {
        return <Loading></Loading>
    }
 

    const onSubmit = event => {
        // console.log(data)
        const order = {
            name: data?.name,
            email:event?.email,
            quantity: event?.quantity,
            reciverName: event?.reciverName,
            Address: event?.Address,
            phoneNumber: event?.phoneNumber,
            itemName: event?.name,
            discription: data?.description,
            picture: data?.picture,
            price: data?.price,
            paid: 'pending'
        }
        // console.log(data);
        const inputQunentity = parseInt(event?.quantity);
        const minimumQuantity =parseInt( data?.minimumQuantity);
        const availableQuantity =parseInt( data?.availableQuantity);
        // console.log(availableQuantity);


        if (inputQunentity < minimumQuantity) {
            alert("You can not order less than minimum quantity of unit ")
        }
        else if (inputQunentity > availableQuantity) {
            alert("You can not order more then available unit")
        }
        else {
            // /order
            fetch('https://sleepy-thicket-67798.herokuapp.com/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(order) // body data type must match "Content-Type" header
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        reset()
                        // alert('Thanks for you Order')
                        toast.success('Order is taken')
                    }
                })
        }
    }
   

    return (
        <div className='mt-24'>
            <div className='lg:w-[1170px] mx-auto'>
                {/* main  */}
                <div class="card w-full shadow-xl bg-slate-100 p-[15px] lg:p-[25px]">

                    <div className='lg:flex'>
                        {/* items info  */}
                        <div key={data?._id} class="card  lg:w-80 my-[35px] mx-auto bg-base-100 shadow-xl border-4 border-[#d2d4e3]">
                            <figure><img src={data?.picture} alt="" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">
                                    {data?.name}
                                    <div class="badge badge-primary">NEW</div>

                                </h2>
                                <div class=" justify-start">
                                    <h2 className="card-title">{data?.name}</h2>
                                    <p>{data?.description.slice(0, 70)}</p>
                                    <p>Available Parts: <span className='font-semibold'> {data?.availableQuantity}</span> unit</p>
                                    <p>Minimum Order: <span className='font-semibold'>{data?.minimumQuantity}</span> unit</p>
                                    <h5 className='text-xl'>Price: <span className='text-orange-500'> ${data?.price}/unit</span></h5>
                                </div>
                            </div>


                        </div>
                        {/* form for the pay */}
                        <div className=' lg:p-[30px]'>
                            <div className='p-[20px] shadow-xl border-4 border-[#d2d4e3] bg-slate-100 rounded-xl'>
                                {/* user info */}
                                <div className='bg-[#ffffff] p-[10px] lg:flex lg:justify-start justify-between mb-[12px]'>
                                    <div class="flex items-center">

                                        <div className=' mx-[20px]'>
                                            <span class="badge badge-ghost badge-sm">Name</span>
                                            <br />
                                            <div class="font-bold">{user?.displayName}</div>
                                        </div>
                                    </div>
                                    <div className='lg:mx-[20px]  my-[10px] lg:my-[0]'>
                                        <span class="badge badge-ghost badge-sm">Email</span>
                                        <br />
                                        {user?.email}</div>
                                </div>
                                <div className='mx-auto'>
                                    <form onSubmit={handleSubmit(onSubmit)} className='lg:w-[670p'>
                                        {/* name */}
                                        <input {...register("name")} type='text' hidden value={user?.displayName} className="input input-bordered  w-full my-[10px]" />
                                        {/* email */}
                                        <input {...register("email")} type='text' hidden value={user?.email} className="input input-bordered w-full my-[10px]" />

                                        {/* quentity  */}
                                        <label className="label">
                                            <span className="label-text">Quantity</span>
                                        </label>
                                        <input {...register("quantity", {
                                            required: {
                                                value: true,
                                                message: ' Minimum quantity is Required'
                                            }
                                        }
                                        )} placeholder='Quntity' type='number'  className="input input-bordered w-full max-w-xs" />
                                        <label className="label">
                                            {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.quantity?.message}</span>}
                                        </label>
                                        <br />



                                        {/* Reciever Name */}
                                        <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                                <span className="label-text">Reciver Name</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("reciverName", {
                                                    required: {
                                                        value: true,
                                                        message: 'Reciver Name is Required'
                                                    }
                                                })}
                                            />
                                            <label className="label">
                                                {errors.reciverName?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.reciverName?.message}</span>}
                                            </label>
                                        </div>


                                        {/* address  */}

                                        <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                                <span className="label-text">Address</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder=" Address"
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("address", {
                                                    required: {
                                                        value: true,
                                                        message: 'Address is Required'
                                                    }
                                                })}
                                            />
                                            <label className="label">
                                                {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.address?.message}</span>}
                                            </label>
                                        </div>


                                        {/* phoneNumber */}
                                        <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                                <span className="label-text">Phone Number</span>
                                            </label>
                                            <input
                                                type="numbert"
                                                placeholder=" phone Number"
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("phoneNumber", {
                                                    required: {
                                                        value: true,
                                                        message: 'Phone Number Name is Required'
                                                    }
                                                })}
                                            />
                                            <label className="label">
                                                {errors.phoneNumber?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.phoneNumber?.message}</span>}
                                            </label>
                                        </div>



                                        {/* submit btn  */}
                                        <div className="mt-[18px] flex justify-center">
                                            <div>

                                                <input className='btn w-full max-w-xs btn-secondary text-white' type="submit" value="Order Now" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};



export default Purchase;
