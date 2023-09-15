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

            <h2 className='border-b-2 border-b-orange-500 mt-8 -mb-20 mx-16 md:mx-24 lg:mx-56'></h2>
            <h2 className='header-font text-4xl w-fit mx-auto px-3 md:px-5 lg:px-5 mt-14 mb-10 text-orange-500 bg-black'>Cart</h2>

            {selectedFoods?.length === 0
                ?
                <p className='font-bold text-center text-2xl italic text-gray-200'>No Items Selected</p>
                :
                <>
                    <div className="overflow-x-auto mx-5 lg:mx-24 border rounded-t-lg border-black border-b-0">
                        <table className="table w-full">
                            <thead>
                                <tr className='text-center text-gray-200'>
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
                        <div className='text-gray-200 italic text-center'>
                            <small>
                                * As you are not logged in from your profile, you will be redirected to Login page after pressing the button below.
                            </small>
                        </div>
                    }

                    <div className='mt-6 mb-10 text-center'>
                        <p className='mb-3 text-sm lg:text-md font-bold text-gray-200'>Total : ${sumOfAllPrice} + $12 (Delivery Charge) = ${includingDeliveryChrg}</p>
                        <button onClick={() => router.push('/paymentOpt')} className='bg-orange-500 text-gray-200 shadow shadow-gray-200 rounded-md py-1 px-4 hover:scale-x-110 font-bold text-sm'>Proceed To Payment</button>
                    </div>
                </>
            }
        </section>
    )
}

export default Cart