import { loadStripe } from '@stripe/stripe-js';
import React, { useContext, useState } from 'react';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '@/src/hooks/useCart';
import Loading from '../../Loading/Loading';
import { useQuery } from 'react-query';
import { AuthContext } from '@/src/context/AuthProvider';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_Payment_Gateway_PK);

const PayOnline = () => {
    const { selectedFoods, sumOfAllPrice, includingDeliveryChrg } = useCart();
    const { user } = useContext(AuthContext);
    const email = user?.email;

    const { data: profile, isLoading } = useQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            const res = await fetch(`https://hungry-den-server.onrender.com/profile/${email}`);
            const data = res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='min-h-screen pt-24 text-gray-200'>

            <h2 className='border-b-2 border-b-gray-200 mt-8 -mb-20 mx-10 md:mx-24 lg:mx-56'></h2>
            <h2 className='header-font text-4xl w-fit mx-auto px-3 md:px-5 lg:px-5 mt-14 mb-10 text-gray-200 bg-black'>Online Payment</h2>

            <Elements stripe={stripePromise}>
                <CheckoutForm
                    user={user}
                    profile={profile}
                    selectedFoods={selectedFoods}
                    includingDeliveryChrg={includingDeliveryChrg}
                    sumOfAllPrice={sumOfAllPrice}
                />
            </Elements>
        </section>
    );
};

export default PayOnline;