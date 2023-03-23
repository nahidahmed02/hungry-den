import React, { useEffect, useState } from 'react'
import Food from './Food'

const Foods = () => {

    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    return (
        <section className='bg-slate-300 rounded-md mx-8 lg:mx-24 p-8 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8 mb-14 mt-6'>
            {foods.map(food => <Food
                key={food.id}
                food={food}
            ></Food>)}
        </section>
    )
}

export default Foods