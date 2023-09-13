import useCart from '@/src/hooks/useCart';
import { useRouter } from 'next/router';
import React from 'react';

const LogoutModal = ({ logout, setLogoutModal }) => {
    const { selectedFoods } = useCart();
    const router = useRouter();

    const handleLogOut = () => {
        logout()
            .then(res => {
                console.log(res);
                localStorage?.clear();
                setLogoutModal(false);
                // router.push('/')
            })
            .catch(error => console.log(error))
    }

    return (
        <section>
            <input type="checkbox" id="logout_modal" className="modal-toggle" defaultChecked={true} />

            <div className="modal">
                <div className="modal-box py-12 bg-black border border-yellow-300 shadow shadow-white">
                    <h2 className='text-orange-500 font-bold text-xl text-center'>Are You Sure?</h2>

                    {
                        selectedFoods?.length !== 0
                        &&
                        <h2 className='text-gray-200 text-sm text-center my-1 font-semibold'>Logging out will remove all items you have added to the cart</h2>
                    }

                    <div className='text-center'>
                        <button onClick={() => setLogoutModal(false)} className='btn btn-xs px-3 hover:px-4 border-none mx-2 mt-2 bg-green-600 hover:bg-green-700 shadow shadow-white'>No</button>
                        <button onClick={() => handleLogOut()} className='btn btn-xs px-3 hover:px-4 mx-2 mt-2 bg-red-500 hover:bg-red-600 shadow shadow-white'>Yes</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoutModal;