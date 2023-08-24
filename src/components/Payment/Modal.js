import { AuthContext } from '@/src/context/AuthProvider';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';

const Modal = ({ setModal, selectedFoods, sumOfAllPrice, includingDeleveryChrg }) => {

    const { user } = useContext(AuthContext);
    const foodsObj = { ...selectedFoods };

    const handlePlaceOrder = data => {
        data.email = user?.email;
        data.paymentType = "Cash on Delevery";

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
        <div className=''>
            <input type="checkbox" id="cash_on_delevery" className="modal-toggle" defaultChecked={true} />

            <div className="modal">
                <div className="modal-box bg-black border border-yellow-300 shadow shadow-white">
                    <h2 className='text-orange-500 font-bold text-xl text-center mb-2.5'>Order Summary</h2>

                    <h2 className='font-semibold text-sm text-gray-200'>
                        {selectedFoods?.map(order =>
                            <li
                                key={order._id}
                                className='mb-1 flex justify-between'
                            >
                                <span>{order.name} ({order.category}) x {order.quantity}</span>
                                <span className=''>${order.total}</span>
                            </li>)
                        }
                    </h2>

                    <hr />

                    <h2 className='font-semibold text-sm text-gray-200 text-end my-1'><span className='mr-12'>Total Price</span> ${sumOfAllPrice}</h2>
                    <h2 className='font-semibold text-sm text-gray-200 text-end mb-1'><span className='mr-12'>Delevery Charge</span> $12</h2>

                    <hr />

                    <h2 className='font-semibold text-gray-200 text-end mt-1'><span className='mr-12'>Total</span> ${includingDeleveryChrg}</h2>
                    <h2 className='font-semibold text-xs text-gray-200 my-2 '>Payment Type: Cash On Delevery</h2>

                    <div className='text-center'>
                        <button onClick={() => setModal(false)} className='btn btn-xs mx-2 mt-2 bg-red-500 hover:border-red-500 shadow shadow-white'>Cancel</button>
                        <button onClick={() => handlePlaceOrder(foodsObj)} className='btn btn-xs mx-2 mt-2 px-3 bg-orange-500 hover:border-orange-500 shadow shadow-white'>Place Order</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Modal;