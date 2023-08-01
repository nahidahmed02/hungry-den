import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const AllReviews = () => {
    const { data: reviews, isLoading } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/reviews');
            const data = res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section>
            <h2 className='text-orange-500 font-serif text-center text-3xl font-bold mt-12 mb-4'>Customer&rsquo;s Say About Us</h2>

            <div className='overflow-x-auto mx-36 h-96'>

                {
                    reviews?.length === 0
                        ?
                        <p className='text-red-500 italic text-center text-2xl font-bold mt-12'>No Review Yet</p>
                        :
                        reviews.map((review, index) => <>

                            <div className={`chat ${index % 2 !== 0 ? 'chat-start' : 'chat-end'} `}>
                                <div className="chat-header mb-1">
                                    {review.name}
                                    <span className="text-xs opacity-75 ml-1.5">{review.email}</span>
                                </div>

                                <div className="chat-bubble italic">
                                    {review?.feedback}
                                    <br />
                                    Ratings {review?.ratings}
                                </div>

                            </div>
                        </>)
                }
            </div>


        </section>
    );
};

export default AllReviews;