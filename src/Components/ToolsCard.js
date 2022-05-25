import React, { useEffect, useState } from 'react';
import SingleTools from './SingleTools';

const ToolsCard = () => {
    const[tools, setTools] = useState([])
    useEffect(()=>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data=>setTools(data))
    }, [])
    return (
        <div className='py-20 mx-auto '>
              <div className="divider my-20"></div> 

            <h2 className='text-5xl font-semiBold text-center'>We Manufacture All Kind of Vehicle parts {tools.length}</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 sm:mx-auto gap-8 mx-auto'>
                {
                    tools.map(tool=><SingleTools tool={tool}></SingleTools>)
                }
            </div>
            <div className="divider mt-28"></div> 

            
        </div>
    );
};

export default ToolsCard;