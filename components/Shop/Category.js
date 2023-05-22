import { Context } from '@/context/Context'
import React, { useContext } from 'react'

const Category = () => {
    const { selectedCategory, handleCategoryClick } = useContext(Context);

    return (
        <>
            <p className='text-center font-bold mb-1'>Filter by Category</p>
            <hr />
            <section className="navbar">
                <ul className="menu menu-horizontal px-1 mx-auto">

                    <li
                        className={`cursor-pointer text-white px-2 py-1 mx-2 mb-2 lg:mb-0 rounded 
                        ${selectedCategory === ''
                                ?
                                'bg-blue-500'
                                :
                                'bg-gray-600'
                            }`}

                        onClick={() => handleCategoryClick('All')}>
                        All
                    </li>

                    <li
                        className={`cursor-pointer text-white px-2 py-1 mx-2 mb-2 lg:mb-0 rounded 
                        ${selectedCategory === 'halal-meat'
                                ?
                                'bg-blue-500'
                                :
                                'bg-gray-600'
                            }`}

                        onClick={() => handleCategoryClick('halal-meat')}>
                        Meat ( Halal )
                    </li>

                    <li
                        className={`cursor-pointer text-white px-2 py-1 mx-2 mb-2 lg:mb-0 rounded 
                        ${selectedCategory === 'meat'
                                ?
                                'bg-blue-500'
                                :
                                'bg-gray-600'
                            }`}

                        onClick={() => handleCategoryClick('meat')}>
                        Meat
                    </li>

                    <li
                        className={`cursor-pointer text-white px-2 py-1 mx-2 mb-2 lg:mb-0 rounded 
                        ${selectedCategory === 'beef'
                                ?
                                'bg-blue-500'
                                :
                                'bg-gray-600'
                            }`}

                        onClick={() => handleCategoryClick('beef')}>
                        Beef
                    </li>

                    <li
                        className={`cursor-pointer text-white px-2 py-1 mx-2 mb-2 lg:mb-0 rounded 
                        ${selectedCategory === 'fish'
                                ?
                                'bg-blue-500'
                                :
                                'bg-gray-600'
                            }`}

                        onClick={() => handleCategoryClick('fish')}>
                        Fish
                    </li>

                    <li
                        className={`cursor-pointer text-white px-2 py-1 mx-2 mb-2 lg:mb-0 rounded 
                        ${selectedCategory === 'soft-drinks'
                                ?
                                'bg-blue-500'
                                :
                                'bg-gray-600'
                            }`}

                        onClick={() => handleCategoryClick('soft-drinks')}>
                        Soft Drinks
                    </li>

                    <li
                        className={`cursor-pointer text-white px-2 py-1 mx-2 mb-2 lg:mb-0 rounded 
                        ${selectedCategory === 'snacks'
                                ?
                                'bg-blue-500'
                                :
                                'bg-gray-600'
                            }`}

                        onClick={() => handleCategoryClick('snacks')}>
                        Snacks
                    </li>

                </ul>
            </section>
        </>
    )
}

export default Category