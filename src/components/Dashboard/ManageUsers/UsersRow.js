import React from 'react';

const UsersRow = ({ user, index }) => {
    const { name, email } = user;
    return (
        <tr className='text-center'>
            <td className='border border-b-black'>{index + 1}</td>
            <td className='border border-b-black'>{name}</td>
            <td className='border border-b-black'>{email}</td>
            <td className='border border-b-black'>Admin / User</td>
            <td className='border border-b-black'><button className='btn btn-xs border-none bg-green-600'>Make Admin</button></td>
        </tr>
    );
};

export default UsersRow;