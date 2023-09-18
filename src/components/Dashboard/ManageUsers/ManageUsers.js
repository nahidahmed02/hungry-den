import React from 'react'
import Loading from '../../Loading/Loading';
import User from './User';
import Admin from './Admin';
import DMan from './DMan';
import useUsers from '@/src/hooks/useUsers';

const ManageUsers = () => {

    const [users, isLoading, refetch] = useUsers();

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section>

            {/*------------------- admins -------------------*/}

            <h2 className='border-b-2 border-b-orange-500 mt-12 -mb-20 mx-16 md:mx-24 lg:mx-56'></h2>
            <h2 className='header-font text-4xl w-fit mx-auto px-3 md:px-5 lg:px-5 mt-14 mb-10 text-orange-500 bg-black'>Admin ({users.filter(user => user?.role === 'Admin').length})</h2>

            <div className='mx-4 lg:mx-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-5 mb-12'>
                {
                    users?.filter(user => user?.role === 'Admin').map(admin => <Admin
                        key={admin._id}
                        admin={admin}
                        refetch={refetch}
                    ></Admin>)
                }
            </div>


            {/*------------------- delivery man -------------------*/}

            <h2 className='border-b-2 border-b-orange-500 mt-14 -mb-20 mx-16 md:mx-24 lg:mx-56'></h2>
            <h2 className='header-font text-4xl w-fit mx-auto px-3 md:px-5 lg:px-5 mt-14 mb-10 text-orange-500 bg-black'>Delivery Man ({users.filter(user => user?.role === 'D. Man').length})</h2>

            <div className='mx-4 lg:mx-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-5 mb-12'>
                {
                    users?.filter(user => user?.role === 'D. Man').map(dMan => <DMan
                        key={dMan._id}
                        dMan={dMan}
                        refetch={refetch}
                    ></DMan>)
                }
            </div>


            {/*------------------ all users ------------------*/}

            <h2 className='border-b-2 border-b-orange-500 mt-14 -mb-20 mx-16 md:mx-24 lg:mx-56'></h2>
            <h2 className='header-font text-4xl w-fit mx-auto px-3 md:px-5 lg:px-5 mt-14 mb-10 text-orange-500 bg-black'>Users ({users?.length})</h2>

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