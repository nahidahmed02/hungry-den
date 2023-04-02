import { Context } from '@/context/Context';
import React, { useContext, useState } from 'react'
import Food from './Food'
import Pagination from './Pagination';


const Foods = () => {
    const { filteredFoods } = useContext(Context);

    const [currentPage, setCurrentPage] = useState(1);
    const [foodsPerPage, setFoodsPerPage] = useState(12);

    const totalFilteredFoods = filteredFoods.length;
    const totalPages = Math.ceil(totalFilteredFoods / foodsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const indexOfLastFood = currentPage * foodsPerPage;
    const indexOfFirstFood = indexOfLastFood - foodsPerPage;
    const currentFilteredFoods = filteredFoods.slice(indexOfFirstFood, indexOfLastFood);

    return (
        <section className='bg-slate-300 rounded-md mx-4 lg:mx-24 p-3 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8 mb-14 mt-3'>
            {currentFilteredFoods.map(food => <Food
                key={food.id}
                food={food}
            ></Food>)}

            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            ></Pagination>
        </section>
    )
}

export default Foods