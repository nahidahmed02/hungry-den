import React from 'react';
import { toast } from 'react-hot-toast';

const User = ({ user, refetch }) => {
    const { name, email, role } = user;

    const handleAdmin = email => {
        fetch(`https://hungry-den-server.onrender.com/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
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
        fetch(`https://hungry-den-server.onrender.com/users/dman/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
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
        <div className="card w-auto lg:w-44 shadow shadow-gray-200 border border-custom-500 bg-transparent text-gray-200">

            <div className="mt-2 mb-3 text-center">
                <p className='font-bold text-xs'>{name}</p>
                <p className='italic text-xs'>{email}</p>
                {
                    role === "User" &&
                    <div className='mt-1'>
                        <span className='font-bold text-xs mr-1'>Make: </span>
                        <span onClick={() => handleAdmin(email)} className="cursor-pointer bg-custom-500 hover:bg-transparent  hover:px-3 btn-xs font-semibold py-0.5 rounded-md border border-custom-500 hover:border-custom-500 hover:text-custom-500 shadow shadow-gray-200">Admin</span>
                        <span onClick={() => handleDMan(email)} className="cursor-pointer bg-custom-500 hover:bg-transparent hover:px-3 ml-1 btn-xs font-semibold py-0.5 rounded-md border border-custom-500 hover:border-custom-500 hover:text-custom-500 shadow shadow-gray-200">D. Man</span>
                    </div>
                }

                {
                    role !== "User" &&
                    <p className='font-semibold text-xs mt-1 text-custom-500'>Current Role: {role}</p>
                }

            </div>

        </div>
    );
};

export default User;