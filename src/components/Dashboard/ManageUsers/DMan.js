import React from 'react';
import { toast } from 'react-hot-toast';

const DMan = ({ dMan, refetch }) => {
    const { name, email } = dMan;

    const handleRemoveDMan = email => {
        fetch(`https://hungry-den-server.onrender.com/dman/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Removed a Delivery Man');
                    refetch()
                }
            })
    }

    return (
        <div className="card w-auto lg:w-44 shadow shadow-gray-200 border border-custom-500 bg-transparent text-gray-200">

            <div className="mt-2 mb-3 text-center">
                <p className='font-bold text-xs '>{name}</p>
                <p className='italic text-xs'>{email}</p>

                <div className='mt-1'>
                    <button
                        onClick={() => handleRemoveDMan(email)}
                        className="btn btn-xs rounded-md mt-1.5 px-3 hover:px-4 bg-custom-500 hover:bg-transparent font-semibold text-gray-200 hover:text-custom-500 shadow shadow-gray-200 hover:border-custom-500"
                    >
                        Remove
                    </button>
                </div>

            </div>

        </div>
    );
};

export default DMan;