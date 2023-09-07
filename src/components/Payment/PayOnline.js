import { loadStripe } from '@stripe/stripe-js';
import React, { useContext, useState } from 'react';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '@/src/hooks/useCart';
import Loading from '../Loading/Loading';
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
        <section className='min-h-screen pt-28 text-gray-200'>
            <h2 className='text-orange-500 font-serif text-center text-3xl font-bold mb-4'>Online Payment</h2>

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