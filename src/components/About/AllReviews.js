import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import { AuthContext } from '@/src/context/AuthProvider';
import { toast } from 'react-hot-toast';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { RiDoubleQuotesR } from 'react-icons/ri';
import useAdmin from '@/src/hooks/useAdmin';

const AllReviews = () => {
    const { user } = useContext(AuthContext);
    const [admin] = useAdmin(user);

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

            <h2 className='border-b-2 border-b-orange-500 mt-16 -mb-20 mx-10 md:mx-24 lg:mx-56'></h2>
            <h2 className='header-font text-4xl w-fit mx-auto px-3 md:px-5 lg:px-5 mt-14 mb-10 text-orange-500 bg-black'>Customer&rsquo;s Say</h2>

            <section className='h-96 lg:h-72 overflow-y-auto mx-5 lg:mx-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-3 lg:gap-5'>
                {
                    reviews?.length === 0
                        ?
                        <p className='text-gray-200 italic text-center text-2xl font-bold mt-12'>No Review Yet</p>
                        :
                        reviews?.map(review =>
                            <div key={review._id}>

                                <div className='relative rounded-md py-4 text-center text-gray-200 border border-yellow-500 shadow shadow-gray-200'>
                                    <RiDoubleQuotesL className='absolute top-1 left-1 text-yellow-500' />

                                    <p className='font-semibold text-sm'>{review.name}</p>
                                    <p className='italic text-xs mb-2'>{review.email}</p>
                                    <p className='italic font-semibold '> {review.feedback}</p>
                                    <p className=' mb-1.5'>
                                        <span className={`${review.ratings !== 'None' && 'text-yellow-500'} `}>
                                            {ratingStar(review.ratings)}
                                        </span>
                                    </p>


                                    <RiDoubleQuotesR className='absolute bottom-1 right-1 text-yellow-500' />

                                    {
                                        admin
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