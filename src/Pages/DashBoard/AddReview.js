import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const AddReview = () => {
    
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    // react form 
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        fetch('http://localhost:5000/review', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
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
                if (data.acknowledged) {
                    reset()
                   toast.success('Thanks for you Review')

                }
            })
    }
    return (
        <div className=' w-1/2 mx-auto mt-12'>
            <div className='p-[40px] shadow-xl border-4 border-x-yellow-200 bg-amber-50 rounded-xl'>
                <h2 class=" text-4xl text-center text-teal-700 font-bold my-2">Add Your Feedback</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* name */}
                    <input {...register("Name")} type='text' value={user?.displayName} className="input input-bordered w-full my-[14px]" />
                    {/* email */}
                    <input {...register("email")} type='text' value={user?.email} className="input input-bordered w-full my-[14px]" />
                    {/* discripition */}
                    <textarea class="textarea w-full textarea-info"  {...register("description")} required placeholder="Make a Comment Here"></textarea>
                    {/* raing */}
                    <select class="select select-info w-full my-[14px]"{...register("rating")}>
                        <option selected disabled>Rating</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    {/* submit btn  */}
                    <div className="mt-[18px] flex justify-center">
                        <div >
                            <input className="btn px-24 border-0 bg-cyan-600 text-white" type="submit" value='SUBMIT' />
                        </div>

                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddReview;