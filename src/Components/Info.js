import React from 'react';


import InfoCard from './InfoCard';

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" ></InfoCard>
            <InfoCard cardTitle="Our Locations" bgClass="bg-gradient-to-r from-secondary to-primary"></InfoCard>
            <InfoCard cardTitle="Contact Us" bgClass="bg-gradient-to-r from-secondary to-primary" ></InfoCard>
        </div>
    );
};

export default Info;