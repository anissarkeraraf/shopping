import React from 'react';

const Singleprodct = ({product}) => {
    console.log(product)
    return (
        <div>
            <div className="card">
                <img className='card-img' src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
                <h1 className='text-4xl pb-3'>Teser Bag</h1>
                <p className='pb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, quas!</p>
                <div className='card-footer pb-3'>
                    <h1>520 $</h1>
                    <button className='btn bg-gray-200 p-3'>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Singleprodct;