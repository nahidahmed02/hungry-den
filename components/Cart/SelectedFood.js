import Image from 'next/image';
import React from 'react'

const SelectedFood = ({ selectedFood, handleRemoveFromCart, index }) => {
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
        <>
            <tr className='text-center'>
                <th className='border border-b-black'>{index + 1}</th>
                <td className='border border-b-black'><Image src={photo} alt='' width={60} height={60} className='mx-auto' /></td>
                <td className='border border-b-black'>{category}</td>
                <td className='border border-b-black'>{name}</td>
                <td className='border border-b-black'>${price} + {vat}% vat</td>
                <td className='border border-b-black'>{quantity}</td>
                <td className='border border-b-black'>{total}</td>
                <td className='border border-b-black'>{<button onClick={() => handleRemoveFromCart(id)} className='btn btn-xs border-none bg-red-600'>Remove</button>}</td>
            </tr>

        </>
    )
}

export default SelectedFood