import React from 'react';

const ContactUs = () => {
    return (
        <section className='contact-bg mt-14 md:mt-16 lg:mt-24 -mb-5 md:-mb-72 lg:-mb-0'>

            <div className='text-gray-200 text-center pt-4 md:pt-6 lg:pt-10'>
                <h2 className='font-semibold md:text-xl lg:text-xl w-fit px-2 ml-44 md:mx-auto lg:mx-auto'>Contact Us</h2>

                <p className='text-xs md:text-sm font-semibold mt-0.5 md:mt-1 lg:mt-1 w-fit px-2 ml-44 md:mx-auto lg:mx-auto'>Phone: +48 123 456 789</p>
                <p className='text-xs md:text-sm font-semibold mt-0.5 md:mt-1 lg:mt-1 w-fit px-2 ml-44 md:mx-auto lg:mx-auto'>Email: www.hungryden@gmail.com</p>
                <p className='text-xs md:text-sm font-semibold mt-0.5 md:mt-1 lg:mt-1 w-fit px-2 ml-44 md:mx-auto lg:mx-auto'>Address: Nowa 5, Warsaw, Poland</p>

            </div>

        </section>
    );
};

export default ContactUs;