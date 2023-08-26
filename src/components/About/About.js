import React from 'react';
import AllReviews from './AllReviews';

const About = () => {
    return (
        <section className='pt-24 mb-16'>
            <h2 className='text-orange-500 font-serif text-center text-3xl font-bold mb-4'>Who We Are</h2>

            <p className='text-gray-200 mx-6 lg:mx-12'>
                Indulge in a delectable culinary experience with Hungry Den, where flavors come alive and cravings find their perfect match. Our restaurant is not just a place to dine; it&rsquo;s a journey of taste, crafted with passion and creativity. At Hungry Den, we believe that good food is a blend of taste, quality, and convenience.
                <br />
                <br />

                With a diverse menu that caters to a wide range of palates, our chefs curate dishes that leave a lasting impression. From savory classics to innovative culinary creations, each bite is a celebration of flavors. And what&rsquo;s more, we bring this gastronomic delight right to your doorstep through our efficient home delivery service.
                <br />
                <br />

                Hungry Den isn&rsquo;t just about dining; it&rsquo;s about savoring every moment and every bite. So, whether you&rsquo;re looking to indulge in a cozy dinner at home or treat your taste buds to something extraordinary, let Hungry Den be your destination of choice. Your cravings, our expertise... a perfect match made in food heaven.
            </p>

            <p className='text-gray-200 font-semibold mx-6 lg:mx-20 mt-5'>Open: Mon - Fri (9 am - 11:30 pm)</p>
            <p className='text-gray-200 font-semibold mx-6 lg:mx-20 mt-2'>Closing: Sat & Sun</p>
            <p className='text-gray-200 font-semibold mx-6 lg:mx-20 mt-2'>Location: Poland</p>
            <p className='text-gray-200 font-semibold mx-6 lg:mx-20 mt-2'>Contact Us:</p>
            <p className='text-gray-200 font-semibold mx-20 lg:mx-32 mt-2'>Phone: +452311123</p>
            <p className='text-gray-200 font-semibold mx-20 lg:mx-32 mt-2'>Facebook: fb.hungryden.com</p>
            <p className='text-gray-200 font-semibold mx-20 lg:mx-32 mt-2'>Mail: www.hungryden@gmail.com</p>

            <AllReviews></AllReviews>

        </section>
    );
};

export default About;