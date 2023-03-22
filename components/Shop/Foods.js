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
        <section className='mx-32 grid lg:grid-cols-4 gap-8 mb-14 mt-6'>
            {foods.map(food => <Food
                key={food.id}
                food={food}
            ></Food>)}
        </section>
    )
}

export default Foods