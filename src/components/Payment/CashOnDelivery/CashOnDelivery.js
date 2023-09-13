import { AuthContext } from '@/src/context/AuthProvider';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import { useRouter } from 'next/router';
import useCart from '@/src/hooks/useCart';

const CashOnDelivery = () => {

    const { selectedFoods, sumOfAllPrice, includingDeliveryChrg } = useCart();
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const router = useRouter();

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

    const handlePlaceOrder = data => {

        data.time = time;
        data.email = user?.email;
        data.sumOfAllPrice = sumOfAllPrice;
        data.includingDeliveryChrg = includingDeliveryChrg;
        data.paymentType = "Cash on Delivery";
        data.deliveryStatus = "Pending";
        data.orders = { ...selectedFoods };

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
                if (data.acknowledged) {
                    toast.success('Order Taken!');
                    localStorage?.clear();
                    router.push('/dashboard/myOrders');
                } else {
                    toast.error('Order Placement Denied!')
                }
            })
    }

    return (
        <section className='min-h-screen pt-24 text-gray-200'>

            <h2 className='border-b-2 border-b-gray-200 mt-8 -mb-20 mx-10 md:mx-24 lg:mx-56'></h2>
            <h2 className='header-font text-4xl w-fit mx-auto px-3 md:px-5 lg:px-5 mt-14 mb-10 text-gray-200 bg-black'>Cash On Delivery</h2>


            <div className='w-96 mx-auto mb-10 px-6 py-8 rounded-lg border border-yellow-300 shadow shadow-white'>

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

                <form onSubmit={handleSubmit(handlePlaceOrder)} className='flex flex-col mt-3'>

                    <div className='flex mr-2'>

                        <div className='flex flex-col w-5/12 lg:w-7/12'>
                            <label className='text-gray-200 ml-2.5 mb-1 font-semibold'>
                                Phone
                            </label>
                            <input
                                {...register("phone")}
                                type="text"
                                placeholder="Phone"
                                defaultValue={profile[0]?.phone ? profile[0]?.phone : ''}
                                className="input input-bordered w-full text-orange-300 border-yellow-400 shadow shadow-white bg-transparent h-7"
                                required
                            />
                        </div>

                        <div className='flex flex-col w-3/5 lg:w-4/5'>
                            <label className='text-gray-200 ml-4 mb-1 font-semibold'>
                                Address
                            </label>
                            <input
                                {...register("address")}
                                type="text"
                                placeholder="Address"
                                defaultValue={profile[0]?.address ? profile[0]?.address : ''}
                                className="input input-bordered w-full text-orange-300 border-yellow-400 shadow shadow-white bg-transparent ml-2 h-7"
                                required
                            />
                        </div>
                    </div>

                    {/* --------------------- PAYMENT TYPE --------------------- */}
                    <h2 className='font-semibold text-center text-xs text-gray-200 mt-3 mb-1'>Payment Type: Cash On Delivery</h2>

                    {/* --------------------- BUTTON --------------------- */}

                    <div className='text-center'>
                        <button type='submit' className='btn btn-xs mx-2 mt-2 px-3 hover:px-5 bg-orange-500 hover:bg-orange-600 shadow shadow-white'>Place Order</button>
                    </div>

                </form>

            </div>

        </section>
    );
};

export default CashOnDelivery;