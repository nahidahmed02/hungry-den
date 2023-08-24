import React from 'react';

const ItemsCard = ({ item, setDeleteItemModal }) => {
    const { category, name } = item;

    return (
        <div className="card w-auto lg:w-44 shadow shadow-white border border-yellow-400 bg-transparent text-gray-200">

            <div className="mt-2 mb-3 text-center">
                <p className='font-semibold text-sm'>Category: {category}</p>
                <p className='font-semibold text-sm'>Item: {name}</p>

                <button
                    onClick={() => setDeleteItemModal(item)}
                    htmlFor="delete_item_modal"
                    className='btn-xs font-semibold mt-1.5 hover:px-4 text-white rounded-lg bg-red-500 hover:bg-red-600 shadow shadow-white'
                >
                    Delete
                </button>
            </div>

        </div>


    );
};

export default ItemsCard;