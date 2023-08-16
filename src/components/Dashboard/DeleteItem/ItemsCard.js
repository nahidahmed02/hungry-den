import React from 'react';

const ItemsCard = ({ item, setDeleteItemModal }) => {
    const { category, name } = item;

    return (
        <div className="card w-auto lg:w-44 bg-base-100 shadow-2xl border border-orange-400">

            <div className="mt-2 mb-3 text-center">
                <p className='font-semibold text-sm'>Category: {category}</p>
                <p className='font-semibold text-sm'>Item: {name}</p>

                <span
                    onClick={() => setDeleteItemModal(item)}
                    htmlFor="delete_item_modal"
                    className='cursor-pointer btn-xs font-semibold text-white rounded-lg bg-red-500'
                >
                    Delete
                </span>
            </div>

        </div>


    );
};

export default ItemsCard;