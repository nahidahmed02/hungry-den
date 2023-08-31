import React from 'react';

const OrdersRow = ({ details, setModal, setDManModal }) => {
    const { time, paymentType, deliveryStatus, dManInfo } = details;

    return (
        <tr className='text-center text-sm font-semibold text-gray-200'>

            <td className='border border-b-gray-200 bg-transparent'>{time}</td>

            <td className='border border-b-gray-200 bg-transparent'>
                <span
                    htmlFor="order_details"
                    onClick={() => setModal(details)}
                    className='text-blue-400 hover:text-blue-300 underline italic cursor-pointer'
                >View Details</span>
            </td>

            <td className='border border-b-gray-200 bg-transparent'>{paymentType}</td>
            <td
                className={`
                border border-b-gray-200 bg-transparent 
                ${deliveryStatus === 'Pending' && 'text-red-500'} 
                ${deliveryStatus === 'On Shipment' && 'text-yellow-400'} 
                ${deliveryStatus === 'Completed' && 'text-green-500'}`}
            >
                {deliveryStatus}
            </td>

            <td className='border border-b-gray-200 bg-transparent py-0'>

                {
                    deliveryStatus === 'Pending' &&
                    <button
                        htmlFor="dMan_modal"
                        onClick={() => setDManModal(details)}
                        className='btn btn-xs border-none bg-orange-500 hover:bg-orange-600'
                    >Assign Order</button>
                }

                {
                    deliveryStatus === 'On Shipment' &&
                    <span
                        className=''
                    >Assigned to <br /> {dManInfo.name}</span>
                }

                {
                    deliveryStatus === 'Completed' &&
                    <span
                        className=''
                    >Delivered by <br /> {dManInfo.name}</span>
                }
            </td>

        </tr>
    );
};

export default OrdersRow;