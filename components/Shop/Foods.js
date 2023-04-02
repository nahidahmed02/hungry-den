import React from 'react'
import Food from './Food'


const Foods = ({ currentFilteredFoods }) => {

    return (
        <section className='bg-slate-300 rounded-md mx-4 lg:mx-24 p-3 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8 mb-4 mt-3'>
            {currentFilteredFoods.map(food => <Food
                key={food.id}
                food={food}
            ></Food>)}
        </section>
    )
}

export default Foods