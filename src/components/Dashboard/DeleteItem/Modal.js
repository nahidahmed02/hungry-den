import React from 'react';
import { toast } from 'react-hot-toast';

const Modal = ({ deleteItemModal, setDeleteItemModal, refetch }) => {
    const { _id } = deleteItemModal;

    const handleDeleteItem = () => {
        fetch(`https://hungry-den-server.onrender.com/foods/${_id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('Food Deleted')
                    setDeleteItemModal(false);
                    refetch();
                }
            })
    }

    return (
        <section>
            <input type="checkbox" id="delete_item_modal" className="modal-toggle" defaultChecked={true} />

            <div className="modal">
                <div className="modal-box py-12 bg-black border border-yellow-300 shadow shadow-white">
                    <h2 className='text-orange-500 font-bold text-xl text-center mb-1'>Are You Sure?</h2>

                    <div className='text-center'>
                        <button onClick={() => setDeleteItemModal(false)} className='btn btn-xs border-none mx-2 mt-2 hover:px-4 bg-green-600 hover:bg-green-700 shadow shadow-white'>No</button>
                        <button onClick={() => handleDeleteItem()} className='btn btn-xs border-none mx-2 mt-2 hover:px-4 bg-red-500 hover:bg-red-600 shadow shadow-white'>Yes</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Modal;