import { AuthContext } from '@/src/context/AuthProvider';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import ProfileModal from './ProfileModal';
import noPic from '../../../../public/images/default_user.jpg';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [profilePic, setProfilePic] = useState(user?.photoURL ? user.photoURL : noPic);
    const [profileModal, setProfileModal] = useState(null);

    const { data: profile, isLoading, refetch } = useQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            const res = await fetch(`https://hungry-den-server.onrender.com/profile/${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    return (

        <section>

            <h2 className='border-b-2 border-b-gray-200 mt-12 -mb-20 mx-16 md:mx-24 lg:mx-56'></h2>
            <h2 className='header-font text-4xl w-fit mx-auto px-3 md:px-5 lg:px-5 mt-14 mb-10 text-gray-200 bg-black'>Profile</h2>

            <div className="mx-8 lg:mx-auto card w-auto lg:w-96 text-gray-200 bg-black border border-yellow-300 shadow-md shadow-white">

                <figure className="px-10 pt-10">
                    <Image
                        width={150}
                        height={150}
                        alt='user'
                        className="rounded-3xl"
                        src={!profile[0]?.profilePic ? profilePic : profile[0]?.profilePic}
                    />
                </figure>

                <div className="card-body">

                    <p className='font-semibold'>Name:
                        <span className='font-normal'> {user?.displayName}</span>
                    </p>
                    <p className='font-semibold'>E-Mail:
                        <span className='font-normal'> {user?.email}</span>
                    </p>
                    <p className='font-semibold'>Phone:
                        <span className='font-normal'> {profile[0]?.phone ? profile[0].phone : ''}</span>
                    </p>
                    <p className='font-semibold'>Address:
                        <span className='font-normal'> {profile[0]?.address ? profile[0]?.address : ''}</span>
                    </p>

                    <button
                        onClick={() => setProfileModal(true)}
                        className="text-white font-bold rounded hover:rounded-xl btn-sm shadow shadow-white bg-orange-500 hover:bg-orange-600 mt-3"
                    >
                        Edit
                    </button>

                </div>
            </div>

            {/* ==================================== MODAL ===================================== */}

            {
                profileModal && <ProfileModal
                    id={user.uid}
                    user={user}
                    profile={profile[0]}
                    setProfileModal={setProfileModal}
                    refetch={refetch}
                ></ProfileModal>
            }
        </section>
    )
}

export default Profile