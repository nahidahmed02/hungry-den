import React from 'react';
import { toast } from 'react-hot-toast';

const Admin = ({ admin, refetch }) => {
    const { name, email } = admin;

    const handleRemoveAdmin = email => {
        fetch(`https://hungry-den-server.onrender.com/admin/${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Removed an Admin');
                    refetch()
                }
            })
    }
    return (
        <div className="card w-auto lg:w-44 shadow shadow-white border border-yellow-400 bg-transparent text-gray-200">

            <div className="mt-2 mb-3 text-center">
                <p className='font-bold text-xs '>{name}</p>
                <p className='italic text-xs '>{email}</p>

                <div className='mt-1'>
                    <span
                        onClick={() => handleRemoveAdmin(email)}
                        className="cursor-pointer py-0.5 hover:px-4 bg-red-500 hover:bg-red-600 btn-xs font-semibold text-white shadow shadow-white rounded-lg"
                    >
                        Remove
                    </span>
                </div>
            </div>

        </div>
    );
};

export default Admin;