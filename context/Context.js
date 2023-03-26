import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [foods, setFoods] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category === 'All' ? '' : category)
    }

    const filteredFoods = selectedCategory
        ? foods.filter(food => food.category === selectedCategory)
        : foods

    useEffect(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    return (
        <Context.Provider value={{
            foods,
            selectedCategory,
            handleCategoryClick,
            filteredFoods
        }}>
            {children}
        </Context.Provider>
    )
}
