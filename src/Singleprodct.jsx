import React from 'react';

const Singleprodct = ({product, handleCart}) => {
    // console.log(handleCart)
    return (
        <div>
            <div className="card">
                <img className='card-img' src={product.image} alt="" />
                <h1 className='text-4xl pb-3'>{product.title.slice(0, 10)}</h1>
                <p className='pb-3'>{product.description.slice(0, 35)}</p>
                <div className='card-footer pb-3'>
                    <h1>{product.price}$</h1>
                    <button onClick={(e)=>handleCart(product)} className='btn bg-gray-200 p-3'>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Singleprodct;