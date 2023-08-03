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
        // const rating = myReviews?.map(review => review.ratings);

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
                            <div key={review._id} className='border border-yellow-500 rounded mx-32 mb-2'>

                                <p className='italic font-semibold'>{review.feedback}</p>
                                <p>Ratings Given:
                                    <span className={`${review.ratings !== 'None' && 'text-orange-300'}`}>
                                        {ratingStar(review.ratings)}
                                    </span>
                                </p>

                                <button
                                    onClick={() => handleDeleteReview(review?._id)}
                                    className='bg-red-500 px-2 rounded-lg text-sm mb-2 text-white'
                                >
                                    Delete
                                </button>

                            </div>)
                }
            </div>
        </section>
    );
};

export default MyReview;