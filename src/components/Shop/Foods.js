import React, { useContext } from 'react'
import Food from './Food'
import { Context } from '@/src/context/Context';


const Foods = () => {

    let { currentFilteredFoods, searchQuery, searchResult } = useContext(Context);

    return (
        <section className='rounded-md mx-4 lg:mx-16 p-3 md:p-5 lg:p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-8 mb-4'>
            {
                searchQuery && searchResult?.map(food => <Food
                    key={food.id}
                    food={food}
                ></Food>)
            }
            {
                !searchQuery && currentFilteredFoods?.map(food => <Food
                    key={food.id}
                    food={food}
                ></Food>)
            }
        </section>
    )
}

export default Foods