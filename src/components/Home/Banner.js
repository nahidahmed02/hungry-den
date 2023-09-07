import Image from 'next/image';
import React from 'react';
import gif from '../../../public/images/output-onlinegiftools.gif'

const Banner = () => {
    return (
        <section className='flex flex-col lg:flex-row md:items-center lg:justify-around py-12 mb-14 lg:mb-10'>

            <div className='order-2 md:order-2 lg:order-1 mx-auto lg:mx-0'>
                <h2 className='text-6xl font-extrabold text-gray-200'>Hungry! <br /> Then... <br /><span className='text-orange-500'> Hungry Den</span></h2>
            </div>

            <div className='order-1 md:order-1 lg:order-2 -mt-20 md:-mt-0 lg:-mt-0 p-16 md:p-20 lg:p-0'>
                <Image src={gif} width={375} height={375} alt='gif' />
            </div>

        </section>
    );
};

export default Banner;