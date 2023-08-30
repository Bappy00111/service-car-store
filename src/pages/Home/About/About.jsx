import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parst from '../../../../src/assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className='md:grid grid-cols-2 gap-16 my-[100px]'>
            <div className='col-span-1 my-5 relative'>
                <img className='w-3/4 rounded-lg shadow-2xl' src={person} alt="" />
                <img className='w-1/2  shadow-2xl absolute right-5 top-1/2 border-8 border-white' src={parst} alt="" />
            </div>
            <div className='col-span-1 my-5 space-y-6 '>
                <h3 className='text-[#FF3811] font-bold'>About Us</h3>
                <h3 className='text-3xl md:text-5xl font-bold'>We are qualified <br/> & of experience <br/> in this field</h3>
                <p className='text-[#737373]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className="btn bg-[#FF3811] text-white">Get More Info</button>
            </div>
            
        </div>
    );
};

export default About;