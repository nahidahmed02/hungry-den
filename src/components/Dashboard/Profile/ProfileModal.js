import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const ProfileModal = ({ user, profile, setProfileModal, refetch }) => {
    const { register, handleSubmit } = useForm();
    const email = user?.email;

    const handleEditProfile = data => {

        fetch(`http://localhost:5000/profile/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProfileModal(false)
                refetch()
                toast.success('Profile updated')
            })
    }

    return (
        <section>
            <input type="checkbox" id="my_modal_7" className="modal-toggle" defaultChecked={true} />

            <div className="modal">
                <div className="modal-box">

                    <h2 className='text-orange-500 font-serif text-center text-xl font-bold mb-4'>Edit Profile</h2>

                    <form onSubmit={handleSubmit(handleEditProfile)} className='flex flex-col w-auto lg:w-96 mx-auto mb-4'>

                        {/* ================================== IMAGE LINK FIELD ==================================*/}

                        <label className='w-full max-w-xs ml-2.5 lg:ml-9 mb-1 font-semibold'>
                            Update Profile Picture
                        </label>

                        {/*=================================== TO GET THE PHOTO LINK ===================================*/}

                        <small className='mb-1 ml-2.5 lg:ml-9'>
                            Please visit
                            <a href="https://postimages.org/" target='_blank' className='text-blue-600 underline'> this website </a>
                            and upload your image. Then copy the
                            <span className='font-semibold'> Direct Link </span>
                            and paste that in this input field ⬇️
                        </small>

                        <input
                            {...register('profilePic')}
                            type="text"
                            defaultValue={profile?.profilePic}
                            className="input input-bordered w-full max-w-xs mx-auto mb-2.5"
                        />

                        {/* ================================== PHONE NUMBER FIELD ==================================*/}

                        <label className='w-full max-w-xs ml-2.5 lg:ml-9 mb-1 font-semibold'>
                            Phone
                        </label>

                        <input
                            {...register("phone")}
                            type="text"
                            placeholder="Phone"
                            defaultValue={profile?.phone}
                            className="input input-bordered w-full max-w-xs mx-auto mb-2.5"
                        />

                        {/* ================================== ADDRESS FIELD ==================================*/}

                        <label className='w-full max-w-xs ml-2.5 lg:ml-9 mb-1 font-semibold'>
                            Address
                        </label>

                        <input
                            {...register("address")}
                            type="text"
                            placeholder="Address"
                            defaultValue={profile?.address}
                            className="input input-bordered w-full max-w-xs mx-auto mb-2.5"
                        />

                        {/* ================================== SAVE & CLOSE BUTTON ==================================*/}

                        <div className='text-center'>

                            <button
                                type='submit'
                                className="text-white font-bold rounded btn-xs bg-orange-500 mr-4"
                            >
                                Save
                            </button>

                            <button
                                className="modal-backdrop text-white font-bold rounded btn-xs bg-red-500"
                                onClick={() => setProfileModal(false)}
                            >
                                Close
                            </button>

                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default ProfileModal;