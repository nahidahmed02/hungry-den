import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [foods, setFoods] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [foodsPerPage, setFoodsPerPage] = useState(6);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    const handleCategoryClick = (category) => {
        setSelectedCategory(category === 'All' ? '' : category);
        setSearchQuery('');
        setCurrentPage(1);
    }

    const filteredFoods = selectedCategory
        ?
        foods.filter(food => food.category === selectedCategory)
        :
        foods

    const totalFilteredFoods = !searchQuery
        ?
        filteredFoods.length
        :
        searchResult.length;

    const totalPages = Math.ceil(totalFilteredFoods / foodsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const indexOfLastFood = currentPage * foodsPerPage;
    const indexOfFirstFood = indexOfLastFood - foodsPerPage;
    const currentFilteredFoods = filteredFoods.slice(indexOfFirstFood, indexOfLastFood);

    // ------------------ search bar implementation --------------------

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        // search logic
        const results = foods.filter(food => food.name.toLowerCase().includes(query.toLowerCase()));
        setSearchResult(results);
        setCurrentPage(1);
    };


    return (
        <Context.Provider value={{
            foods,
            selectedCategory,
            handleCategoryClick,
            filteredFoods,
            currentFilteredFoods,
            totalPages,
            currentPage,
            handlePageChange,
            searchQuery,
            searchResult,
            handleSearch
        }}>
            {children}
        </Context.Provider>
    )
}
