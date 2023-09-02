import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import { AuthContext } from '@/src/context/AuthProvider';
import useUsers from '@/src/hooks/useUsers';
import { toast } from 'react-hot-toast';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { RiDoubleQuotesR } from 'react-icons/ri';

const AllReviews = () => {
    const { user } = useContext(AuthContext);
    const [users] = useUsers();
    const role = users?.find(userFromDB => userFromDB.email === user?.email)?.role;

    const { data: reviews, isLoading, refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await fetch('https://hungry-den-server.onrender.com/reviews');
            const data = res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDeleteReview = id => {
        fetch(`https://hungry-den-server.onrender.com/reviews/${id}`, {
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
            <h2 className='text-orange-500 font-serif text-center text-3xl font-bold mt-8 mb-6'>Customer&rsquo;s Say About Us</h2>

            <section className='h-96 overflow-y-auto mx-5 lg:mx-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-3 lg:gap-5'>
                {
                    reviews?.length === 0
                        ?
                        <p className='text-red-500 italic text-center text-2xl font-bold mt-12'>No Review Yet</p>
                        :


                        reviews?.map(review =>
                            <div key={review._id}>

                                <div className='relative rounded-md py-4 mb-2 text-center text-gray-200 border border-yellow-300 shadow shadow-white'>
                                    <RiDoubleQuotesL className='absolute top-1 left-1 text-yellow-400' />

                                    <p className='font-semibold text-sm'>{review.name}</p>
                                    <p className='italic text-xs mb-2'>{review.email}</p>
                                    <p className='italic font-semibold '> {review.feedback}</p>
                                    <p className=' mb-1.5'>
                                        <span className={`${review.ratings !== 'None' && 'text-orange-300'} `}>
                                            {ratingStar(review.ratings)}
                                        </span>
                                    </p>


                                    <RiDoubleQuotesR className='absolute bottom-1 right-1 text-yellow-400' />

                                    {
                                        role === 'Admin'
                                        &&
                                        <span
                                            onClick={() => handleDeleteReview(review?._id)}
                                            className='cursor-pointer bg-red-500 hover:bg-red-600 px-2 hover:px-4 pb-0.5 font-bold my-2 rounded-lg text-xs'>
                                            Delete
                                        </span>
                                    }
                                </div>

                            </div>)
                }
            </section>
        </section>
    );
};

export default AllReviews;