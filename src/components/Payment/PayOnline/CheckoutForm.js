import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const CheckoutForm = ({ user, profile, selectedFoods, sumOfAllPrice, includingDeliveryChrg }) => {

    const email = user?.email;
    const stripe = useStripe();
    const elements = useElements();
    const router = useRouter();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [phone, setPhone] = useState(profile[0]?.phone ? profile[0]?.phone : '');
    const [address, setAddress] = useState(profile[0]?.address ? profile[0]?.address : '');


    useEffect(() => {
        fetch('https://hungry-den-server.onrender.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ includingDeliveryChrg })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
    }, [includingDeliveryChrg]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
        } else {
            setCardError('')
        }

        setProcessing(true);

        const { paymentIntent, errorConfirm } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'Anonymous',
                        email: email || 'Unknown',
                    },
                },
            },
        );
        console.log(paymentIntent);

        const transactionId = paymentIntent?.id;
        const today = new Date();
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        };
        const time = today.toLocaleString('en-US', options);

        const data = {
            phone,
            address,
            time,
            email: email,
            sumOfAllPrice,
            includingDeliveryChrg,
            paymentType: "Online Payment",
            deliveryStatus: "Pending",
            orders: { ...selectedFoods },
            transactionId
        }

        fetch('https://hungry-den-server.onrender.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        if (errorConfirm) {
            console.log(errorConfirm);
        }

        setProcessing(false);

        if (paymentIntent?.status === 'succeeded') {
            toast.success('Payment Successful');
            router.push('/dashboard/myOrders');
            localStorage?.clear();
        }
    }

    return (
        <form onSubmit={handleSubmit} className='w-96 mx-auto mb-10 px-6 py-8 rounded-lg border border-yellow-500 shadow shadow-gray-200'>

            <h2 className='text-orange-500 font-bold text-xl text-center mb-2.5'>Order Summary</h2>

            {/* ------------------- ORDER LIST -------------------- */}

            <h2 className='font-semibold text-sm text-gray-200'>
                {selectedFoods?.map(order =>
                    <li
                        key={order._id}
                        className='mb-1 flex justify-between'
                    >
                        <span>{order.name} ({order.category}) x {order.quantity}</span>
                        <span className=''>${order.total}</span>
                    </li>)
                }
            </h2>

            <hr />

            {/* --------------------- PRICING --------------------- */}

            <h2 className='font-semibold text-sm text-gray-200 flex justify-between mt-2'><span>Total Price</span> ${sumOfAllPrice}</h2>
            <h2 className='font-semibold text-sm text-gray-200 flex justify-between mb-2'><span>Delivery Charge</span> $12</h2>

            <hr />

            <h2 className='font-semibold text-gray-200 flex justify-between mt-1.5'><span>Total</span> ${includingDeliveryChrg}</h2>

            {/* --------------------- USER INFO --------------------- */}

            <div className='flex flex-col mt-3'>

                <div className='flex mr-2'>

                    <div className='flex flex-col w-5/12 lg:w-7/12'>
                        <label className='text-gray-200 ml-2.5 mb-1 font-semibold'>
                            Phone
                        </label>
                        <input
                            type="text"
                            placeholder="Phone"
                            onChange={event => setPhone(event.target.value)}
                            defaultValue={phone}
                            className="input input-bordered w-full text-yellow-500 border-yellow-500 shadow shadow-gray-200 bg-transparent h-7"
                            required
                        />
                    </div>

                    <div className='flex flex-col w-3/5 lg:w-4/5'>
                        <label className='text-gray-200 ml-4 mb-1 font-semibold'>
                            Address
                        </label>
                        <input
                            type="text"
                            placeholder="Address"
                            onChange={event => setAddress(event.target.value)}
                            defaultValue={address}
                            className="input input-bordered w-full text-yellow-500 border-yellow-500 shadow shadow-gray-200 bg-transparent ml-2 h-7"
                            required
                        />
                    </div>
                </div>

                {/* --------------------- PAYMENT TYPE --------------------- */}
                <h2 className='font-semibold text-center text-xs text-gray-200 my-3'>Payment Type: Online Payment</h2>

            </div>

            <CardElement
                className='py-1 px-1 rounded-lg border border-yellow-500 shadow shadow-gray-200'
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: 'orange',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button
                type="submit"
                disabled={!stripe || !clientSecret || processing}
                className='btn btn-sm mt-5 px-5 hover:px-6 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:text-gray-400 shadow shadow-gray-200'
            >Pay & Place Order</button>

            {cardError && <p className='mt-4 text-yellow-500'>{cardError}</p>}

        </form>
    );
};

export default CheckoutForm;