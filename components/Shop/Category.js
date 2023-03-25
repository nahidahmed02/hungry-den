import { Context } from '@/context/Context'
import React, { useContext, useState } from 'react'
import Foods from './Foods';

const Category = () => {
    const { foods } = useContext(Context)

    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category === 'All' ? '' : category)
    }

    const filteredFoods = selectedCategory
        ? foods.filter(food => food.category === selectedCategory)
        : foods

    return (
        <>
            <section className="navbar">
                <ul className="menu menu-horizontal px-1 mx-auto">
                    <li className={`cursor-pointer bg-gray-600 text-white px-2 py-1 mx-2 mb-2 lg:mb-0 rounded ${selectedCategory === '' ? 'bg-blue-600' : ''
                        }`} onClick={() => handleCategoryClick('All')}>All</li>
                    <li className={`cursor-pointer bg-gray-600 text-white px-2 py-1 mx-2 mb-2 lg:mb-0 rounded ${selectedCategory === 'halal-meat' ? 'bg-blue-600' : ''
                        }`} onClick={() => handleCategoryClick('halal-meat')}>Meat ( Halal )</li>
                    <li className={`cursor-pointer bg-gray-600 text-white px-2 py-1 mx-2 mb-2 lg:mb-0 rounded ${selectedCategory === 'meat' ? 'bg-blue-600' : ''
                        }`} onClick={() => handleCategoryClick('meat')}>Meat</li>
                    <li className={`cursor-pointer bg-gray-600 text-white px-2 py-1 mx-2 mb-2 lg:mb-0 rounded ${selectedCategory === 'beef' ? 'bg-blue-600' : ''
                        }`} onClick={() => handleCategoryClick('beef')}>Beef</li>
                    <li className={`cursor-pointer bg-gray-600 text-white px-2 py-1 mx-2 mb-2 lg:mb-0 rounded ${selectedCategory === 'fish' ? 'bg-blue-600' : ''
                        }`} onClick={() => handleCategoryClick('fish')}>Fish</li>
                    <li className={`cursor-pointer bg-gray-600 text-white px-2 py-1 mx-2 mb-2 lg:mb-0 rounded ${selectedCategory === 'soft-drinks' ? 'bg-blue-600' : ''
                        }`} onClick={() => handleCategoryClick('soft-drinks')}>Soft Drinks</li>
                    <li className={`cursor-pointer bg-gray-600 text-white px-2 py-1 mx-2 mb-2 lg:mb-0 rounded ${selectedCategory === 'snacks' ? 'bg-blue-600' : ''
                        }`} onClick={() => handleCategoryClick('snacks')}>Snacks</li>

                </ul>

            </section>
            <Foods foods={filteredFoods} />
        </>
    )
}

export default Category