import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const onSubmit = event => {
        // console.log(data)
        const service = {
            name: event?.name,
            minimumQuantity: event?.minimumQuantity,
            availableQuantity: event?.availableQuantity,
            description: event?.description,
            picture: event?.picture,
            price: event?.price,
        }
        // console.log(data);



        // /order
        fetch('https://sleepy-thicket-67798.herokuapp.com/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(service) // body data type must match "Content-Type" header
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    reset()
                    toast.success('Order is taken')
                }
            })
    }

    return (

        <div className='flex h-screen justify-center items-center mt-14'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)} className='w-96mx-auto'>


                        {/* product name  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Product Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true

                                    }
                                })}
                            />

                        </div>
                        {/* minimumQuantity */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Minimum Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Minimum Quantity"
                                className="input input-bordered w-full max-w-xs"
                                {...register("minimumQuantity", {
                                    required: {
                                        value: true

                                    }
                                })}
                            />

                        </div>


                        {/* price */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                className="input input-bordered w-full max-w-xs"
                                {...register("price", {
                                    required: {
                                        value: true

                                    }
                                })}
                            />

                        </div>


                        {/* availableQuantity */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Available Quantity"
                                className="input input-bordered w-full max-w-xs"
                                {...register("availableQuantity", {
                                    required: {
                                        value: true

                                    }
                                })}
                            />

                        </div>
                        {/* description  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Description"
                                className="input input-bordered w-full max-w-xs"
                                {...register("description", {
                                    required: {
                                        value: true

                                    }
                                })}
                            />

                        </div>
                        {/* picture  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input
                                type="text"
                                placeholder=" please paste the image url here"
                                className="input input-bordered w-full max-w-xs"
                                {...register("picture", {
                                    required: {
                                        value: true

                                    }
                                })}
                            />

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



    );
};

export default AddProduct;