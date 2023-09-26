import React from 'react';
import Category from './Category';
import Foods from './Foods';
import Pagination from './Pagination';
import Banner from './Banner';
import Events from './Events';
import WeAreOpen from './WeAreOpen';
import Subscribe from './Subscribe';
import ContactUs from './ContactUs';
import Gallery from './Gallery';

const HomePage = () => {

    return (
        <section className='pt-20'>

            <Banner />

            <h2 className='border-b-2 border-b-custom-500 mt-16 -mb-20 mx-9 md:mx-24 lg:mx-72'></h2>
            <h2 className='header-font text-4xl w-fit mx-auto px-3 md:px-5 lg:px-5 mt-14 mb-8 text-custom-500 bg-black'>Checkout Our Menu</h2>

            <Category />

            <Foods />

            <Pagination />

            <WeAreOpen />

            <Events />

            <ContactUs />

            <Gallery />

            <Subscribe />

        </section>
    )
}

export default HomePage