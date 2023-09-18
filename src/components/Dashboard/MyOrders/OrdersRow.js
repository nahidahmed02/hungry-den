import React from 'react';

const OrdersRow = ({ info, setModal }) => {
    const { time, paymentType, transactionId, deliveryStatus } = info;

    return (
        <tr className='text-center text-sm font-semibold text-gray-200'>

            <td className='border border-b-gray-200 bg-transparent'>{time}</td>
            <td className='border border-b-gray-200 bg-transparent'>
                {paymentType}
                <br />
                {transactionId && <small>Transaction Id: {transactionId}</small>}
            </td>

            <td className='border border-b-gray-200 bg-transparent'>
                <span
                    htmlFor="ordered_items"
                    onClick={() => setModal(info)}
                    className='underline italic cursor-pointer'
                >
                    View Details
                </span>
            </td>

            <td
                className={`
                    border border-b-gray-200 bg-transparent 
                    ${deliveryStatus === 'Pending' && 'text-yellow-500'} 
                    ${deliveryStatus === 'On Shipment' && 'text-orange-500'} 
                    ${deliveryStatus === 'Completed' && 'italic'}`}
            >
                {deliveryStatus}
            </td>

        </tr>
    );
};

export default OrdersRow;