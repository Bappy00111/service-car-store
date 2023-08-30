import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    console.log(service)
    const {img,title,price} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-[315px] h-[208px]" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>               
               <div className='flex items-center'>
                <p className='font-bold text-[#FF3811]'>Price: ${price}</p>
                    <Link><FaArrowRight className='text-[#FF3811]'/></Link>
               </div>
            </div>
        </div>
    );
};

export default ServiceCard;