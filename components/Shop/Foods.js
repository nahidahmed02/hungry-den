import { Context } from '@/context/Context';
import React, { useContext } from 'react'
import Food from './Food'


const Foods = () => {
    const { filteredFoods } = useContext(Context)

    return (
        <section className='bg-slate-300 rounded-md mx-4 lg:mx-24 p-3 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8 mb-14 mt-3'>
            {filteredFoods.map(food => <Food
                key={food.id}
                food={food}
            ></Food>)}
        </section>
    )
}

export default Foods