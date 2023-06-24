import React from 'react';
import { useForm } from 'react-hook-form';

const ProfileModal = ({ setProfileModal }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleEditProfile = data => {
        console.log(data);
    }
    return (
        <div>
            <input type="checkbox" id="my_modal_7" className="modal-toggle" defaultChecked={true} />
            <div className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(handleEditProfile)} className='flex flex-col w-96 mx-auto mb-4'>

                        <h2 className='text-orange-500 font-serif text-center text-xl font-bold mb-4'>Edit Profile</h2>

                        <input
                            {...register("phone")}
                            type="text"
                            placeholder="phone"
                            className="input input-bordered w-full max-w-xs mx-auto mb-2.5"
                            required
                        />
                        <input
                            {...register("address")}
                            type="text"
                            placeholder="address"
                            className="input input-bordered w-full max-w-xs mx-auto mb-2.5"
                            required
                        />
                    </form>
                    <div>
                        <label className="btn btn-xs bg-orange-400 mr-4" onClick={() => setProfileModal(false)}>Save</label>
                        <label className="modal-backdrop btn btn-xs bg-red-500" htmlFor="my_modal_7" onClick={() => setProfileModal(false)}>Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileModal;