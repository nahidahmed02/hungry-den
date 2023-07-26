import React from 'react'
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import User from './User';
import Admin from './Admin';
import DMan from './DMan';

const ManageUsers = () => {

    const { data: users, isLoading, refetch } = useQuery({
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

            {/*------------------- admins -------------------*/}

            <h2 className='lg:mt-6 mb-4 text-2xl font-serif font-bold text-orange-500 text-center'>Admin ({users.filter(user => user?.role === 'admin').length})</h2>

            <div className='mx-4 lg:mx-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-5 mb-12'>
                {
                    users?.filter(user => user?.role === 'admin').map(admin => <Admin
                        key={admin._id}
                        admin={admin}
                        refetch={refetch}
                    ></Admin>)
                }
            </div>


            {/*------------------- delivery man -------------------*/}

            <h2 className='lg:mt-6 mb-4 text-2xl font-serif font-bold text-orange-500 text-center'>Delivery Man ({users.filter(user => user?.role === 'dman').length})</h2>

            <div className='mx-4 lg:mx-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-5 mb-12'>
                {
                    users?.filter(user => user?.role === 'dman').map(dMan => <DMan
                        key={dMan._id}
                        dMan={dMan}
                        refetch={refetch}
                    ></DMan>)
                }
            </div>


            {/*------------------ all users ------------------*/}

            <h2 className='lg:mt-6 mb-4 text-2xl font-serif font-bold text-orange-500 text-center'>Users ({users?.length})</h2>

            <div className='mx-4 lg:mx-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-5 mb-12'>
                {
                    users?.map(user => <User
                        key={user._id}
                        user={user}
                        refetch={refetch}
                    ></User>)
                }
            </div>

        </section>)
}

export default ManageUsers