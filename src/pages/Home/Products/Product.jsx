import React from 'react';

const Product = ({ product }) => {
    console.log(product)
    const { image,titel,price } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl w-[200px] h-[200px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-2xl">{titel}</h2>
                <p className='font-bold text-[#FF3811]'>$ {price}</p>
                <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;