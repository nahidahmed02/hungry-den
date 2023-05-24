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

    return (
        <section className='mt-36 mb-20'>
            {selectedFoods.length === 0
                ?
                <p className='font-bold text-center text-2xl italic text-red-600'>No Items Selected</p>
                :
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


            }
        </section>
    )
}

export default Cart