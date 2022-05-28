import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const MyProfile = () => {
    const [user, loading] = useAuthState(auth)
    const [userInfo, setUserInfo] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://sleepy-thicket-67798.herokuapp.com/userProfile/${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
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
                setUserInfo(data)
            })
    }, [user, userInfo])

    if(loading){
        return <Loading></Loading>
    }
    // react form 

    const onSubmit = data => {
        const user = {
            email: data?.email,
           education: data?.education,
           location: data?.location,
           PhoneNumber: data?.PhoneNumber,
           LinkedInProfilelink: data?.LinkedInProfilelink


        }
        console.log(data)
        fetch('https://sleepy-thicket-67798.herokuapp.com/userUpdate', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user) 
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    reset()
                  toast.success('Your Profile is Updated')

                }
            })
    }
 
    return (
        <div className='h-100'>
            <div className='p-[30px]'>
                <div class="card w-full shadow-xl border-4 border-primary bg-slate-100">
                    <figure class="px-10 pt-10">
                        <img src={user?.photoURL} alt="IMG" class="rounded-full border-4 border-primary" />

                    </figure>
                    <h2 class=" text-3xl text-center">My Profile</h2>
                    <div class="card-body ">

                        <p className='font-semibold'>Name : {user?.displayName}</p>
                        <p className='font-semibold'>Email : {user?.email}</p>
                        {
                            userInfo?.education ? <p className='font-semibold'>Education : {userInfo.education}</p> : ''
                        }
                        {
                            userInfo?.location ? <p className='font-semibold'>location : {userInfo.location}</p> : ''
                        }
                        {
                            userInfo?.phoneNumber ? <p className='font-semibold'>Phone Number : {userInfo.phoneNumber}</p> : ''
                        }
                        {
                            userInfo?.LinkedInProfileLink ? <p className='font-semibold'>LinkedIn profile link : <a className='text-blue-500' href={userInfo.LinkedInProfileLink}>Profile Link</a></p> : ''
                        }


                    </div>
                </div>
            </div>
            <div className='p-[30px] w-3/4 mx-auto '>
                <div className='p-[40px] shadow-xl border-4 border-primary bg-slate-100 rounded-xl'>
                    <h2 class=" text-4xl text-center">My Profile</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* name */}
                        <input {...register("name")} type='text' value={user?.displayName} className="input input-bordered w-full my-[14px]" />
                        {/* email */}
                        <input {...register("email")} type='text' value={user?.email} className="input input-bordered w-full my-[14px]" />
                        {/* Education*/}
                        <input {...register("education")} placeholder='Education' type='text' className="input input-bordered w-full my-[14px]" />
                        {/*location*/}
                        <input {...register("location")} placeholder='location' type='text' className="input input-bordered w-full my-[14px]" />
                        {/* Phone Number  */}
                        <input {...register("PhoneNumber", 
                         {
                            required: {
                                value: true,
                                message: 'Phone is is Required'
                            }
                        }
                        )} placeholder='Phone Number ' type='text' className="input input-bordered w-full my-[14px]" />
                        {/* profile link */}
                        <input {...register("LinkedInProfileLink",
                        {
                            required: {
                                value: true,
                                message: 'LinkInId is Required'
                            }
                        }
                        )} placeholder='profile link' type='text' className="input input-bordered w-full my-[14px]" 
                        
                        />

                        {/* submit btn  */}
                        <div className="mt-[18px] flex justify-center">
                            <div>
                                <input className="btn btn-accent px-24 text-white mx-[10px]" type="submit" value='UPDATE' />
                            </div>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default MyProfile;