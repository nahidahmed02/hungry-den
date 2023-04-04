import React from 'react'

const SelectedFood = ({ selectedFood, handleRemoveFromCart }) => {
    const { category, name, price, vat, photo } = selectedFood;


    return (
        <section className='flex'>
            <h1 className='mr-4'>{name}</h1>
            <h1 className='mr-4'>{price}</h1>
            <h1 className='mr-4'>{vat}</h1>
            <button onClick={handleRemoveFromCart} className='btn btn-sm ml-6'>Remove</button>
        </section>
    )
}

export default SelectedFood