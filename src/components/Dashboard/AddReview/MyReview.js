import React, { useContext } from 'react';
import Loading from '../../Loading/Loading';
import { useQuery } from 'react-query';
import { AuthContext } from '@/src/context/AuthProvider';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const email = user.email;

    const { data: myReviews, isLoading } = useQuery({
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

    return (
        <section>
            <h2 className='lg:mt-16 mb-4 text-2xl font-serif font-bold text-orange-500 text-center'>My Reviews</h2>

            <div className='mb-4 text-center'>
                {
                    myReviews?.length === 0
                        ?
                        <p className='text-red-500 italic text-center text-2xl font-bold mt-12'>No Review Yet</p>
                        :
                        myReviews?.map(review => <p key={review._id}>{review.feedback}</p>)
                }
            </div>
        </section>
    );
};

export default MyReview;