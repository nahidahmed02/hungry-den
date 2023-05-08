import React from 'react'
import SelectedFood from './SelectedFood';

const Cart = () => {
    const selectedFoods = JSON.parse(localStorage?.getItem('selectedFood'))

    const handleRemoveFromCart = () => {
        localStorage.removeItem('selectedFood');
    };

    return (
        <section className='mt-36 mb-20'>
            {!selectedFoods
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