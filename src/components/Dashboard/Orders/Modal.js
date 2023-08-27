import React from 'react';

const Modal = ({ modal, setModal }) => {

    const { email, phone, address, sumOfAllPrice, includingDeliveryChrg } = modal;
    const orders = Object.values(modal.orders);  // returns all the values of the object as array
    console.log(modal);

    return (
        <section>
            <input type="checkbox" id="order_details" className="modal-toggle" defaultChecked={true} />

            <div className="modal">
                <div className="modal-box bg-black border border-yellow-300 shadow shadow-white">

                    <h2 className='text-orange-500 font-bold text-xl text-center mb-2.5'>Order&rsquo;s Details</h2>

                    {/* ------------------- CUSTOMER INFO -------------------- */}

                    <h2 className='font-semibold text-sm text-orange-500'>Customer:</h2>
                    <div className='font-semibold text-sm text-gray-200'>
                        <h2>Email: {email}</h2>
                        <h2>Phone: {phone}</h2>
                        <h2>Address: {address}</h2>
                    </div>

                    {/* ------------------- ORDER LIST -------------------- */}
                    <h2 className='font-semibold text-sm text-orange-500 mt-3'>Ordered List:</h2>
                    <h2 className='font-semibold text-sm text-gray-200'>
                        {
                            orders?.map(item =>
                                <li
                                    key={item._id}
                                    className='mb-1 flex justify-between'
                                >
                                    <span>{item.name} ({item.category}) x {item.quantity}</span>
                                    <span className=''>${item.total}</span>
                                </li>)
                        }
                    </h2>

                    <hr />

                    {/* --------------------- PRICING --------------------- */}

                    <h2 className='font-semibold text-sm text-gray-200 flex justify-between mt-2'><span>Total Price</span> ${sumOfAllPrice}</h2>
                    <h2 className='font-semibold text-sm text-gray-200 flex justify-between mb-2'><span>Delivery Charge</span> $12</h2>

                    <hr />

                    <h2 className='font-semibold text-gray-200 flex justify-between mt-1.5'><span>Total</span> ${includingDeliveryChrg}</h2>

                    {/* ------------------- BUTTON -------------------- */}

                    <div className='text-center mt-1.5'>
                        <button
                            onClick={() => setModal(false)}
                            className='btn btn-xs mx-2 mt-2 hover:px-4 bg-orange-500 hover:bg-orange-600 shadow shadow-white'
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Modal;