import React from 'react';
import { FaCalendar, FaPhoneAlt,FaLocationArrow } from 'react-icons/fa';

const Contact = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content mb-[100px]">
            <div className='flex gap-3'>
                <FaCalendar className='h-10 w-10 text-white' />
                <div>
                    <p className='font-bold'>We are open monday-friday</p>
                    <h2 className='text-xl font-bold'>7:00 am - 9:00 pm</h2>
                </div>
            </div>
            <div>
                <div className='flex gap-3'>
                    <FaPhoneAlt className='h-10 w-10 text-white' />
                    <div>
                        <p className='font-bold'>Have a question?</p>
                        <h2 className='text-xl font-bold'>+2546 251 2658</h2>
                    </div>
                </div>

            </div>
            <div>
                <div className='flex gap-3 items-center'>
                    <FaLocationArrow/>
                    <div>
                        <p>Need a repair? our address</p>
                        <h2>Liza Street, New York</h2>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;