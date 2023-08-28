import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import { AuthContext } from '@/src/context/AuthProvider';
import useUsers from '@/src/hooks/useUsers';
import { toast } from 'react-hot-toast';

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
            <h2 className='text-orange-500 font-serif text-center text-3xl font-bold mt-8 mb-4'>Customer&rsquo;s Say About Us</h2>

            <div className='overflow-x-auto mx-6 lg:mx-36 h-96'>

                {
                    reviews?.length === 0
                        ?
                        <p className='text-red-500 italic text-center text-2xl font-bold mt-12'>No Review Yet</p>
                        :
                        reviews?.map((review, index) =>

                            <div key={index} className={`chat ${index % 2 !== 0 ? 'chat-start' : 'chat-end'}`}>

                                <div className="chat-header mb-1 text-white">
                                    {review.name}
                                    <span className="text-xs opacity-75 ml-1.5">{review.email}</span>
                                </div>

                                <div className="chat-bubble text-sm italic">

                                    {review?.feedback}

                                    <br />

                                    Ratings: <span className={`${review?.ratings !== 'None' && 'text-yellow-400'}`}>
                                        {ratingStar(review?.ratings)}
                                    </span>

                                    <br />

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

                            </div>
                        )
                }
            </div>


        </section>
    );
};

export default AllReviews;