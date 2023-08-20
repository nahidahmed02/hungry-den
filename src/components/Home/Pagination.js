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
                <ul className="pagination ">
                    {pageNumbers.map(number => (
                        <li
                            key={number}
                            className={`page-item ${currentPage === number ? 'active' : ''}`}
                        >
                            <button onClick={() => handlePageChange(number)} className="page-link shadow shadow-white font-semibold">
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