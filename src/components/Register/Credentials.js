import React, { useState } from 'react';

const Credentials = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="collapse collapse-arrow mt-5 mx-9 md:mx-16 lg:mx-44 bg-black rounded-lg border border-custom-500">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-center text-custom-500">
                Admin & Delivery Man Credentials
            </div>
            <div className="collapse-content flex justify-between md:justify-around lg:justify-around text-gray-200">
                <div>
                    <h2 className='font-semibold text-sm md:text-base lg:text-base text-custom-500'>Admin</h2>
                    <p className='text-xs md:text-sm lg:text-sm'>Email: admin@gmail.com</p>
                    <p className='text-xs md:text-sm lg:text-sm'>Password: 123456</p>
                </div>

                <div>
                    <h2 className='font-semibold text-sm md:text-base lg:text-base text-custom-500'>Delivery Man</h2>
                    <p className='text-xs md:text-sm lg:text-sm'>Email: dman@gmail.com</p>
                    <p className='text-xs md:text-sm lg:text-sm'>Password: 654321</p>
                </div>
            </div>
        </div>
    );
};

export default Credentials;