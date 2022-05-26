import React from 'react';

import { MdOutlineLocalShipping } from 'react-icons/md';
import { FaPeopleArrows } from 'react-icons/fa';
import { FaWarehouse } from 'react-icons/fa';

const Facilities = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <div className=" text-center fs-3">
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><MdOutlineLocalShipping  size={"70px"}></MdOutlineLocalShipping></figure>
                <div class="card-body">
                    <h2 class="card-title">World Wide Shippping</h2>
                    <p>We are shipping our product all around the world.</p>
                    
                </div>
            </div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><FaWarehouse size={"70px"}></FaWarehouse></figure>
                <div class="card-body">
                    <h2 class="card-title">We Stocks more than over!</h2>
                    <p>We usually stocks our product all aronud the year !! </p>
                    
                </div>
            </div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure className=''><FaPeopleArrows size={"70px"}></FaPeopleArrows></figure>
                <div class="card-body">
                    <h2 class="card-title">Shipping available !!</h2>
                    <p>We shipp our products when wholesale option in available!</p>
                    
                </div>
            </div>
            </div>
        </div>

    );
};

export default Facilities;