import React from 'react';
import { toast } from 'react-hot-toast';

const ConfirmModal = ({ confirmModal, setConfirmModal, refetch }) => {

    const { _id, paymentType } = confirmModal;
    console.log('id', _id);

    const handleConfirmation = () => {
        fetch(`https://hungry-den-server.onrender.com/order/completed/${_id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setConfirmModal(false)
                toast.success('Delivery Completed')
                refetch()
            })
    }

    return (
        <section>
            <input type="checkbox" id="confirm_modal" className="modal-toggle" defaultChecked={true} />

            <div className="modal">
                <div className="modal-box bg-black border border-yellow-500 shadow shadow-gray-200">

                    <h2 className='text-orange-500 font-bold text-xl text-center mb-2.5'>Are you sure?</h2>
                    {
                        paymentType === 'Cash on Delivery'
                        &&
                        <h2 className='text-orange-500 font-bold text-sm text-center mb-2.5'>
                            It&rsquo;s a Cash on Delivery. Do you get the cash from your client?
                        </h2>
                    }

                    {/* --------------------- BUTTONS --------------------- */}

                    <div className='text-center'>

                        <button
                            onClick={() => setConfirmModal(false)}
                            className='btn btn-xs mx-2 mt-2 hover:px-4 bg-red-500 hover:bg-red-600 shadow shadow-gray-200'
                        >No</button>

                        <button
                            onClick={handleConfirmation}
                            className='btn btn-xs mx-2 mt-2 px-3 hover:px-5 bg-green-600 hover:bg-green-700 shadow shadow-gray-200'
                        >Yes</button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConfirmModal;