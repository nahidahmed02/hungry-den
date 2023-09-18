import React from 'react';
import Loading from '../../Loading/Loading';
import useUsers from '@/src/hooks/useUsers';
import { toast } from 'react-hot-toast';

const DManModal = ({ dManModal, setDManModal, refetch }) => {

    const { _id } = dManModal;
    const [users, isLoading] = useUsers();
    const dMan = users?.filter(user => user.role === 'D. Man');

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleAssignOrder = (id) => {
        const assignedTo = dMan?.find(person => person._id === id);

        const dManInfo = {
            name: assignedTo.name,
            email: assignedTo.email
        }

        fetch(`https://hungry-den-server.onrender.com/order/assignDMan/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(dManInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
                setDManModal(false)
                toast.success(`Order assigned to ${assignedTo.name}`)
            })
    }

    return (
        <section>
            <input type="checkbox" id="dMan_modal" className="modal-toggle" defaultChecked={true} />

            <div className="modal">
                <div className="modal-box bg-black border border-yellow-500 shadow shadow-gray-200">

                    <h2 className='text-orange-500 font-bold text-xl text-center mb-2.5'>Delivery Man</h2>

                    {
                        dMan?.length === 0
                            ?
                            <p className='font-bold text-center text-lg italic text-gray-200'>No delivery man appointed!</p>
                            :
                            // ------------------- Delivery Man INFO --------------------

                            <h2 className='font-semibold text-sm text-gray-200'>
                                {
                                    dMan?.map(person =>
                                        <li
                                            key={person._id}
                                            className='flex justify-between border rounded-lg mb-2 px-5 py-2 hover:bg-orange-500'
                                        >
                                            <span>
                                                {person.name} <span className='text-xs italic'>{person.email}</span>
                                            </span>
                                            <button
                                                onClick={() => handleAssignOrder(person._id)}
                                                className='btn btn-xs hover:px-3 border border-gray-200 bg-transparent hover:bg-black'
                                            >Assign</button>

                                        </li>)
                                }
                            </h2>
                    }



                    {/* ------------------- BUTTON -------------------- */}

                    <div className='text-center mt-1.5'>
                        <button
                            onClick={() => setDManModal(false)}
                            className='btn btn-xs mx-2 mt-2 hover:px-4 bg-orange-500 hover:bg-orange-600 shadow shadow-gray-200'
                        >Close</button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DManModal;