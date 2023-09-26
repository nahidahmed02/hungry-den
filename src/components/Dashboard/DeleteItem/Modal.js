import { AuthContext } from '@/src/context/AuthProvider';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';

const Modal = ({ deleteItemModal, setDeleteItemModal, refetch }) => {

    const { _id } = deleteItemModal;
    const { user } = useContext(AuthContext);
    const email = user?.email;

    const handleDeleteItem = () => {
        fetch(`https://hungry-den-server.onrender.com/foods/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
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
                <div className="modal-box py-12 bg-black border border-custom-500 shadow shadow-gray-200">
                    <h2 className='text-custom-500 font-bold text-xl text-center mb-1'>Are You Sure?</h2>

                    <div className='text-center'>

                        <button
                            onClick={() => setDeleteItemModal(false)}
                            className='btn btn-xs rounded-md mx-2 mt-2 px-3 hover:px-4 bg-custom-500 hover:bg-transparent hover:text-custom-500 hover:border-custom-500 shadow shadow-gray-200'
                        >No</button>

                        <button
                            onClick={() => handleDeleteItem()}
                            className={`btn btn-xs rounded-md ${email !== 'ahmednahid1995@gmail.com' && 'btn-disabled text-gray-200'} bg-transparent hover:bg-transparent mx-2 mt-2 px-3 hover:px-4 hover:text-custom-500 border border-custom-500 hover:border-custom-500 shadow shadow-gray-200`}
                        >Yes</button>

                    </div>

                    <h2 className='text-gray-200 text-center text-xs mt-2.5'>* The Delete Item option is currently restricted for some admins</h2>

                </div>
            </div>
        </section>
    );
};

export default Modal;