import { Context } from '@/context/Context';
import React, { useContext, useState } from 'react'
import Food from './Food';

const SearchBar = () => {
    const { foods, setFoods } = useContext(Context);

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        // Perform search logic here
        const results = foods.filter(food => food.name.toLowerCase().includes(query.toLowerCase()));
        setSearchResult(results);
    };


    return (
        <>
            <section className="form-control searchBar">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={handleSearch}
                    className="input w-52"
                />
            </section>


            <section className='bg-slate-300 rounded-md mx-4 lg:mx-24 p-3 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8 mb-4 mt-3'>
                {searchResult.map(food => <Food
                    key={food.id}
                    food={food}
                ></Food>)}
            </section>

        </>


    )
}

export default SearchBar