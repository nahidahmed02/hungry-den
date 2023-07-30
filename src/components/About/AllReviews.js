import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const AllReviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery({
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

            <p className='text-red-500 italic text-center text-2xl font-bold mt-12'>No Review Yet</p>
        </section>
    );
};

export default AllReviews;