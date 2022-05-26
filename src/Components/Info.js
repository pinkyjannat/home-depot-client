import React from 'react';
import opening from '../images/opening.jpg'
import contact from '../images/contact.jpg';
import location from '../images/location.webp';
import InfoCard from './InfoCard';

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" img={opening} cardInfo={"we are open from monday to friday from morning 9 am to 9 pm"}></InfoCard>
            <InfoCard cardTitle="Our Locations" bgClass="bg-gradient-to-r from-secondary to-primary" img={location} cardInfo={"we are located at level 4,kamal ataturk building,Dhaka 1204"}></InfoCard>
            <InfoCard cardTitle="Contact Us" bgClass="bg-gradient-to-r from-secondary to-primary"img={contact}cardInfo={"please contact us @ 019123467 and our email is homedepot@gmail.ca"} ></InfoCard>
        </div>
    );
};

export default Info;