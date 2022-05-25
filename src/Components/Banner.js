
import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen style={{backgroundImage:`url(${https://i.ibb.co/VxdVSD3/julie-molliver-Z3v-Fp7sz-CAY-unsplash.jpg})`}}">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/VxdVSD3/julie-molliver-Z3v-Fp7sz-CAY-unsplash.jpg" className="max-w-sm " />
                <div>
                    <h1 className="text-5xl font-bold">Build your business with Us </h1>
                    <p className="py-6">At Home depot and Co, we recognize the inherent diversity in the industrial manufacturing industry, so our team provides tailored assistance in helping all players create value for their businesses and achieve success..</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;