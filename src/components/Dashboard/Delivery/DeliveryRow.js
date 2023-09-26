import React from 'react';

const DeliveryRow = ({ info, setModal, setConfirmModal }) => {
    const { paymentType, deliveryStatus } = info;

    return (
        <tr className='text-center text-sm font-semibold text-gray-200'>

            <td className='border border-x-0 border-custom-500 bg-transparent'>
                <span
                    htmlFor="delivery_details"
                    onClick={() => setModal(info)}
                    className='text-custom-500 italic cursor-pointer'
                >View Details</span>
            </td>

            <td className='border border-x-0 border-custom-500 bg-transparent'>{paymentType}</td>

            <td className='border border-x-0 border-custom-500 bg-transparent'>
                {deliveryStatus}
            </td>

            <td className='border border-x-0 border-custom-500 bg-transparent py-0'>
                {
                    deliveryStatus === 'On Shipment' &&
                    <button
                        htmlFor='confirm_modal'
                        onClick={() => setConfirmModal(info)}
                        className='btn btn-xs rounded-md bg-custom-500 hover:bg-transparent hover:text-custom-500 hover:border-custom-500'
                    >Mark Delivered</button>
                }

                {
                    deliveryStatus === 'Completed' &&
                    <span className='font-semibold'>Delivered</span>
                }
            </td>

        </tr>
    );
};

export default DeliveryRow;