import React from 'react';

const OrdersRow = ({ details, setModal, setDManModal }) => {
    const { time, paymentType, transactionId, deliveryStatus, dManInfo } = details;

    return (
        <tr className='text-center text-sm font-semibold text-gray-200'>

            <td className='border border-x-0 border-custom-500 bg-transparent'>{time}</td>

            <td className='border border-x-0 border-custom-500 bg-transparent'>
                <span
                    htmlFor="order_details"
                    onClick={() => setModal(details)}
                    className='text-custom-500 italic cursor-pointer'
                >View Details</span>
            </td>

            <td className='border border-x-0 border-custom-500 bg-transparent'>
                {paymentType}
                <br />
                {transactionId && <small>Transaction Id: {transactionId}</small>}
            </td>
            <td
                className='border border-x-0 border-custom-500 bg-transparent'>
                {deliveryStatus}
            </td>

            <td className='border border-x-0 border-custom-500 bg-transparent py-0'>

                {
                    deliveryStatus === 'Pending' &&
                    <button
                        htmlFor="dMan_modal"
                        onClick={() => setDManModal(details)}
                        className='btn btn-xs rounded-md bg-custom-500 hover:bg-transparent hover:text-custom-500 hover:border-custom-500'
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