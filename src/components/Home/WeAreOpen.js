import Image from 'next/image';
import React from 'react';
import open from '../../../public/images/we_are_open.jpg';

const WeAreOpen = () => {

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');

        if (contactSection) {
            const yOffset = contactSection.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2;
            window.scrollTo({ top: yOffset, behavior: 'smooth' });
        }
    }

    return (
        <section>

            <h2 className='border-b-2 border-b-gray-200 mt-24 -mb-20 mx-9 md:mx-24 lg:mx-72'></h2>
            <h2 className='header-font text-4xl w-fit mx-auto px-3 md:px-5 lg:px-5 mt-14 mb-10 text-gray-200 bg-black'>We Are Open</h2>

            <div className='flex flex-col lg:flex-row md:items-center mb-14 lg:mb-10'>

                <div className='border border-yellow-300 mx-12 lg:mx-0 lg:ml-44'>
                    <Image
                        src={open}
                        width={375}
                        height={375}
                        alt='WeAreOpen'
                        className='mt-3 ml-3 -mb-3'
                    />
                </div>

                <div className='lg:w-1/2 mx-4 md:mx-14 lg:mx-0 mt-10 lg:pl-28 lg:mr-40 text-gray-200 '>
                    <div>

                        <h2 className='font-semibold text-xl mb-1.5'>Opening Hours:</h2>

                        <p className='ml-8 mb-0.5'>- Monday - Friday: 11:00 AM - 10:00 PM</p>

                        <p className='ml-8 mb-0.5'>- Saturday: 11:00 AM - 11:00 PM</p>

                        <p className='ml-8 mb-0.5'>- Sunday: 12:00 PM - 9:00 PM</p>

                    </div>
                    <div className='text-sm mt-8'>
                        * Closure times may vary, particularly on holidays and special events. Please visit our website or <a onClick={scrollToContact} className='cursor-pointer text-blue-400 hover:text-blue-300'>contact us </a> for the latest updates. We&rsquo;re excited to serve you!
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WeAreOpen;