import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../firebase.init';
import Loading from './Shared/Loading';


const ShowReview = () => {
    const [user, loading] = useAuthState(auth);
    const { data: ratings, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/review').then(res => res.json()))

    if (isLoading || loading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <div className='grid lg:grid-cols-3  md:grid-cols-3  gap-8 grid-cols-3'>
                {
                    ratings.map(rating => <div class="card w-96 bg-neutral text-neutral-content">
                        <div class="card-body items-center text-center">
                            <div class="avatar">
                                <div class="w-24 rounded-full">
                                    <img src="https://api.lorem.space/image/face?hash=92310" />
                                </div>
                            </div>
                            <h2 class="card-title">{rating.Name}</h2>
                            <p>{rating.description}</p>
                            <div class="card-actions justify-start">
                                <p>Rating: {rating.rating}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ShowReview;