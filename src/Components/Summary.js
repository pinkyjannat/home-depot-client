import React from 'react';

const Summary = () => {
    return (
        <div className='mt-24 bg-gray-300 py-10 px-4 rounded-lg'>
            <h2 className='text-primary text-center text-5xl font-bold'>We Served in the Whole World</h2>
            <h3 className='text-center text-2xl mt-2 font-mono text-gray-800'>Our All customer are satisfied</h3>
            <div className="divider"></div>
            <div className="stats stats-vertical lg:stats-horizontal bg-primary mx-auto text-center mt-14 text-primary-content flex justify-center md:stats-horizontal shadow">

                <div className="stat">
                    <div className="stat-figure text-secondary mr-24">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://api.lorem.space/image/face?w=128&h=128" alt='' />
                            </div>
                        </div>
                    </div>

                    <div className="stat-title">we served</div>
                    <div className="stat-value">31K+</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary mr-24">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="stat-title">Our Annual Revenue</div>
                    <div className="stat-value">200M+</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary mr-24">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Reviews</div>
                    <div className="stat-value">300+</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default Summary;