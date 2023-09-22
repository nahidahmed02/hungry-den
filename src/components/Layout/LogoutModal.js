import useCart from '@/src/hooks/useCart';
import React from 'react';

const LogoutModal = ({ logout, setLogoutModal }) => {
    const { selectedFoods } = useCart();

    const handleLogOut = () => {
        logout()
            .then(res => {
                console.log(res);
                localStorage?.clear();
                setLogoutModal(false);
            })
            .catch(error => console.log(error))
    }

    return (
        <section>
            <input type="checkbox" id="logout_modal" className="modal-toggle" defaultChecked={true} />

            <div className="modal">
                <div className="modal-box py-12 bg-black border border-custom-500 shadow shadow-gray-200">
                    <h2 className='text-custom-500 font-bold text-xl text-center'>Are You Sure?</h2>

                    {
                        selectedFoods?.length !== 0
                        &&
                        <h2 className='text-gray-200 text-sm text-center my-1 font-semibold'>
                            Logging out will remove all items you have added to the cart
                        </h2>
                    }

                    <div className='text-center'>
                        <button
                            onClick={() => setLogoutModal(false)}
                            className='btn btn-xs rounded-md px-3 hover:px-4 mx-2 mt-2.5 bg-transparent hover:bg-custom-500 text-custom-500 hover:text-gray-200 border border-custom-500 hover:border-custom-500 shadow shadow-gray-200'
                        >No</button>

                        <button
                            onClick={() => handleLogOut()}
                            className='btn btn-xs rounded-md px-3 hover:px-4 mx-2 mt-2.5 bg-transparent hover:bg-custom-500 text-custom-500 hover:text-gray-200 border border-custom-500 hover:border-custom-500 shadow shadow-gray-200'
                        >Yes</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoutModal;