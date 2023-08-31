import React from 'react';

const DeliveryRow = ({ info, setModal, setConfirmModal }) => {
    const { paymentType, deliveryStatus } = info;

    return (
        <tr className='text-center text-sm font-semibold text-gray-200'>

            <td className='border border-b-gray-200 bg-transparent'>
                <span
                    htmlFor="delivery_details"
                    onClick={() => setModal(info)}
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
                    deliveryStatus === 'On Shipment' &&
                    <button
                        htmlFor='confirm_modal'
                        onClick={() => setConfirmModal(info)}
                        className='btn btn-xs border-none bg-orange-500 hover:bg-orange-600'
                    >Mark Delivered</button>
                }

                {
                    deliveryStatus === 'Completed' &&
                    <span
                        className=''
                    >Delivered</span>
                }
            </td>

        </tr>
    );
};

export default DeliveryRow;