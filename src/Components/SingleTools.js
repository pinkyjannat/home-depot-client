import React from 'react';

const SingleTools = ({tool}) => {
    const { name, quantity, availableQuantity, minimumQuantity, description, picture, price } = tool;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={picture} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>{description.slice(0, 70)}</p>
            <p>Available Patrs: <span className='font-semibold'> {availableQuantity}</span> unit</p>
            <p>Minimum Order: <span className='font-semibold'>{minimumQuantity}</span> unit</p>
            <h5 className='text-xl'>Price: <span className='text-orange-500'> ${price}/unit</span></h5>
            <div className="card-actions">
                <button className="btn px-8 btn-primary">Purchase</button>
            </div>
        </div>
    </div>
    );
};

export default SingleTools;