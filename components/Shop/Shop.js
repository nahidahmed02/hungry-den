import React, { useContext, useState } from 'react'
import Category from './Category'
import Foods from './Foods'
import Pagination from './Pagination'
import { Context } from '@/context/Context';

const Shop = () => {
    const { filteredFoods } = useContext(Context);

    const [currentPage, setCurrentPage] = useState(1);
    const [foodsPerPage, setFoodsPerPage] = useState(6);

    const totalFilteredFoods = filteredFoods.length;
    const totalPages = Math.ceil(totalFilteredFoods / foodsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const indexOfLastFood = currentPage * foodsPerPage;
    const indexOfFirstFood = indexOfLastFood - foodsPerPage;
    const currentFilteredFoods = filteredFoods.slice(indexOfFirstFood, indexOfLastFood);
    return (
        <section className='mt-20'>
            <h1 className='text-center text-2xl font-bold mt-4 mb-2 text-green-600'>What would you like to order?</h1>
            <p className='text-center font-bold mb-1'>Filter by Category</p>
            <hr />

            <Category />

            <Foods
                currentFilteredFoods={currentFilteredFoods}
            ></Foods>

            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            ></Pagination>

        </section>
    )
}

export default Shop