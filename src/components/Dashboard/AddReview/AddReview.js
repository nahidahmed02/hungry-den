import { AuthContext } from '@/src/context/AuthProvider';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();

    const handleReview = (data) => {
        data.name = user?.displayName;
        data.email = user?.email;
        console.log(data);
    }

    return (
        <section>
            <h2 className='lg:mt-6 mb-4 text-2xl font-serif font-bold text-orange-500 text-center'>Add Review</h2>

            <form onSubmit={handleSubmit(handleReview)} className='flex flex-col w-auto lg:w-96 mx-auto mb-4'>
                <label className='w-full max-w-xs ml-12 lg:ml-9 mb-1 font-semibold'>
                    Name
                </label>

                <input
                    {...register("name")}
                    value={user?.displayName}
                    readOnly
                    className="input input-bordered w-full max-w-xs mx-auto mb-2.5"
                />

                <label className='w-full max-w-xs ml-12 lg:ml-9 mb-1 font-semibold'>
                    Your&rsquo;s Say
                </label>

                <textarea
                    {...register("feedback")}
                    type='text'
                    placeholder='Your&rsquo;s Say'
                    className="input input-bordered w-full max-w-xs mx-auto mb-2.5"
                />

                <label className='w-full max-w-xs ml-12 lg:ml-9 mb-1 font-semibold'>
                    Ratings (0-5)
                </label>

                <select
                    {...register("ratings")}
                    className="input input-bordered w-full max-w-xs mx-auto mb-2.5">

                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                    <option value="0">0</option>
                </select>

                <button
                    type="submit"
                    className="bg-orange-500 text-white font-bold w-full max-w-xs mx-auto py-2 rounded-md">
                    Submit
                </button>
            </form>
        </section>)
}

export default AddReview