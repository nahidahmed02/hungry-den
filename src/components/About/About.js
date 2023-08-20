import React from 'react';
import AllReviews from './AllReviews';

const About = () => {
    return (
        <section className='pt-24 mb-16'>
            <h2 className='text-orange-500 font-serif text-center text-3xl font-bold mb-4'>Who We Are</h2>

            <p className='text-gray-200 mx-28'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quae sunt mollitia eius ducimus minus? Exercitationem, dolore? Et aliquam ut quibusdam, quia dignissimos impedit quo error reprehenderit sunt natus alias labore id perferendis reiciendis doloremque ratione eveniet explicabo hic dicta, odit facere suscipit eius excepturi quaerat. Minus tenetur possimus laudantium!</p>

            <p className='text-gray-200 font-semibold mx-28 mt-5'>Open: Mon-Fri (9am - 9pm)</p>
            <p className='text-gray-200 font-semibold mx-28 mt-2'>Closing: Sat & Sun</p>
            <p className='text-gray-200 font-semibold mx-28 mt-2'>Location: Poland</p>
            <p className='text-gray-200 font-semibold mx-28 mt-2'>Contact Us:</p>
            <p className='text-gray-200 font-semibold mx-40 mt-2'>Phone: +452311123</p>
            <p className='text-gray-200 font-semibold mx-40 mt-2'>Facebook: fb.afef.com</p>
            <p className='text-gray-200 font-semibold mx-40 mt-2'>Mail: www.aeryj@gmail.com</p>

            <AllReviews></AllReviews>

        </section>
    );
};

export default About;