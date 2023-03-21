import React from 'react'

const Shop = () => {
    return (
        <section>
            <h1 className='text-center text-2xl font-bold my-4 text-green-600'>What would you like to order?</h1>
            <p className='text-center font-bold '>Filter by Category</p>

            <div className="navbar">

                <ul className="menu menu-horizontal px-1 mx-auto">
                    <li className='cursor-pointer bg-gray-600 text-white px-2 py-1 mx-2 rounded'>Meat ( Halal )</li>
                    <li className='cursor-pointer bg-gray-600 text-white px-2 py-1 mx-2 rounded'>Meat</li>
                    <li className='cursor-pointer bg-gray-600 text-white px-2 py-1 mx-2 rounded'>Beef</li>
                    <li className='cursor-pointer bg-gray-600 text-white px-2 py-1 mx-2 rounded'>Fish</li>
                    <li className='cursor-pointer bg-gray-600 text-white px-2 py-1 mx-2 rounded'>Soft Drinks</li>
                    <li className='cursor-pointer bg-gray-600 text-white px-2 py-1 mx-2 rounded'>Snacks</li>

                </ul>
            </div>
        </section>
    )
}

export default Shop