import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const ProfileModal = ({ user, profile, setProfileModal, refetch }) => {
    const { register, handleSubmit } = useForm();
    const email = user?.email;

    const handleEditProfile = data => {

        fetch(`https://hungry-den-server.onrender.com/profile/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
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

            <div className="modal lg:mt-6">
                <div className="modal-box bg-black border border-custom-500 shadow shadow-gray-200 text-gray-200">

                    <h2 className='text-custom-500 font-serif text-center text-xl font-bold mb-4'>Edit Profile</h2>

                    <form onSubmit={handleSubmit(handleEditProfile)} className='flex flex-col w-auto lg:w-96 mx-auto mb-4'>

                        {/* ================================== IMAGE LINK FIELD ==================================*/}

                        <label className='w-full max-w-xs ml-2.5 lg:ml-9 mb-1 font-semibold'>
                            Update Profile Picture
                        </label>

                        {/*=================================== TO GET THE PHOTO LINK ===================================*/}

                        <small className='mb-1.5 ml-2.5 lg:ml-9'>
                            Please visit
                            <a href="https://postimages.org/" target='_blank' className='text-custom-500 font-semibold italic'> this website </a>
                            and upload your image there. Then copy the
                            <span className='font-semibold'> &rsquo;Direct Link&rsquo; </span>
                            and paste that in this input field below
                        </small>

                        <input
                            {...register('profilePic')}
                            type="text"
                            defaultValue={profile?.profilePic}
                            placeholder='Direct Link'
                            className="input input-bordered bg-transparent shadow shadow-gray-200 text-custom-500 border-custom-500 w-full max-w-xs mx-auto mb-2.5"
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
                            className="input input-bordered bg-transparent shadow shadow-gray-200 text-custom-500 border-custom-500 w-full max-w-xs mx-auto mb-2.5"
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
                            className="input input-bordered bg-transparent shadow shadow-gray-200 text-custom-500 border-custom-500 w-full max-w-xs mx-auto mb-2.5"
                        />

                        {/* ================================== SAVE & CLOSE BUTTON ==================================*/}

                        <div className='text-center'>

                            <button
                                type='submit'
                                className="text-gray-200 shadow shadow-gray-200 font-semibold rounded btn-xs hover:px-4 bg-custom-500 hover:bg-custom-600 mr-4"
                            >
                                Save
                            </button>

                            <button
                                className="modal-backdrop text-gray-200 hover:text-custom-500 shadow shadow-gray-200 font-semibold rounded btn-xs hover:px-4 border border-custom-500 hover:border-custom-600"
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