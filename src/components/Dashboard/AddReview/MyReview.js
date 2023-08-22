import React, { useContext } from 'react';
import Loading from '../../Loading/Loading';
import { useQuery } from 'react-query';
import { AuthContext } from '@/src/context/AuthProvider';
import { toast } from 'react-hot-toast';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;

    const { data: myReviews, isLoading, refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/reviews/${email}`);
            const data = res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDeleteReview = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('Review Deleted')
                    refetch();
                }
            })
    }


    const ratingStar = (rating) => {

        if (rating === '1') {
            return '★'
        }
        else if (rating === '2') {
            return '★★'
        }
        else if (rating === '3') {
            return '★★★'
        }
        else if (rating === '4') {
            return '★★★★'
        }
        else if (rating === '5') {
            return '★★★★★'
        }
        else {
            return 'None'
        }
    }

    return (
        <section>
            <h2 className='lg:mt-16 mb-4 text-2xl font-serif font-bold text-orange-500 text-center'>My Reviews</h2>

            <div className='mb-4 text-center'>
                {
                    myReviews?.length === 0
                        ?
                        <p className='text-red-500 italic text-center text-2xl font-bold mt-12'>No Review Yet</p>
                        :
                        myReviews?.map(review =>
                            <div key={review._id} className='mx-8 lg:mx-24'>
                                <div className='border grid grid-cols-5 border-yellow-300 rounded-md mb-2 py-1'>
                                    <p className='italic font-semibold col-span-3 text-gray-200'>{review.feedback}</p>
                                    <p className='text-gray-200 mb-1.5 col-span-1'>
                                        <span className={`${review.ratings !== 'None' && 'text-orange-300'} ml-2`}>
                                            {ratingStar(review.ratings)}
                                        </span>
                                    </p>

                                    <button
                                        onClick={() => handleDeleteReview(review?._id)}
                                        className='bg-red-500 hover:bg-transparent col-span-1 w-3/4 lg:w-1/2 mx-auto my-1 pb-1 font-bold rounded-lg text-sm text-white border hover:border-red-500'
                                    >
                                        Delete
                                    </button>
                                </div>


                            </div>)
                }
            </div>
        </section>
    );
};

export default MyReview;