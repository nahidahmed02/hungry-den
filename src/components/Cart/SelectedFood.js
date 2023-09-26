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
        <tr className='text-center text-sm font-semibold text-gray-200'>

            <td className='border border-x-0 border-custom-500 bg-transparent'>{index + 1}.</td>

            <td className='border border-x-0 border-custom-500 bg-transparent'>
                <Image src={photo} alt='food' width={60} height={60} className='mx-auto h-10' />
            </td>

            <td className='border border-x-0 border-custom-500 bg-transparent'>{category}</td>
            <td className='border border-x-0 border-custom-500 bg-transparent'>{name}</td>
            <td className='border border-x-0 border-custom-500 bg-transparent'>${price} + {vat}% vat</td>
            <td className='border border-x-0 border-custom-500 bg-transparent'>{quantity}</td>
            <td className='border border-x-0 border-custom-500 bg-transparent'>${total}</td>

            <td className='border border-x-0 border-custom-500 bg-transparent'>
                <button
                    onClick={() => handleRemoveFromCart(_id)}
                    className='btn btn-xs rounded-md hover:text-custom-500 border border-custom-500 hover:border-custom-500 shadow shadow-gray-200 bg-custom-500 hover:bg-transparent'
                >Remove</button>
            </td>

        </tr>
    )
}

export default SelectedFood