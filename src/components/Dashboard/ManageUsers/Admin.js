import React from 'react';
import { toast } from 'react-hot-toast';

const Admin = ({ admin, refetch }) => {
    const { name, email } = admin;

    const handleRemove = email => {
        fetch(`http://localhost:5000/admin/${email}`, {
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
        <div className="card w-auto lg:w-44 bg-base-100 shadow-2xl border border-orange-400">

            <div className="mt-2 mb-3 text-center">
                <p className='font-bold text-xs '>{name}</p>
                <p className='italic text-xs '>{email}</p>

                <span onClick={() => handleRemove(email)} className="cursor-pointer bg-red-500 btn-xs font-semibold text-white rounded-lg">Remove</span>
            </div>

        </div>
    );
};

export default Admin;