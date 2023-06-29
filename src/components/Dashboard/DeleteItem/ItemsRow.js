import React from 'react';

const ItemsRow = ({ item, index, setDeleteItemModal }) => {
    const { category, name } = item;

    return (
        <tr className='text-center'>
            <th className='border border-b-black'>{index + 1}.</th>
            <td className='border border-b-black'>{category}</td>
            <td className='border border-b-black'>{name}</td>
            <td className='border border-b-black'><button onClick={() => setDeleteItemModal(item)} htmlFor="delete_item_modal" className='btn btn-xs border-none bg-red-500'>Delete</button></td>
        </tr>
    );
};

export default ItemsRow;