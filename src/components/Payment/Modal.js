import React from 'react';

const Modal = ({ modal, setModal }) => {

    const handlePlaceOrder = data => {
        console.log(data);
    }

    return (
        <div>
            <input type="checkbox" id="cash_on_delevery" className="modal-toggle" defaultChecked={true} />

            <div className="modal">
                <div className="modal-box">
                    <h2 className='text-orange-500 font-bold text-xl text-center'>Order Details</h2>

                    <div className='text-center'>
                        <button onClick={() => setModal(false)} className='btn btn-xs mx-2 mt-2 bg-red-500 hover:border-red-500'>Cancel</button>
                        <button onClick={() => handlePlaceOrder()} className='btn btn-xs mx-2 mt-2 bg-orange-500 hover:border-orange-500'>Place Order</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Modal;