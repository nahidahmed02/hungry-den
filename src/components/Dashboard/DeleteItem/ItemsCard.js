import React from 'react';

const ItemsCard = ({ item, setDeleteItemModal }) => {
    const { category, name } = item;

    return (
        <div className="card w-auto lg:w-44 shadow shadow-gray-200 border border-custom-500 bg-transparent text-gray-200">

            <div className="mt-2 mb-3 text-center">
                <p className='font-semibold text-sm'>Category: {category}</p>
                <p className='font-semibold text-sm'>Item: {name}</p>

                <button
                    onClick={() => setDeleteItemModal(item)}
                    htmlFor="delete_item_modal"
                    className='btn btn-xs rounded-md mt-1.5 hover:px-4 text-gray-200 hover:text-custom-500 hover:border-custom-500 bg-custom-500 hover:bg-transparent shadow shadow-gray-200'
                >
                    Delete
                </button>
            </div>

        </div>


    );
};

export default ItemsCard;