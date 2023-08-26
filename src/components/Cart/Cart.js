import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import SelectedFood from './SelectedFood';
import { AuthContext } from '@/src/context/AuthProvider';
import Loading from '../Loading/Loading';
import useCart from '@/src/hooks/useCart';

const Cart = () => {
    const router = useRouter();
    const { user, loading } = useContext(AuthContext);
    const {
        selectedFoods,
        handleRemoveFromCart,
        sumOfAllPrice,
        includingDeliveryChrg
    } = useCart();


    if (loading) {
        return <Loading></Loading>
    }

    return (
        <section className='pt-24 min-h-screen'>

            <h2 className='text-orange-500 font-serif text-center text-3xl font-bold mb-4'>Cart</h2>

            {selectedFoods?.length === 0
                ?
                <p className='font-bold text-center text-2xl italic text-red-500'>No Items Selected</p>
                :
                <>
                    <div className="overflow-x-auto ml-6 lg:mx-24 border rounded-t-lg border-black border-b-0">
                        <table className="table w-full">
                            <thead>
                                <tr className='text-center text-white'>
                                    <td className='bg-orange-500 '>SL No.</td>
                                    <th className='bg-orange-500'>Image</th>
                                    <th className='bg-orange-500'>Category</th>
                                    <th className='bg-orange-500'>Name</th>
                                    <th className='bg-orange-500'>Unit Price</th>
                                    <th className='bg-orange-500'>Quantity</th>
                                    <th className='bg-orange-500'>Price (+vat)</th>
                                    <th className='bg-orange-500'>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    selectedFoods?.map((selectedFood, index) => <SelectedFood
                                        key={selectedFood._id}
                                        index={index}
                                        selectedFood={selectedFood}
                                        handleRemoveFromCart={handleRemoveFromCart}
                                    ></SelectedFood>)
                                }

                            </tbody>
                        </table>
                    </div>

                    {
                        !user
                        &&
                        <small className='text-gray-200 italic ml-6 lg:ml-24'>
                            * As you are not logged in from your profile, you will be redirected to Login page after pressing the button below.
                        </small>
                    }

                    <div className='mt-6 mb-10 text-center'>
                        <p className='mr-6 py-3 px-8 lg:text-md font-bold text-white'>Total : ${sumOfAllPrice} + $12 (Delivery Charge) = ${includingDeliveryChrg}</p>
                        <button onClick={() => router.push('/paymentOpt')} className='bg-orange-500 text-white shadow shadow-white rounded-md py-1 px-4 hover:scale-x-110 font-bold'>Proceed To Payment</button>
                    </div>
                </>
            }
        </section>
    )
}

export default Cart