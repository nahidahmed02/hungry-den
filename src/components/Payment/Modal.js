import { AuthContext } from '@/src/context/AuthProvider';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';

const Modal = ({ setModal, selectedFoods, sumOfAllPrice, includingDeleveryChrg }) => {

    const { user } = useContext(AuthContext);
    const foodsObj = { ...selectedFoods };

    const handlePlaceOrder = data => {
        data.email = user?.email;

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Order Taken!')
                } else {
                    toast.error('Order Placement Denied!')
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="cash_on_delevery" className="modal-toggle" defaultChecked={true} />

            <div className="modal">
                <div className="modal-box">
                    <h2 className='text-orange-500 font-bold text-xl text-center'>Order Details</h2>
                    <h2 className='font-semibold text-base text-center'>Cash On Delevery</h2>
                    <h2 className='font-semibold text-base text-center'>Total Price: ${sumOfAllPrice}</h2>
                    <h2 className='font-semibold text-base text-center'>Delevery Charge: $12</h2>
                    <h2 className='font-semibold text-base text-center'>Total: ${includingDeleveryChrg}</h2>

                    <div className='text-center'>
                        <button onClick={() => setModal(false)} className='btn btn-xs mx-2 mt-2 bg-red-500 hover:border-red-500'>Cancel</button>
                        <button onClick={() => handlePlaceOrder(foodsObj)} className='btn btn-xs mx-2 mt-2 bg-orange-500 hover:border-orange-500'>Place Order</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Modal;