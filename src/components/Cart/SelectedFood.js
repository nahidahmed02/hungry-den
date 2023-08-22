import Image from 'next/image';
import React from 'react'

const SelectedFood = ({ selectedFood, handleRemoveFromCart, index }) => {
    const { _id,
        category,
        name,
        quantity,
        vat,
        price,
        total,
        photo } = selectedFood;



    return (
        <tr className='text-center text-gray-200'>
            <td className='border border-b-gray-200 bg-transparent'>{index + 1}.</td>
            <td className='border border-b-gray-200 bg-transparent'><Image src={photo} alt='' width={60} height={60} className='mx-auto h-10' /></td>
            <td className='border border-b-gray-200 bg-transparent'>{category}</td>
            <td className='border border-b-gray-200 bg-transparent'>{name}</td>
            <td className='border border-b-gray-200 bg-transparent'>${price} + {vat}% vat</td>
            <td className='border border-b-gray-200 bg-transparent'>{quantity}</td>
            <td className='border border-b-gray-200 bg-transparent'>${total}</td>
            <td className='border border-b-gray-200 bg-transparent'>{<button onClick={() => handleRemoveFromCart(_id)} className='btn btn-xs border bg-red-600 hover:bg-transparent hover:border-red-500'>Remove</button>}</td>
        </tr>
    )
}

export default SelectedFood