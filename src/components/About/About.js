import React from 'react';
import AllReviews from './AllReviews';

const About = () => {
    return (
        <section className='pt-24 mb-16'>

            <h2 className='border-b-2 border-b-custom-500 mt-8 -mb-20 mx-12 md:mx-24 lg:mx-56'></h2>
            <h2 className='header-font text-4xl w-fit mx-auto px-3 md:px-5 lg:px-5 mt-14 mb-10 text-custom-500 bg-black'>Who We Are</h2>

            <p className='text-gray-200 mx-4 lg:mx-12'>
                Indulge in a delectable culinary experience with Hungry Den, where flavors come alive and cravings find their perfect match. Our restaurant is not just a place to dine; it&rsquo;s a journey of taste, crafted with passion and creativity. At Hungry Den, we believe that good food is a blend of taste, quality, and convenience.
                <br />
                <br />

                With a diverse menu that caters to a wide range of palates, our chefs curate dishes that leave a lasting impression. From savory classics to innovative culinary creations, each bite is a celebration of flavors. And what&rsquo;s more, we bring this gastronomic delight right to your doorstep through our efficient home delivery service.
                <br />
                <br />

                Your cravings, our expertise...
            </p>

            <AllReviews></AllReviews>

        </section>
    );
};

export default About;