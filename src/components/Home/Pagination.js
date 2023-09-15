import { Context } from '@/src/context/Context';
import React, { useContext } from 'react'

const Pagination = () => {

    const { totalPages, currentPage, handlePageChange } = useContext(Context);

    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <section className="flex justify-center mb-8">
            <nav>
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li
                            key={number}
                            className={`page-item ${currentPage === number ? 'text-orange-500 text-xl' : 'text-gray-200'}`}
                        >
                            <button onClick={() => handlePageChange(number)} className="page-link hover:text-orange-500 shadow shadow-gray-200 font-semibold">
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}

export default Pagination