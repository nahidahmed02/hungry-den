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
            const res = await fetch(`https://hungry-den-server.onrender.com/reviews/${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDeleteReview = id => {
        fetch(`https://hungry-den-server.onrender.com/reviews/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
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

            <h2 className='border-b-2 border-b-orange-500 mt-20 -mb-20 mx-16 md:mx-24 lg:mx-56'></h2>
            <h2 className='header-font text-4xl w-fit mx-auto px-3 md:px-5 lg:px-5 mt-14 mb-6 text-orange-500 bg-black'>My Reviews</h2>

            <div className='mb-4 text-center'>
                {
                    myReviews?.length === 0
                        ?
                        <p className='text-gray-200 italic text-center text-2xl font-bold mt-8'>No Review Yet</p>
                        :
                        myReviews?.map(review =>
                            <div key={review._id} className='mx-4 lg:mx-24'>
                                <div className='border grid grid-cols-4 lg:grid-cols-5 border-yellow-500 rounded-md mb-2 py-1.5'>
                                    <p className='italic p-2 font-semibold col-span-2 lg:col-span-3 text-gray-200'>{review.feedback}</p>
                                    <p className='text-gray-200 col-span-1 my-auto'>
                                        <span className={`${review.ratings !== 'None' && 'text-yellow-500'} `}>
                                            {ratingStar(review.ratings)}
                                        </span>
                                    </p>

                                    <button
                                        onClick={() => handleDeleteReview(review?._id)}
                                        className='my-auto bg-transparent hover:bg-transparent border border-orange-500 hover:border-orange-600 col-span-1 w-3/4 lg:w-1/2 mx-auto py-0.5 hover:w-5/6 hover:lg:w-2/3 font-semibold rounded-lg text-xs text-gray-200 hover:text-orange-500 shadow shadow-gray-200'
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