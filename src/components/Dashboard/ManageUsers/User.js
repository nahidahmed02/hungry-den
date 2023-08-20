import React from 'react';
import { toast } from 'react-hot-toast';

const User = ({ user, refetch }) => {
    const { name, email, role } = user;

    const handleAdmin = email => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully Made an Admin');
                    refetch()
                }
            })
    }

    const handleDMan = email => {
        fetch(`http://localhost:5000/users/dman/${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully Made a Delivery Man');
                    refetch()
                }
            })
    }

    return (
        <div className="card w-auto lg:w-44 bg-base-100 shadow-2xl border border-orange-400">

            <div className="mt-2 mb-3">
                <p className='font-bold text-xs text-center'>{name}</p>
                <p className='italic text-xs text-center'>{email}</p>
                {
                    role === "User" &&
                    <div className='text-center'>
                        <span className='font-bold text-xs mr-1'>Make: </span>
                        <span onClick={() => handleAdmin(email)} className="cursor-pointer bg-black btn-xs font-semibold py-0.5 rounded-lg text-green-500">Admin</span>
                        <span onClick={() => handleDMan(email)} className="cursor-pointer bg-black ml-1 btn-xs font-semibold py-0.5 rounded-lg text-yellow-500">D. Man</span>
                    </div>
                }

                {
                    role !== "User" &&
                    <p className='text-center font-semibold text-xs mt-1.5 text-blue-600'>{role}</p>
                }

            </div>

        </div>
    );
};

export default User;