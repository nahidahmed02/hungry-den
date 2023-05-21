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