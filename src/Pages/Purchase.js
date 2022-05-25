import React from 'react';

const Purchase = ({product}) => {
    const {name,availableQuantity}=product
    return (
        <div>
        <div className='lg:w-[1170px] mx-auto'>
            {/* main  */}
            <div className="card w-full shadow-xl bg-slate-100 p-[15px] lg:p-[25px]">

                <div className='lg:flex'>
                    {/* items info  */}
                    <div key={product?._id} class="card  lg:w-80 my-[35px] mx-auto bg-base-100 shadow-xl border-4 border-[#d2d4e3]">
                        <figure><img src={product?.img} alt="" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                {product?.name}
                                <div class="badge badge-primary">NEW</div>
                            </h2>
                            <div class=" justify-start">
                                <p >{product?.discription}Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p className='my-[6px] font-bold'>Price : {product?.price}</p>
                                <p>Available Quantity : {product?.availqunity}</p>
                                <p> Minimum Order quantity : {product?.minOrderquntity}</p>

                            </div>
                        </div>


                    </div>
                </div>       
            </div>
        </div> 
    </div>          
    );
};

export default Purchase;
