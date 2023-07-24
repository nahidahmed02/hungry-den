import React from 'react';
import { toast } from 'react-hot-toast';

const DMan = ({ dMan, refetch }) => {
    const { name, email } = dMan;

    const handleRemoveDMan = email => {
        fetch(`http://localhost:5000/dman/${email}`, {
            method: 'PUT'
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
        <div className="card w-auto lg:w-44 bg-base-100 shadow-2xl border border-orange-400">

            <div className="mt-2 mb-3 text-center">
                <p className='font-bold text-xs '>{name}</p>
                <p className='italic text-xs '>{email}</p>

                <span onClick={() => handleRemoveDMan(email)} className="cursor-pointer bg-red-500 btn-xs font-semibold text-white rounded-lg">Remove</span>
            </div>

        </div>
    );
};

export default DMan;