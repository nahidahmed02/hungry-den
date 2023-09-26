import React from 'react';

const OrdersRow = ({ info, setModal }) => {
    const { time, paymentType, transactionId, deliveryStatus } = info;

    return (
        <tr className='text-center text-sm font-semibold text-gray-200'>

            <td className='border border-x-0 border-custom-500 bg-transparent'>{time}</td>
            <td className='border border-x-0 border-custom-500 bg-transparent'>
                {paymentType}
                <br />
                {transactionId && <small>Transaction Id: {transactionId}</small>}
            </td>

            <td className='border border-x-0 border-custom-500 bg-transparent'>
                <span
                    htmlFor="ordered_items"
                    onClick={() => setModal(info)}
                    className='italic cursor-pointer text-custom-500'
                >
                    View Details
                </span>
            </td>

            <td className='border border-x-0 border-custom-500 bg-transparent'>
                {deliveryStatus}
            </td>

        </tr>
    );
};

export default OrdersRow;