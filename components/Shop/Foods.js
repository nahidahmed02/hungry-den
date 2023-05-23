import React, { useContext } from 'react'
import Food from './Food'
import { Context } from '@/context/Context'


const Foods = () => {

    let { currentFilteredFoods, searchResult } = useContext(Context);

    return (
        <section className='rounded-md mx-4 lg:mx-16 p-3 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8 mb-4'>
            {
                searchResult.length >= 1 && searchResult?.map(food => <Food
                    key={food.id}
                    food={food}
                ></Food>)
            }
            {
                currentFilteredFoods?.map(food => <Food
                    key={food.id}
                    food={food}
                ></Food>)
            }
        </section>
    )
}

export default Foods