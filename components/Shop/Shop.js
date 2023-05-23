import React from 'react'
import Category from './Category'
import Foods from './Foods'
import Pagination from './Pagination'
import SearchBar from './SearchBar';

const Shop = () => {

    return (
        <section className='mt-20'>

            <h1 className='text-center text-2xl font-bold mt-4 mb-2 text-green-600'>What would you like to order?</h1>

            {/* <SearchBar></SearchBar> */}

            <Category />

            <Foods />

            <Pagination />

        </section>
    )
}

export default Shop