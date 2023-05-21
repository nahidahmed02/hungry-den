import React from 'react'
import SelectedFood from './SelectedFood';

const Cart = () => {

    const selectedFoods = JSON.parse(localStorage?.getItem('selectedFood'))

    const handleRemoveFromCart = (id) => {
        if (typeof window !== 'undefined') {
            const existingSelectedFood = JSON.parse(localStorage.getItem('selectedFood')) || [];
            const updatedSelectedFood = existingSelectedFood.filter((item) => item.id !== id);
            localStorage.setItem('selectedFood', JSON.stringify(updatedSelectedFood));
        }
    };

    return (
        <section className='mt-36 mb-20'>
            {selectedFoods.length === 0
                ?
                <p className='font-bold text-center text-2xl italic text-red-600'>No Items Selected</p>
                :
                <section>
                    {selectedFoods.map(selectedFood => <SelectedFood
                        key={selectedFood.id}
                        selectedFood={selectedFood}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></SelectedFood>)}
                </section>

            }
        </section>
    )
}

export default Cart