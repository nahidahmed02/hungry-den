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

        fetch("http://localhost:5000/reviews", {
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
            <h2 className='lg:mt-6 mb-4 text-2xl font-serif font-bold text-orange-500 text-center'>Add Review</h2>

            <form onSubmit={handleSubmit(handleReview)} className='flex flex-col w-auto lg:w-96 mx-auto mb-4'>

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
                    Ratings
                </label>

                <select
                    {...register("ratings")}
                    className="input input-bordered w-full max-w-xs mx-auto mb-2.5">

                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                    <option value="None">No Ratings</option>
                </select>

                <button
                    type="submit"
                    className="bg-orange-500 text-white font-bold w-full max-w-xs mx-auto py-2 rounded-md">
                    Submit
                </button>
            </form>

            <MyReview />

        </section>)
}

export default AddReview