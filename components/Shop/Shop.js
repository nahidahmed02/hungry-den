import React from 'react'
import Category from './Category'
import Foods from './Foods'

const Shop = () => {
    return (
        <section>
            <h1 className='text-center text-2xl font-bold mt-4 mb-2 text-green-600'>What would you like to order?</h1>
            <p className='text-center font-bold mb-1'>Filter by Category</p>
            <hr />

            <Category />
            <Foods></Foods>

        </section>
    )
}

export default Shop