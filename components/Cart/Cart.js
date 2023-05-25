import React, { useEffect, useState } from 'react'
import SelectedFood from './SelectedFood';

const Cart = () => {
    const [selectedFoods, setSelectedFoods] = useState([]);


    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedSelectedFoods = JSON.parse(localStorage?.getItem('selectedFood'))
            if (storedSelectedFoods) {
                setSelectedFoods(storedSelectedFoods);
            }
        }
    }, []);

    const handleRemoveFromCart = (id) => {
        if (typeof window !== 'undefined') {
            const updatedSelectedFoods = selectedFoods.filter((item) => item.id !== id);
            setSelectedFoods(updatedSelectedFoods);
            localStorage.setItem('selectedFood', JSON.stringify(updatedSelectedFoods));
        }
    };

    const sumOfAllPrice =
        selectedFoods?.reduce((sum, food) => sum + parseFloat(food.total), 0).toFixed(2);

    return (
        <section className='mt-32 mb-20'>

            <h2 className='text-orange-500 font-serif text-center text-3xl font-bold mb-8'>Cart</h2>

            {selectedFoods.length === 0
                ?
                <p className='font-bold text-center text-2xl italic text-red-600'>No Items Selected</p>
                :
                <>
                    <div className="overflow-x-auto mx-24 border rounded-t-lg border-black border-b-0">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th className='bg-orange-400 text-center text-white'>SL No.</th>
                                    <th className='bg-orange-400 text-center text-white'>Image</th>
                                    <th className='bg-orange-400 text-center text-white'>Category</th>
                                    <th className='bg-orange-400 text-center text-white'>Name</th>
                                    <th className='bg-orange-400 text-center text-white'>Unit Price</th>
                                    <th className='bg-orange-400 text-center text-white'>Quantity</th>
                                    <th className='bg-orange-400 text-center text-white'>Price (+vat)</th>
                                    <th className='bg-orange-400 text-center text-white'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedFoods.map((selectedFood, index) => <SelectedFood
                                    key={selectedFood.id}
                                    index={index}
                                    selectedFood={selectedFood}
                                    handleRemoveFromCart={handleRemoveFromCart}
                                ></SelectedFood>)}

                            </tbody>
                        </table>
                    </div>

                    <div className='mt-6 text-center'>
                        <p className=' mr-6 py-3 px-8 text-lg font-bold'>Total : ${sumOfAllPrice}</p>
                        <button className='bg-blue-400 text-white rounded py-1 px-4  font-bold'>Proceed To Payment</button>

                    </div>
                </>
            }
        </section>
    )
}

export default Cart