import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setServices] = useState([]);
    
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className='text-center space-y-3'>
                <h4 className='text-[#FF3811] font-bold'>Service</h4>
                <h2 className='text-3xl md:text-5xl font-bold'>Our Service Area</h2>
                <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[50px] gap-5'>
                {
                    services.map(service => <ServiceCard
                    service={service}
                    key={service._id}
                    ></ServiceCard> )
                }
            </div>
            <div className='md:text-center mt-[50px] mb-[50px]'>
            <button className="btn btn-outline  text-[#FF3811] ">More Services</button>
            </div>
        </div>
    );
};

export default Services;