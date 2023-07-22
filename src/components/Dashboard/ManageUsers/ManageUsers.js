import React, { useEffect, useState } from 'react'
import UsersRow from './UsersRow';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';

const ManageUsers = () => {
    const { data: users, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section>
            <h2 className='lg:mt-6 mb-4 text-2xl font-serif font-bold text-orange-500 text-center'>Manage Users</h2>

            <div className="overflow-x-auto mx-3 lg:mx-28 mb-8 border rounded-t-lg border-black border-b-0">
                <table className="table w-full">
                    <thead>
                        <tr className='text-center text-white'>
                            <td className='bg-orange-500 '>SL No.</td>
                            <th className='bg-orange-500 '>Name</th>
                            <th className='bg-orange-500 '>Email</th>
                            <th className='bg-orange-500 '>Role</th>
                            <th className='bg-orange-500 '>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            users?.map((user, index) => <UsersRow
                                key={user._id}
                                user={user}
                                index={index}
                            ></UsersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </section>)
}

export default ManageUsers