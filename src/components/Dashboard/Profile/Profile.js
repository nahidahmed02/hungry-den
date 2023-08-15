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
            const res = await fetch(`http://localhost:5000/profile/${email}`);
            const data = res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    return (

        <section>
            <h2 className='lg:mt-6 mb-4 text-2xl font-serif font-bold text-orange-500 text-center'>Profile</h2>

            <div className="mx-8 lg:mx-auto card w-auto lg:w-96 bg-base-100 shadow-2xl border">

                <figure className="px-10 pt-10">
                    <Image
                        width={150}
                        height={150}
                        alt='user'
                        className="rounded-full"
                        src={!profile[0]?.profilePic ? profilePic : profile[0]?.profilePic}
                    />
                </figure>

                <div className="card-body">

                    <p className='font-semibold'>Name:
                        <span className='font-normal'>{user?.displayName}</span>
                    </p>
                    <p className='font-semibold'>E-Mail:
                        <span className='font-normal'>{user?.email}</span>
                    </p>
                    <p className='font-semibold'>Phone:
                        <span className='font-normal'>{profile ? profile[0]?.phone : ''}</span>
                    </p>
                    <p className='font-semibold'>Address:
                        <span className='font-normal'>{profile ? profile[0]?.address : ''}</span>
                    </p>

                    <button
                        onClick={() => setProfileModal(true)}
                        className="text-white font-bold rounded btn-sm border-none bg-orange-500 mt-3"
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
                    profile={profile}
                    setProfileModal={setProfileModal}
                    refetch={refetch}
                ></ProfileModal>
            }
        </section>
    )
}

export default Profile