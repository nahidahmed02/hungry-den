import { AuthContext } from '@/src/context/AuthProvider';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import MyReview from './MyReview';
import { useQueryClient } from 'react-query';

const AddReview = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm();
    const queryClient = useQueryClient();

    const handleReview = data => {
        data.email = user?.email;
        data.name = user?.displayName;

        fetch("https://hungry-den-server.onrender.com/reviews", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Thank you for your feedback');
                reset();
                queryClient.invalidateQueries('reviews');
            })
    }

    return (
        <section>

            <h2 className='border-b-2 border-b-gray-200 mt-12 -mb-20 mx-16 md:mx-24 lg:mx-56'></h2>
            <h2 className='header-font text-4xl w-fit mx-auto px-3 md:px-5 lg:px-5 mt-14 mb-10 text-gray-200 bg-black'>Add Review</h2>

            <form onSubmit={handleSubmit(handleReview)} className='flex flex-col w-96 mx-auto mb-4'>

                <label className='w-full max-w-xs text-gray-200 ml-9 mb-1 font-semibold'>
                    Your&rsquo;s Say
                </label>

                <textarea
                    {...register("feedback")}
                    type='text'
                    placeholder='Your&rsquo;s Say'
                    className="input input-bordered bg-transparent shadow shadow-white text-orange-300 border-yellow-400 w-full max-w-xs mx-auto mb-2.5"
                />

                <label className='w-full max-w-xs text-gray-200 ml-9 mb-1 font-semibold'>
                    Ratings
                </label>

                <select
                    {...register("ratings")}
                    className="input input-bordered bg-transparent shadow shadow-white text-orange-300 border-yellow-400 w-full max-w-xs mx-auto mb-2.5">

                    <option className='bg-black' value="5">★★★★★</option>
                    <option className='bg-black' value="4">★★★★</option>
                    <option className='bg-black' value="3">★★★</option>
                    <option className='bg-black' value="2">★★</option>
                    <option className='bg-black' value="1">★</option>
                    <option className='bg-black' value="None">No Ratings</option>
                </select>

                <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold shadow shadow-white hover:rounded-2xl w-full max-w-xs mx-auto py-2 mt-1.5 rounded-md">
                    Submit
                </button>
            </form>

            <MyReview />

        </section>)
}

export default AddReview