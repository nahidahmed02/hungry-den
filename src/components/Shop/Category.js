import { Context } from '@/src/context/Context';
import React, { useContext } from 'react'

const Category = () => {
    const { foods, selectedCategory, handleCategoryClick } = useContext(Context);

    const categories = foods?.map(food => food.category)

    // removing the duplicates categories
    const category = categories?.filter((category, index) => categories.indexOf(category) === index)

    return (
        <>
            <p className='text-center font-bold mb-1'>Filter by Category</p>
            <hr className='mx-7 lg:mx-24' />

            <section className="navbar">
                <ul className="menu menu-horizontal px-1 ml-3 md:mx-auto lg:mx-auto">

                    <li
                        className={`cursor-pointer text-white text-sm px-2 py-0.5 lg:py-1 mx-1 mb-2 lg:mb-0 rounded 
                        ${selectedCategory === ''
                                ?
                                'bg-blue-500'
                                :
                                'bg-gray-600'
                            }`}

                        onClick={() => handleCategoryClick('All')}>
                        All
                    </li>

                    {
                        category?.map(ctgry => <li
                            className={`cursor-pointer text-white text-sm px-2 py-0.5 lg:py-1 mx-1 mb-2 lg:mb-0 rounded 
                    ${selectedCategory === ctgry
                                    ?
                                    'bg-blue-500'
                                    :
                                    'bg-gray-600'
                                }`}

                            onClick={() => handleCategoryClick(ctgry)}
                            key={category}>
                            {ctgry}
                        </li>)
                    }
                </ul>
            </section>
        </>
    )
}

export default Category