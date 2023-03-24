import { Context } from '@/context/Context'
import React, { useContext } from 'react'

const Category = () => {
    const { foods } = useContext(Context)
    console.log(foods);

    return (
        <section className="navbar">
            <ul className="menu menu-horizontal px-1 mx-auto">
                <li className='cursor-pointer bg-gray-600 text-white px-2 py-1 mx-2 mb-2 lg:mb-0 rounded'>Meat ( Halal )</li>
                <li className='cursor-pointer bg-gray-600 text-white px-2 py-1 mx-2 mb-2 lg:mb-0 rounded'>Meat</li>
                <li className='cursor-pointer bg-gray-600 text-white px-2 py-1 mx-2 mb-2 lg:mb-0 rounded'>Beef</li>
                <li className='cursor-pointer bg-gray-600 text-white px-2 py-1 mx-2 mb-2 lg:mb-0 rounded'>Fish</li>
                <li className='cursor-pointer bg-gray-600 text-white px-2 py-1 mx-2 mb-2 lg:mb-0 rounded'>Soft Drinks</li>
                <li className='cursor-pointer bg-gray-600 text-white px-2 py-1 mx-2 mb-2 lg:mb-0 rounded'>Snacks</li>

            </ul>
        </section>)
}

export default Category