import React from 'react'

const SelectedFood = ({ selectedFood, handleRemoveFromCart }) => {
    const { id,
        category,
        name,
        quantity,
        vat,
        vatCount,
        price,
        total,
        photo } = selectedFood;



    return (
        <section className='flex'>
            <h1 className='mr-4'>Name: {name}</h1>
            <h1 className='mr-4'>Price: {price}</h1>
            <h1 className='mr-4'>VAT {vat}% : {vatCount}</h1>
            <h1 className='mr-4'>Quantuty: {quantity}</h1>
            <button onClick={() => handleRemoveFromCart(id)} className='btn btn-sm ml-6'>Remove</button>
        </section>
    )
}

export default SelectedFood