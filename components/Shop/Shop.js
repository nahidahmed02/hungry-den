import React from 'react'
import Category from './Category'
import Foods from './Foods'

const Shop = () => {
    return (
        <section>
            <h1 className='text-center text-2xl font-bold my-4 text-green-600'>What would you like to order?</h1>
            <p className='text-center font-bold mb-1'>Filter by Category</p>
            <hr />

            <Category />
            <Foods></Foods>

        </section>
    )
}

export default Shop