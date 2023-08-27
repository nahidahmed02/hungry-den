import React from 'react';

const OrdersRow = ({ details, setModal }) => {
    const { time, paymentType, deliveryStatus } = details;
    console.log(details);

    return (
        <tr className='text-center text-sm font-semibold text-gray-200'>

            <td className='border border-b-gray-200 bg-transparent'>{time}</td>

            <td className='border border-b-gray-200 bg-transparent'>
                <span
                    htmlFor="order_details"
                    onClick={() => setModal(details)}
                    className='text-blue-400 hover:text-blue-300 underline italic cursor-pointer'
                >
                    View Details
                </span>
            </td>

            <td className='border border-b-gray-200 bg-transparent'>{paymentType}</td>
            <td className='border border-b-gray-200 bg-transparent text-red-500'>{deliveryStatus}</td>
            <td className='border border-b-gray-200 bg-transparent'><button className='btn btn-xs border-none bg-orange-500 hover:bg-orange-600'>Assign Order</button></td>

        </tr>
    );
};

export default OrdersRow;