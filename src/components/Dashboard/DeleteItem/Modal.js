import React from 'react';

const Modal = ({ setDeleteItemModal }) => {
    return (
        <section>
            <input type="checkbox" id="delete_item_modal" className="modal-toggle" defaultChecked={true} />
            <div className="modal">
                <div className="modal-box py-12">
                    <h2 className='text-red-500 font-bold text-xl text-center'>Are You Sure?</h2>

                    <div className='text-center'>
                        <button onClick={() => setDeleteItemModal(false)} className='btn btn-xs border-none mx-2 mt-2 bg-green-600'>No</button>
                        <button onClick={() => setDeleteItemModal(false)} className='btn btn-xs border-none mx-2 mt-2 bg-red-500'>Yes</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Modal;