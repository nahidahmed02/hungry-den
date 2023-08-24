import React from 'react';

const LogoutModal = ({ logout, setLogoutModal }) => {

    const handleLogOut = () => {
        logout()
            .then(res => {
                console.log(res)
                setLogoutModal(false)
            })
            .catch(error => console.log(error))
    }

    return (
        <section>
            <input type="checkbox" id="logout_modal" className="modal-toggle" defaultChecked={true} />

            <div className="modal">
                <div className="modal-box py-12 bg-black border border-yellow-300 shadow shadow-white">
                    <h2 className='text-orange-500 font-bold text-xl text-center'>Are You Sure?</h2>

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