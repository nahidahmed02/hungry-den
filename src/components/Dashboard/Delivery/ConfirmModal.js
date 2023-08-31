import React from 'react';
import { toast } from 'react-hot-toast';

const ConfirmModal = ({ confirmModal, setConfirmModal, refetch }) => {

    const { email, paymentType } = confirmModal;

    const handleConfirmation = () => {
        fetch(`https://hungry-den-server.onrender.com/order/completed/${email}`, {
            method: 'PUT'
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
                <div className="modal-box bg-black border border-yellow-300 shadow shadow-white">

                    <h2 className='text-red-500 font-bold text-xl text-center mb-2.5'>Are you sure?</h2>
                    {
                        paymentType === 'Cash on Delivery'
                        &&
                        <h2 className='text-gray-200 font-bold text-sm text-center mb-2.5'>
                            It&rsquo;s a Cash on Delivery. Do you get the cash from your client?
                        </h2>
                    }

                    {/* --------------------- BUTTONS --------------------- */}

                    <div className='text-center'>

                        <button
                            onClick={() => setConfirmModal(false)}
                            className='btn btn-xs mx-2 mt-2 hover:px-4 bg-red-500 hover:bg-red-600 shadow shadow-white'
                        >No</button>

                        <button
                            onClick={handleConfirmation}
                            className='btn btn-xs mx-2 mt-2 px-3 hover:px-5 bg-green-600 hover:bg-green-700 shadow shadow-white'
                        >Yes</button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConfirmModal;