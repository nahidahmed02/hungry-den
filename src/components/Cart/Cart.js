import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import SelectedFood from './SelectedFood';
import { AuthContext } from '@/src/context/AuthProvider';
import Loading from '../Loading/Loading';

const Cart = () => {
    const router = useRouter();
    const [selectedFoods, setSelectedFoods] = useState([]);
    const { user, loading } = useContext(AuthContext)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedSelectedFoods = JSON.parse(localStorage?.getItem('selectedFood'))
            if (storedSelectedFoods) {
                setSelectedFoods(storedSelectedFoods);
            }
        }
    }, []);

    if (loading) {
        return <Loading></Loading>
    }

    const handleRemoveFromCart = (id) => {
        if (typeof window !== 'undefined') {
            const updatedSelectedFoods = selectedFoods.filter((item) => item._id !== id);
            setSelectedFoods(updatedSelectedFoods);
            localStorage.setItem('selectedFood', JSON.stringify(updatedSelectedFoods));
        }
    };

    const sumOfAllPrice =
        selectedFoods?.reduce((sum, food) => sum + parseFloat(food.total), 0).toFixed(2);

    const includingDeleveryChrg = parseFloat(sumOfAllPrice) + parseFloat(12);

    return (
        <section className='pt-24 h-screen'>

            <h2 className='text-orange-500 font-serif text-center text-3xl font-bold mb-4'>Cart</h2>

            {selectedFoods.length === 0
                ?
                <p className='font-bold text-center text-2xl italic text-red-600'>No Items Selected</p>
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
                                    selectedFoods.map((selectedFood, index) => <SelectedFood
                                        key={selectedFood._id}
                                        index={index}
                                        selectedFood={selectedFood}
                                        handleRemoveFromCart={handleRemoveFromCart}
                                    ></SelectedFood>)
                                }

                            </tbody>
                        </table>
                    </div>

                    {!user
                        &&
                        <small className='text-gray-200 italic ml-6 lg:ml-24'>* As you are not logged in from your profile, you will be redirected to Login page after pressing the button below.</small>
                    }

                    <div className='mt-6 text-center'>
                        <p className=' mr-6 py-3 px-8 text-lg font-bold text-white'>Total : ${sumOfAllPrice} + $12 (Delevery Charge) = ${includingDeleveryChrg}</p>
                        <button onClick={() => router.push('/paymentOpt')} className='bg-orange-500 text-white shadow shadow-white rounded-md py-1 px-4 hover:scale-x-110 font-bold'>Proceed To Payment</button>
                    </div>
                </>
            }
        </section>
    )
}

export default Cart