import React from 'react';
import { useForm } from 'react-hook-form';

const ProfileModal = ({ setProfileModal, setProfilePic }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setProfilePic(URL.createObjectURL(file));
    };

    const handleEditProfile = data => {
        console.log(data);
    }
    return (
        <section>
            <input type="checkbox" id="my_modal_7" className="modal-toggle" defaultChecked={true} />
            <div className="modal">
                <div className="modal-box">
                    <h2 className='text-orange-500 font-serif text-center text-xl font-bold mb-4'>Edit Profile</h2>

                    <form onSubmit={handleSubmit(handleEditProfile)} className='flex flex-col w-auto lg:w-96 mx-auto mb-4'>

                        <label className='w-full max-w-xs ml-2.5 lg:ml-9 mb-1 font-semibold'>
                            Update Profile Picture
                        </label>

                        <input
                            id="imageInput"
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className='w-full max-w-xs mx-auto mb-2.5'
                        />

                        <label className='w-full max-w-xs ml-2.5 lg:ml-9 mb-1 font-semibold'>
                            Phone
                        </label>

                        <input
                            {...register("phone")}
                            type="text"
                            placeholder="Phone"
                            className="input input-bordered w-full max-w-xs mx-auto mb-2.5"
                        />

                        <label className='w-full max-w-xs ml-2.5 lg:ml-9 mb-1 font-semibold'>
                            Address
                        </label>

                        <input
                            {...register("address")}
                            type="text"
                            placeholder="Address"
                            className="input input-bordered w-full max-w-xs mx-auto mb-2.5"
                        />

                        <div className='text-center'>
                            <button type='submit' className="text-white font-bold rounded btn-xs bg-orange-500 mr-4" onClick={() => setProfileModal(false)}>Save</button>
                            <button className="modal-backdrop text-white font-bold rounded btn-xs bg-red-500" onClick={() => setProfileModal(false)}>Close</button>
                        </div>

                    </form>


                </div>
            </div>
        </section>
    );
};

export default ProfileModal;