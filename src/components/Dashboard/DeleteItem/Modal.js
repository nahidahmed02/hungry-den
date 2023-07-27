import React from 'react';
import { toast } from 'react-hot-toast';

const Modal = ({ deleteItemModal, setDeleteItemModal, refetch }) => {
    const { _id } = deleteItemModal;

    const handleDeleteItem = () => {
        fetch(`http://localhost:5000/foods/${_id}`, {
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
                <div className="modal-box py-12">
                    <h2 className='text-red-500 font-bold text-xl text-center'>Are You Sure?</h2>

                    <div className='text-center'>
                        <button onClick={() => setDeleteItemModal(false)} className='btn btn-xs border-none mx-2 mt-2 bg-green-600'>No</button>
                        <button onClick={() => handleDeleteItem()} className='btn btn-xs border-none mx-2 mt-2 bg-red-500'>Yes</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Modal;