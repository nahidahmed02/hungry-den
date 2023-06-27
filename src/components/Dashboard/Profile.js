import { AuthContext } from '@/src/context/AuthProvider';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import ProfileModal from './Modals/ProfileModal';
import noPic from '../../../public/images/default_user.jpg';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [profileModal, setProfileModal] = useState(null);
    console.log(user?.photoURL);
    return (

        <div>
            <h2 className='mt-6 text-2xl font-serif font-bold text-orange-500 text-center'>Profile</h2>
            <div className="mx-8 lg:mx-auto card w-auto lg:w-96 bg-base-100 shadow-2xl border mt-5">
                <figure className="px-10 pt-10">
                    <Image
                        width={150}
                        height={150}
                        alt='user'
                        src={user?.photoURL ? user.photoURL : noPic}
                        className="rounded-full" />
                </figure>
                <div className="card-body">
                    <p className='font-semibold'>Name: <span className='font-normal'>{user?.displayName}</span></p>
                    <p className='font-semibold'>E-Mail: <span className='font-normal'>{user?.email}</span></p>
                    <p className='font-semibold'>Phone:</p>
                    <p className='font-semibold'>Address:</p>
                    <button onClick={() => setProfileModal(true)} style={{ 'zIndex': 4, 'position': 'relative' }} className="text-white font-bold rounded btn-sm border-none bg-orange-500 mt-3">Edit</button>

                </div>
            </div>



            {
                profileModal && <ProfileModal
                    id={user.uid}
                    setProfileModal={setProfileModal}
                ></ProfileModal>
            }
        </div>
    )
}

export default Profile