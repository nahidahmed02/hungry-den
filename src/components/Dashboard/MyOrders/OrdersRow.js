import React from 'react';

const OrdersRow = ({ info, setModal }) => {
    const { time, paymentType, orders, deliveryStatus } = info;

    return (
        <tr className='text-center text-sm font-semibold text-gray-200'>

            <td className='border border-b-gray-200 bg-transparent'>{time}</td>
            <td className='border border-b-gray-200 bg-transparent'>{paymentType}</td>

            <td className='border border-b-gray-200 bg-transparent'>
                <span
                    htmlFor="ordered_items"
                    onClick={() => setModal(true)}
                    className='text-blue-400 hover:text-blue-300 underline italic cursor-pointer'
                >
                    View Details
                </span>
            </td>

            <td className={`border border-b-gray-200 bg-transparent ${deliveryStatus === 'Pending' && 'text-red-500'} ${deliveryStatus === 'On Shipment' && 'text-yellow-400'} ${deliveryStatus === 'Completed' && 'text-green-700'}`}>{deliveryStatus}</td>

        </tr>
    );
};

export default OrdersRow;