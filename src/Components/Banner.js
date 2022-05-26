
import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen"  style={{backgroundImage: "url(https://wallpapertag.com/wallpaper/full/1/a/1/350829-widescreen-website-background-1920x1080-windows-xp.jpg)"}}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://etimg.etb2bimg.com/photo/87997497.cms" alt="manufactural_pic" className="max-w-sm " />
                <div>
                    <h1 className="text-5xl font-bold">Build your business with Us </h1>
                    <p className="py-6">At Home depot and Co, we recognize the inherent diversity in the industrial manufacturing industry, so our team provides tailored assistance in helping all players create value for their businesses and achieve success..</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;