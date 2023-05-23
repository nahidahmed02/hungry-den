import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [foods, setFoods] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [foodsPerPage, setFoodsPerPage] = useState(6);

    useEffect(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    const handleCategoryClick = (category) => {
        setSelectedCategory(category === 'All' ? '' : category)
    }

    const filteredFoods = selectedCategory
        ?
        foods.filter(food => food.category === selectedCategory)
        :
        foods

    const totalFilteredFoods = filteredFoods.length;
    const totalPages = Math.ceil(totalFilteredFoods / foodsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const indexOfLastFood = currentPage * foodsPerPage;
    const indexOfFirstFood = indexOfLastFood - foodsPerPage;
    const currentFilteredFoods = filteredFoods.slice(indexOfFirstFood, indexOfLastFood);

    return (
        <Context.Provider value={{
            foods,
            selectedCategory,
            handleCategoryClick,
            filteredFoods,
            currentFilteredFoods,
            totalPages,
            currentPage,
            handlePageChange
        }}>
            {children}
        </Context.Provider>
    )
}
